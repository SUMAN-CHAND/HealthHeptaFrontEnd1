import React from 'react'
import { Link } from 'react-router-dom'
export default function LabTestCard(props) {
    return (
        <div >
            <div>
                <span style={{ textDecoration: 'none' }}>
                    <div className="container" style={{textAlign:'center'}}>
                        <div className="card">
                            <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.img}`} className="card-img-top" alt="..." style={{ maxHeight: '13vh' }} />
                            <div className="card-body" style={{width:'100%'}}>
                                <h5 className="card-title text-truncate">{props.title} </h5>
                                <p className="card-title text-truncate mx-1">{props.desc} </p>
                                <p className="card-text text-truncate">PinCode:- {props.pin_code}</p>
                                <p className="card-text text-success">Price:- <span className='text-success'>₹{props.price}</span></p>
                                <Link to={`/book/lab-test/${props.id}`} className="btn btn-primary text-truncate" style={{ fontSize: '0.9rem' }}>{props.btntext}</Link>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}
