import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../axiosClient';
export default function B2BOrderAction() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const [order, setOrders] = useState([]);
    const [deliveryPartners, setDeliveryPartner] = useState([]);
    const param = useParams();
    var order_id = param.id;
    useEffect(() => {
        axiosClient.get(`/superadmin/b2b/orders/order/${order_id}`)
            .then(res => {
                if (res.data !== null) {
                    // console.log(res.data[0][0])
                    setOrders(res.data[0][0]);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        axiosClient.get(`/superadmin/delivery_partner`)
            .then(response => {
                // Handle response
                setDeliveryPartner(response.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, [])
    // console.log(order)

    const [values, setValues] = useState({
        order_id: order_id,
        orderstatus: '',
        expected_delivery_date: '',
        assigndeliverypersion: '',

    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/superadmin/b2b/update/order`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Delivery  status updated Successfully!!')
                    navigate('/superadmin/b2b', { state: { loggedIn: true } });
                }
                else if (res.data === null) {
                    alert('Error')
                }
                else {
                    alert('Error')
                }
            })
            .catch(err => console.log(err));
    }

    const dateStyle = {
        width: "13.2rem",
        height: "2rem",
        fontSize: "1.1rem",
        width: '90%'
    };
    return (
        <div>
            <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Update Order Details||</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        <h5> <span className='text-info'>Healthhepta</span></h5>
                        <h5> <span className='text-warning'>{order.assign_delivery_persion_id !== undefined ? <>
                            <p>Delivery Person Already Assigned</p>
                        </> : <>
                            <p>Delivery Person Not Assigned</p>
                        </>}</span></h5>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="order_id">Order Id : </label><br></br>
                            <input required className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Name'
                                name='id' value={order.id} onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="orderstatus">Order Status: </label>
                            <br />
                            <select
                                className='m-2 p-1'
                                required
                                onChange={handleInput} name='orderstatus'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                <option value="select">{order.status}</option>
                                <option value="accepted">Accepted</option>
                                <option value="completed">Completed</option>
                            </select><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="expected_delivery_date">Expected Delivery Date : </label>
                            <input
                                className='m-2 p-1'
                                type="date"
                                required
                                style={dateStyle}
                                name='expected_delivery_date'
                                value={order.expected_delivery_date}
                                placeholder={order.expected_delivery_date}
                                onChange={handleInput}
                            //   onClick={() => updateDeliveryDate(order.id)}
                            /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="assigndeliverypersion">Assign Delivery Persion : </label>
                            <select
                                className='m-2 p-1'
                                required
                                onChange={handleInput} name='assigndeliverypersion'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                {order.assign_delivery_persion_id !== undefined ? <>
                                    <option value="select"> {deliveryPartners.filter(deliveryPartners => deliveryPartners.id === order.assign_delivery_persion_id).map(deliveryPartners => (
                                        <li>
                                            {deliveryPartners.name}
                                        </li>
                                    ))}</option>
                                </> : <>
                                    <option value="select">Select</option>
                                </>}

                                {deliveryPartners.length > 0 &&

                                    deliveryPartners.map((deliveryPartner) =>
                                        <option value={deliveryPartner.id}>{deliveryPartner.name}</option>
                                    )

                                }
                            </select><br />
                        </div>
                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>You are sure to Assign  <span className='text-warning'>Delivery Boy</span> </p>
                            </label>
                        </div>
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
