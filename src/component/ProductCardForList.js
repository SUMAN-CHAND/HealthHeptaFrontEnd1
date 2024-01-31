import React from 'react'
import product2 from '../img/medicalproduct.webp'
import { Link } from 'react-router-dom'

export default function ProductCardForList(props) {

  const product_id = props.product_id;
  const value = `/addtocart/${product_id}`;
  const discount = props.discount;
  const productPrice = props.price;
  // console.log(discount)
  // console.log(productPrice)
  const discountPrice = productPrice - (productPrice * discount) / 100;
  return (
    <div>
      <div className=" ProductCardForList m my-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.imgpath}`} alt="" style={{ height: '5vh', width: '5vw' }} />
        <span className='py-1' style={{ display: 'flex' }}>
          <p className='m-2'>{props.name}</p>
          <p className='m-2'>{props.description}</p>
          <p className="text-success m-2" style={{ marginRight: '10px' }}>Price:- ₹{discountPrice}</p>
          <p className=" m-2" style={{ textDecoration: 'line-through', Color: '#878787' }}>₹{props.price}</p>
          <p className="text-success m-2" style={{ marginRight: '10px', }}>{props.discount}% Off</p>
          <Link to={value} className="btn" style={{ fontSize: '0.9rem', backgroundColor: '#0cbea9' }}>View Detail</Link>
        </span>
      </div>
    </div>
  )
}
