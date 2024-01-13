import React from 'react'
import doctorimg from '../img/doctor3.webp';
import {
    Link
} from "react-router-dom";


export default function DoctorCardForAD(props) {
    return (
        <div className='doctor-c-l' style={{padding:'2vw'}}>
            <div className="row">
                <div className="col-12" >
                    <div className="doctor  container shadow" style={{ display: 'flex',backgroundColor:'#dffffb' }}>

                        <div className="deccription" style={{ display: 'flex' }} >
                        <img src={`http://localhost:8081/${props.imgpath}`} className="card-img-top" alt="..." style={{ maxWidth:'6vw' }}  />
                            <div>
                                <h5 className='fs-8'>{props.name} </h5>
                                <h6 className='fs-9'>{props.specializes} </h6>
                                <p className='fs-10'>{
                                    props.desc
                                }
                                </p>
                                {/* <p>13 YEARS OF EXPERIENCE</p> */}
                                <div className='location ' style={{ display: 'flex' ,justifyContent:'center',alignItems:'center'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-3" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <p>{props.location}</p>
                                </div>
                            </div>
                            <div className="container doctor-c-d" style={{ height: '20vh' }}>
                                <h5>{props.clinics}</h5>
                                <p>{props.clinic_descs}
                                </p>
                                <Link to={`/doctor/${props.id}`} className="btn" style={{ fontSize: '0.9rem', width: '100%', backgroundColor: '#07dbc1' }}>Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
