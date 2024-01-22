import React, { useEffect, useState } from 'react'
import productimg from '../../img/madicalProduct.avif'
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
export default function ViewOrder() {

    const pStyle = {
        display: 'flex',
        alignItems: 'center',

    }

    const [order, setOrders] = useState([]);
    const param = useParams();
    var order_id = param.order_id;
    // console.log(product_id)
    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/orders/order/${order_id}`)
            .then(res => {
                if (res.data) {
                    setOrders(res.data[0]);
                    // console.log(product)
                }
            })
            .catch(err => {
                console.log(err)
            })

    },[])
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/superadmin' , { state: { loggedIn: true } });
    }

    return (

        <>
            <div className="container mt-4 " style={{ minHeight: '50vh' }}>
                <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='modal-img mx-3 mb-3' style={{ width: '15vw', marginBottom: '2vh' }} src={productimg} alt="" />
                    <div className="products  mx-3 mb-3">
                        <h2 className=''> || Order Details ||</h2>
                        <hr />
                        <span style={pStyle}>
                            <p className='mx-2'>Order Id : </p> <p>{order.id}</p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Product Id : </p> <p>{order.product_id}</p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>User Id : </p> <p>{order.user_id} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Date : </p> <p>{order.order_date} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Payment Mood : </p> <p>{order.payment_type} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Payment Status : </p> <p>{order.payment_status} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'> Status : </p> <p>{order.status} </p>
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
