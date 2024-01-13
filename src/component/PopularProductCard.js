import React from 'react'
import medical from '../img/medicalproduct.webp';
import { Link } from 'react-router-dom'

export default function PopularProductCard() {
  return (
    <div>
      <Link style={{ textDecoration: 'none' }}>
        <div className="container" >
          <div className="card">
            <img src={medical} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Face Cream</h5>
              <div style={{ display: 'flex', marginLeft: '16px' }}>
                <p className="text-success" style={{ marginRight: '10px' }}>₹600</p>
                <p className=" " style={{ textDecoration: 'line-through', Color: '#878787' }}>₹900</p>

              </div>
              <p className="text-success" style={{ marginRight: '10px', marginTop: '-15px' }}>25% off</p>
              <Link to='/addtocart' className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Shop Now</Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
