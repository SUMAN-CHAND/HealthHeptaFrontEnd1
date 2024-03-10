import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import axiosClient from './axiosClient';
export default function UserProfileAppoiments() {
    const [appoiments, setAppoiments] = useState([]);
    useEffect(() => {
        axiosClient.get(`/user/see-appoiment`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setAppoiments(response.data);
                }
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, []);
    const deleteOrder = (id) => {
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
        // minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const [imageFound, setImageFound] = useState(true);
    return (
        <div>
            <div className="tab-pane" id="order" role="tabpanel" aria-labelledby="list-Medicine-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className='p-2'> Your Appoiments</h2>
                <div className="gap" style={{ width: '100%', height: '1vh', backgroundColor: '#80808070', marginBottom: '25px' }}></div>
                {appoiments.map((appoiment, index) => (
                    <>
                        <Link to={`${appoiment.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                            <div className="" style={{ width: '85vw', display: 'flex', flexDirection: 'initial', backgroundColor: 'white', height: '12vh', alignItems: 'center' }}>
                                <div className="card-body" style={{ textAlign: 'left', marginLeft: '5vw' }}>
                                    <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
                                        <h5 className="card-title" style={{ marginRight: '5px' }}>Appoiment Date:- {appoiment.appoint_date}</h5>
                                        <h5 className="card-title">Appoiment Time:- {appoiment.appoint_time}</h5>
                                    </div>
                                    <h5 className="card-text">Patient Name :- {appoiment.name}</h5>
                                    <h5 className="card-text">Doctor Name:- {appoiment.doc_name}</h5>
                                    <h5 className="card-text">Doctor Specializes:- {appoiment.specializes}</h5>
                                </div>
                                <div className="icons">
                                    <IoIosArrowForward />
                                </div>

                            </div >
                        </Link>
                        <hr style={{ width: '100vw' }} />
                    </>
                ))}
            </div>
        </div >
    )
}
