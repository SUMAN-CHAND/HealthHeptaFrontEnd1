import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesCard(props) {
  return (
    <div>
      <div>
      <span style={{ textDecoration: 'none' }}>
        <div className="container" >
          <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title} </h5>
              <p className="card-text">{props.location}</p>
              <Link to='/product' className="btn btn-primary" style={{ fontSize: '0.9rem' }}>{props.btntext}</Link>
            </div>
          </div>
        </div>
      </span>
    </div>
    </div>
  )
}
