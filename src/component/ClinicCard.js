import React from 'react'
import {
  Link
} from "react-router-dom";
export default function ClinicCard(props) {
  return (
    <div>
      <div>
      <Link style={{ textDecoration: 'none' }}>
        <div className="container" >
          <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.location}</p>
              <Link to='/particular-clinic' className="btn btn-primary" style={{ fontSize: '0.9rem' }} >{props.btntext}</Link>
              
            </div>
          </div>
        </div>
      </Link>
    </div>
    </div>
  )
}
