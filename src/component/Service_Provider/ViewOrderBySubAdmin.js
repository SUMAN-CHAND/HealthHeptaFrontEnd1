
import React, { useEffect, useState } from 'react'
import productimg from '../../img/madicalProduct.avif'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewOrderBySubAdmin() {
  const pStyle = {
    display: 'flex',
    alignItems: 'center',

  }

  const [product, setProduct] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrders] = useState([]);

  const param = useParams();
  // var order_id = param.id;
  var product_id = param.product_id;
  // console.log(order_id)
  // console.log(product_id)
  // console.log(product_id)
  useEffect(() => {
    axios.get(`http://localhost:8081/sub-admin/orders/product/${product_id}`)
      .then(res => {
        if (res.data) {
          setProduct(res.data[0]);
          console.log(product)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  var user_id = param.user_id;
  // console.log(user_id)
  useEffect(() => {
    axios.get(`http://localhost:8081/sub-admin/orders/customer/${user_id}`)
      .then(res => {
        if (res.data) {
          setCustomer(res.data[0]);
        }
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  var order_id = param.id;
  // console.log(product_id)
  useEffect(() => {
    axios.get(`http://localhost:8081/sub-admin/orders/order/${order_id}`)
      .then(res => {
        if (res.data) {
          setOrders(res.data[0]);
          // console.log(product)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sub-admin/home', { state: { loggedIn: true } });
  }

  return (
    <div>
      <h2 style={{ color: 'royalblue', marginTop: '2vh' }}>|| View Full Order Details ||</h2>
      <div style={{ display: 'flex' }}>
        <div className="container mt-4 " style={{ minHeight: '50vh' }}>
          <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className='modal-img mx-3 mb-3' style={{ width: '10vw', marginBottom: '2vh' }} src={productimg} alt="" />
            <div className="products  mx-3 mb-3">
              <h2 className=''>Product Details</h2>
              <hr />
              <span style={pStyle}>
                <p className='mx-2'>Product Id : </p> <p>{product.product_id}</p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Product Name : </p> <p>{product.product_name}</p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Product Price : </p> <p>{product.product_price} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Product Category : </p> <p>{product.category} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Discount : </p> <p>{product.discount} </p>
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-4 " style={{ minHeight: '50vh' }}>
          <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className='modal-img mx-3 mb-3' style={{ width: '10vw', borderRadius: '25%' }} src={productimg} alt="" />
            <div className="products  mx-3 mb-3">
              <h2 className=''>Customer Details</h2>
              <hr />
              <span style={pStyle}>
                <p className='mx-2'>Customer Id : </p> <p>{customer.id} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Customer Name : </p> <p>{customer.name} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Customer Phone No : </p> <p>{customer.phone} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Customer Address : </p> <p>{customer.name}, {customer.Village},{customer.P_O},{customer.City},{customer.district},{customer.State},{customer.Pin} </p>
              </span>

            </div>
          </div>
        </div>
        <div className="container mt-4 " style={{ minHeight: '50vh' }}>
          <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className='modal-img mx-3 mb-3' style={{ width: '10vw', marginBottom: '2vh' }} src={productimg} alt="" />
            <div className="products  mx-3 mb-3">
              <h2 className=''> || Order Details ||</h2>
              <hr />
              <span style={pStyle}>
                <p className='mx-2'>Order Id : </p> <p>{order.id}</p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Product Id : </p> <p>{order.product_id}</p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>User Id : </p> <p>{order.user_id} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Date : </p> <p>{order.order_date} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Payment Mood : </p> <p>{order.payment_type} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'>Payment Status : </p> <p>{order.payment_status} </p>
              </span>
              <span style={pStyle}>
                <p className='mx-2'> Status : </p> <p>{order.status} </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button className='btn btn-primary' onClick={handleClick} style={{ width: '20%', cursor: 'pointer' }}>Back</button>
      </div>
    </div>
  )
}
