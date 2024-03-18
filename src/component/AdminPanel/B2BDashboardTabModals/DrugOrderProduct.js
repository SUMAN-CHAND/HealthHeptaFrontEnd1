import React, { useEffect, useState } from 'react'

import {
  Link, useNavigate
} from "react-router-dom";
import axiosClient from '../../axiosClient';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';

const customStyles = {
  maxHeight: '80vh',
  maxWidth: '85vw',
  minWidth: '65vw',
  borderRadius: '5px',
  overflow: 'hidden',
  // background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
  // backgroundColor: 'rgb(41 116 132)'
}


export default function DrugOrderProduct({ closeTheModal }) {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    axiosClient.get(`/superadmin/orders/drug/products`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setOrders(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])

  const updateStatus = (orderId) => {
    axiosClient.post(`/superadmin/orders/accept/${orderId}`).then(response => {
      if (response.data) {
        alert('Order Accepted');
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const renDataStyle = {
    backgroundColor: 'rgb(237 237 237)',
    display: 'flex',
    paddingTop: '1vh',
    flexDirection: 'column',
    overflowX: 'auto',
    overflowY: 'auto',
    height: '69vh'
  }


  return (
    <>
      <div style={customStyles}>
        <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-1 btn btn-dark close-btn'>X</button>

        <div >
              <h2 className='p-2'>|| Drug Product Order ||</h2>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Count</th>
                      <th scope="col">OrderId</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Coustomer Name</th>
                      <th scope="col">User Role</th>
                      <th scope="col">Order From</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment Mood</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Status</th>
                      <th scope="col">Expected delivery date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders && orders.map((order, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <th scope="row">{order.id}</th>
                        <td>{order.product_name}</td>
                        <td>{order.name}</td>
                        <td>{order.role}</td>
                        {/* <td>{order.order_date}</td> */}
                        <td>{order.subadmin_name}</td>
                        <td>{order.order_date.slice(0, 10)}</td>
                        <td>{order.payment_type}</td>
                        <td>{order.payment_status}</td>
                        <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status} <br />{order.orderAcceptedBy}</td>
                        <td>
                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            {order.expected_delivery_date}
                            <br />
                          </div>
                        </td>
                        <td className='flex items-center justify-center'>
                          <Link to={`/superadmin/orders/action/${order.id}/${order.user_id}/${order.product_id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>
                          <Link to={`/superadmin/orders/${order.id}/${order.user_id}/${order.product_id}`}><GrView className='text-primary' style={{ width: '2vw', height: '2vh', fill: 'blue' }} /></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </>
  )
}
