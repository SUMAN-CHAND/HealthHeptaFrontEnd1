import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCardForList(props) {
  const product_id = props.product_id;
  const value = `/addtocart/${product_id}`;
  const discount = props.discount;
  const productPrice = props.price;
  const discountPrice = productPrice - (productPrice * discount) / 100;
  return (
    <div>
      <div className=" ProductCardForList m my-3" style={{ display: 'flex', alignItems: 'center',justifyContent:'flex-start' }}>
        <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.imgpath}`} alt="" style={{ height: '5vh', width: '5vw' }} />
        <span className='py-1' style={{ display: 'flex',width:'100%',alignItems:'center',justifyContent:'space-evenly' }}>
          <p className=''>{props.name}</p>
          <p className=''>{props.description}</p>
          <p className="text-success " style={{ marginRight: '10px' }}>Price:- ₹{discountPrice}</p>
          <p className="" style={{ textDecoration: 'line-through', Color: '#878787' }}>₹{props.price}</p>
          <p className="text-success " style={{ marginRight: '10px', }}>{props.discount}% Off</p>
          <Link to={value} className="btn" style={{ fontSize: '0.9rem', backgroundColor: '#0cbea9' }}> <p>View Detail</p></Link>
        </span>
      </div>
    </div>
  )
}
