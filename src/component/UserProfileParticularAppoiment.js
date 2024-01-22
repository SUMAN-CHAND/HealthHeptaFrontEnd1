import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function UserProfileParticularAppoiment() {
    const param = useParams();
    // console.log(param.id)
    const appoiment_id = param.id;

    const [labBookings, setLabBookings] = useState([]);
    const [labTestImages, setLabTestImages] = useState([]);

    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/user/see-appoiment/${appoiment_id}`)
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
                    {/* <Link to={`${lab.id}`} style={{ textDecoration: 'none', color: 'black' }}> */}
                    <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2vh' }}>
                        {/* <img className="" src={logo} alt="Card image cap" style={{ width: '7vw', height: '5vh' }} /> */}

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
                            {/* <h5 className="card-title">Price:- ₹{product.total_amount}</h5> */}
                            {/* <p className="card-text">Quantity:- {product.quantity}</p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                        <div className="icons">
                            {/* <button className='btn btn-danger' onClick={() => deleteOrder(product.id)}>Cancle</button> */}
                            <Link to='/profile/lab-booking'><button className='btn btn-primary'>Back</button></Link>
                        </div>

                    </div>
                    {/* </Link> */}
                    <hr style={{ width: '100vw' }} />
                    {/* {setImageFound(true)} */}
                </>
            ))}
        </div>
    )
}
