import React, { useEffect, useState } from 'react'
import productimg from '../../img/doctor2.webp'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosClient from '../axiosClient';
export default function ViewSubAdminOrders() {
    const pStyle = {
        display: 'flex',
        alignItems: 'center',

    }

    const [orders, setOrders] = useState([]);
    const param = useParams();
    var user_id = param.user_id;
    // console.log(user_id)
    useEffect(() => {
        console.log('click')
        axiosClient.get(`/superadmin/subadmin/orders/${user_id}`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setOrders(response.data)
                }
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, [])
    // useEffect(() => {
    //     axiosClient.get(`/superadmin/orders/customer/${user_id}`)
    //         .then(res => {
    //             if (res.data) {
    //                 setCustomer(res.data[0]);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // },[])

    // console.log(customer)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/superadmin', { state: { loggedIn: true } });
    }
    const deleteProduct = (product_id) => {
        const response = window.confirm("Are you sure to delete the Product?");
        if (response) {
          axiosClient.delete(`/sub-admin/home/delete/${product_id}`)
            .then(response => {
              if (response.data === 'success') {
                alert('Product Delete Successfully');
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          alert('No Product Delete')
        }
      }

    return (

        <>
            <div className="container mt-4 " style={{ minHeight: '50vh' }}>
                <table className="table table-striped">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Product id</th>
                            <th scope="col">Order_id</th>
                            <th scope="col">User_id</th>
                            <th scope="col">Order date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Payment Staus</th>
                            <th scope="col">Payment Type</th>
                        </tr>
                    </thead>
                    <tbody style={{ verticalAlign: 'middle' }}>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <th scope="row">{order.id}</th>
                                <td>img...</td>
                                <td>{order.product_id}</td>
                                <td>{order.user_id}</td>
                                <td>{order.order_date}</td>
                                <td>{order.status}</td>
                                <td>{order.payment_status}</td>
                                <td>{order.payment_type}</td>
                                <td> <button className="btn btn-danger m-1" onClick={() => deleteProduct(order.product_id)}  >Delete</button>  <Link to={`updateproduct/${order.product_id}`} > <button style={{ cursor: 'pointer' }} type='button' className="btn btn-warning m-1">Update</button></Link> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button">
                    <button className='btn btn-primary' onClick={handleClick} style={{ width: '20%', cursor: 'pointer' }}>Back</button>
                </div>
            </div>
        </>

    )
}
