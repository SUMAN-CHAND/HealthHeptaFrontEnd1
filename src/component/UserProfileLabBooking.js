import React, { useEffect, useState } from 'react'
import logo from '../img/logo.jpeg';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import axiosClient from './axiosClient';
export default function UserProfileLabBooking() {
    const [labBookings, setLabBookings] = useState([]);
    const [labTestImages, setLabTestImages] = useState([]);
    useEffect(() => {
        axiosClient.get(`/user/see-lab-booking`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setLabBookings(response.data[0]);
                    setLabTestImages(response.data[1])
                }
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, []);
    const deleteOrder = (id) => {
        // console.log('click')
        const response = window.confirm("Are you sure to Cancle the Order?");
        if (response) {
            axiosClient.delete(`/orders/${id}`)
                .then(response => {
                    console.log(response)
                    if (response.data === 'success') {
                        alert('Order Delete Successfully');
                    }
                    else if (response.data === null) {
                        console.log(response.data)
                        alert('Order cannot be canceled at this time');
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            alert('No Order Cancled')
        }

    }
    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const [imageFound, setImageFound] = useState(true);
    return (
        <div>
            <div className="tab-pane" id="order" role="tabpanel" aria-labelledby="list-Medicine-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className='p-2'> Your Lab Tests</h2>
                <div className="gap" style={{ width: '100%', height: '1vh', backgroundColor: '#80808070', marginBottom: '25px' }}></div>
                {labBookings.map((lab, index) => (
                    <>
                        <Link to={`${lab.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="" style={{ width: '85vw', display: 'flex', flexDirection: 'initial', backgroundColor: 'white', height: '15vh', alignItems: 'center' }}>
                                
                                <div className="card-body" style={{ textAlign: 'left', marginLeft: '5vw' }}>
                                    <h5 className="card-text">Appoiment Date:- {lab.appoint_date}</h5>
                                    <h5 className="card-text">Appoiment Time:- {lab.appoint_time}</h5>
                                    <h5 className="card-text">Patient Name :- {lab.name}</h5>
                                    <h5 className="card-text">Test Name:- {lab.Test_Name}</h5>
                                    <h5 className="card-text">Labrotory Name:- {lab.sub_name}</h5>
                                </div>
                                <div className="icons">
                                    <IoIosArrowForward style={{ color: 'blue' }} />
                                </div>

                            </div>
                        </Link>
                        <hr style={{ width: '100vw' }} />
                    </>
                ))}
            </div>
        </div>
    )
}
