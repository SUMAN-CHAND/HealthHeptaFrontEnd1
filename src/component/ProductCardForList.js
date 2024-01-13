import React from 'react'
import product2 from '../img/medicalproduct.webp'
import { Link } from 'react-router-dom'

export default function ProductCardForList() {
  return (
    <div>
      <div className=" ProductCardForList m my-3" style={{ display: 'flex' }}>
        <img src={product2} alt="" style={{ height: '5vh', width: '5vw' }} />
        <span className='py-1' style={{ display: 'flex' }}>
          <p className='m-2'>Product Name</p>
          <p className='m-2'>250ml</p>
          <p className="text-success m-2" style={{ marginRight: '10px' }}>₹600</p>
          <p className=" m-2" style={{ textDecoration: 'line-through', Color: '#878787' }}>₹900</p>
          <p className="text-success m-2" style={{ marginRight: '10px', }}>25% off</p>
          <Link to='/addtocart'> <button className='btn btn-primary'> <p>Order Now</p></button></Link>
        </span>
      </div>
    </div>
  )
}
