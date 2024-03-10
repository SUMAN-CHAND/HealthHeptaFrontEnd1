import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axiosClient from './axiosClient';
export default function UserProfileParticularAppoiment() {
    const param = useParams();
    const appoiment_id = param.id;
    const [labBookings, setLabBookings] = useState([]);
    const [labTestImages, setLabTestImages] = useState([]);
    useEffect(() => {
        axiosClient.get(`/user/see-appoiment/${appoiment_id}`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setLabBookings(response.data[0]);
                    setLabTestImages(response.data[1])
                }
                console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, []);
    return (
        <div>
            {labBookings.map((lab, index) => (
                <>
                    <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2vh' }}>
                        {labTestImages.map((img) => (
                            <div key={img.id}>
                                {parseInt(lab.doctor_imageId) === img.id ?
                                    <>
                                        <img
                                            src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                            alt={img.name}
                                            style={{ width: '75%' }}
                                        />
                                    </>
                                    : <></>}
                            </div>
                        ))}
                        <div className="card-body" style={{ textAlign: 'left', marginLeft: '5vw' }}>
                            <h5 className="card-text">Patient Name :- {lab.name}</h5>
                            <h5 className="card-text">Patient Phone No :- {lab.ph_number}</h5>
                            <h5 className="card-text">Doctor Name:- {lab.doc_name}</h5>
                            <h5 className="card-text">Doctor Desc:- {lab.doc_desc}</h5>
                            <h5 className="card-text">Doctor Phone No:- {lab.Phone_number}</h5>
                            <h5 className="card-text">Appoiment Date:- {lab.appoint_date}</h5>
                            <h5 className="card-text">Appoiment Time:- {lab.appoint_time}</h5>
                            <h5 className="card-text">Location:- {lab.location}</h5>
                            <h5 className="card-text">Type OF Visite:- {lab.type_of_visite}</h5>
                            <h5 className="card-text">Lab Test Status:- {lab.AppointmentStatus}</h5>
                        </div>
                        <div className="icons">
                            <Link to='/profile/lab-booking'><button className='btn btn-primary'>Back</button></Link>
                        </div>
                    </div>
                    <hr style={{ width: '100vw' }} />
                </>
            ))}
        </div>
    )
}
