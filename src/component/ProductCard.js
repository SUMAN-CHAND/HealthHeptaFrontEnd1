import React from 'react'
import medical from '../img/medicalproduct.webp';
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  const product_id = props.product_id;
  const value = `/addtocart/${product_id}`;
  const discount = props.discount;
  const productPrice = props.price;
  // console.log(discount)
  // console.log(productPrice)
  const discountPrice = productPrice - (productPrice * discount) / 100;
  // console.log(discountPrice)

  return (
    <div className='' >
      <Link style={{ textDecoration: 'none' }}>
        <div className="container"  >
          <div className="card " style={{ alignItems: 'center' }} >
            {/* <div  style={{ width: '10vw' }} > */}
              <img src={`http://localhost:8081/${props.imgpath}`} className="card-img-top" alt="..." style={{ maxHeight: '13vh' }}  />
            {/* </div> */}
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <div style={{}}>
                <p style={{ marginBottom: '1px' }}>{props.description}</p>
                <p className="text-success" style={{ marginBottom: '1px' }}>Price:- ₹{discountPrice}</p>
                <p >MRP:- <span style={{ textDecoration: 'line-through', Color: '#878787' }}>₹{props.price}</span></p>
              </div>
              <p className="text-success card-body-product-discount" style={{ marginRight: '10px' }}>25% off</p>
              <Link to={value} className="btn" style={{ fontSize: '0.9rem', backgroundColor: '#0cbea9' }}>View Detail</Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
