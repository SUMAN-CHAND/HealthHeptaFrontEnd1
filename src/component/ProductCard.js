import React, { useState } from 'react'
import medical from '../img/medicalproduct.webp';
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus, FaMinus } from 'react-icons/fa6';
import axiosClient from './axiosClient';
export default function ProductCard(props) {
  const navigate = useNavigate();
  const product_id = props.product_id;
  const value = `/addtocart/${product_id}`;
  const discount = props.discount;
  const productPrice = props.price;
  const discountPrice = productPrice - (productPrice * discount) / 100;
  const [productAdded, setProductAdded] = useState(false);
  // Quantity State
  const [quantity, setQuantity] = useState(1);
  const LogedIn = sessionStorage.getItem('LogedIn');
  const userId = sessionStorage.getItem('user_id');
  const haldelClick = () => {
    if (LogedIn) {
      axiosClient.post(`/addtocart/${product_id}/${quantity}`)
        .then(res => {
          if (res.data !== null) {
            console.log('success')
            setProductAdded(true);
          }
          else if (res.data === null) {
          }
        })
        .catch(err => console.log(err));
    }
    else {
      alert('Please Log In !! ')
      const redirectUrl = `/addtocart/${product_id}/`;
      sessionStorage.setItem('redirectUrl', redirectUrl);
      navigate('/login');
    }
  }
  // Increase Quantity
  const AddItems = () => {
    setQuantity(quantity => quantity + 1);

    axiosClient.post(`/product/increase_quantity/${product_id}`)
      .then(res => {
        if (res.data !== null) {
          console.log('success')
        }
        else if (res.data === null) {
        }
      })
      .catch(err => console.log(err));
  };
  // Decrease Quantity
  const DecreaseItems = () => {
    if (quantity > 0) { setQuantity(quantity => quantity - 1) };
    axiosClient.post(`/product/decrease_quantity/${product_id}`)
      .then(res => {
        if (res.data !== null) {
        }
        else if (res.data === null) {
        }

      })
      .catch(err => console.log(err));
    if (quantity === 1) { setProductAdded(false) };
  };
  return (
    <div className='' >
      <Link style={{ textDecoration: 'none' }}>
        <div className="container"  >
          <div className="card " style={{ alignItems: 'center' }} >
            <Link to={value}>
              <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.imgpath}`} className="card-img-top" alt="..." style={{ maxHeight: '13vh' }} />
            </Link>
            <div className="card-body">
              <Link to={value} style={{textDecoration:'none',color:'black'}}>
                <h5 className="card-title">{props.name}</h5>
                <div style={{}}>
                  <p style={{ marginBottom: '1px' }}>{props.description}</p>
                  <p className="text-success" style={{ marginBottom: '1px' }}>Price:- ₹{discountPrice}</p>
                  <p >MRP:- <span style={{ textDecoration: 'line-through', color: '#878787' }}>₹{props.price}</span></p>
                </div>
                <p className="text-success card-body-product-discount" style={{ marginRight: '10px' }}>{props.discount}% Off</p>
              </Link>
              {productAdded ? <>
                <span style={{ display: 'flex', justifyContent: 'center' }}>
                  <p style={{ display: 'flex' }}>
                    <span className='px-2' onClick={DecreaseItems}>
                      <FaMinus />
                    </span>
                    <span>
                      <h5>{quantity}</h5></span>  <span onClick={AddItems} className='px-2'>
                      <FaPlus />
                    </span>
                  </p>
                </span>
              </> : <>
                <Link onClick={haldelClick} type="button" className="btn " style={{ fontSize: '0.9rem', width: '80px', border: '2px solid black', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0', margin: '0' }}>
                  <span className='product-btn' style={{ padding: '4px 22px 4px 6px' }}>Add</span>
                  <span className='p-1' style={{ borderLeft: '1px solid black', backgroundColor: '#cae0e0f7 ' }}>
                    <FaPlus />
                  </span>
                </Link>
              </>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
