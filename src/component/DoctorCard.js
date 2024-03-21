import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Doctors(props) {
  return (
    <div>
      <Link to={`/doctor/${props.id}`} style={{textDecoration: 'none'}}>
        <div className="container" >
          <div className="card">
          <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.imgpath}`} className="card-img-top" alt="..." style={{ maxHeight: '13vh' }}  />
            <div className="card-body">
              <h6 className="card-title" style={{fontSize:'0.9rem'}}>{props.name}</h6>
              <p className="card-text"  style={{fontSize:'0.6rem' , marginBottom:'2px'}}>{props.description}</p>
              <p className="card-text text-success"  style={{fontSize:'0.6rem' , marginBottom:'2px'}}> ₹{props.fees}/Visit</p>
              <p className="card-text"  style={{fontSize:'0.6rem' , marginBottom:'2px'}}>{props.clnics}</p>
              <p className="card-text"  style={{fontSize:'0.6rem' , marginBottom:'2px'}}>{props.clinic_descs}</p>
              <p className="card-text"  style={{fontSize:'0.6rem' , marginBottom:'2px'}}>{props.location}</p>
              <Link to={`/doctor/${props.id}`} className="btn" style={{ fontSize: '0.7rem', backgroundColor: '#07dbc1' }}>Book Now</Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
