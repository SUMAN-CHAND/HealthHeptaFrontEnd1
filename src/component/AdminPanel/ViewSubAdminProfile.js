import React, { useEffect, useState } from 'react'
import productimg from '../../img/doctor2.webp'
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
export default function ViewSubAdminProfile() {
    const pStyle = {
        display: 'flex',
        alignItems: 'center',

    }

    const [customer, setCustomer] = useState([]);
    const param = useParams();
    var user_id = param.user_id;
    // console.log(user_id)
    useEffect(() => {
        axiosClient.get(`/superadmin/orders/customer/${user_id}`)
            .then(res => {
                if (res.data) {
                    setCustomer(res.data[0]);
                }
            })
            .catch(err => {
                console.log(err)
            })

    },[])

    console.log(customer)
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/superadmin' , { state: { loggedIn: true } });
    }

    return (

        <>
            <div className="container mt-4 " style={{ minHeight: '50vh' }}>
                <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='modal-img mx-3 mb-3' style={{ width: '15vw',borderRadius:'25%' }} src={productimg} alt="" />
                    <div className="products  mx-3 mb-3">
                        <h2 className=''>Customer Details</h2>
                        <hr />
                        <span style={pStyle}>
                            <p className='mx-2'>Customer Id : </p> <p>{customer.id} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Customer Name : </p> <p>{customer.name} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Customer Phone No : </p> <p>{customer.phone} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Customer Address : </p> <p>{customer.name}, {customer.Village},{customer.P_O},{customer.City},{customer.district},{customer.State},{customer.Pin} </p>
                        </span>
                        
                    </div>
                </div>
                <div className="button">
                    <button className='btn btn-primary' onClick={handleClick} style={{ width: '20%',cursor:'pointer' }}>Back</button>
                </div>
            </div>
        </>

    )
}
