import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
export default function PaymentCompleteActionBySub_Admin() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const [payment, setPayment] = useState([]);
    // const [deliveryPartners, setDeliveryPartner] = useState([]);
    const param = useParams();
    var order_id = param.id;
    useEffect(() => {
        axiosClient.get(`/superadmin/payment/status/${order_id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data !== null) {
                    setPayment(res.data[0]);
                }
                if (res.data == null) {
                    alert("Server error!!");
                }

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // useEffect(() => {
    //     axiosClient.get(`/superadmin/delivery_partner`)
    //         .then(response => {
    //             // Handle response
    //             setDeliveryPartner(response.data)
    //         })
    //         .catch(err => {
    //             // Handle errors
    //             console.error(err);
    //         });
    // }, [])
    // console.log(order)

    const [values, setValues] = useState({
        order_id: order_id,
        payment_status: '',

    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        axiosClient.post(`/sub-admin/update/payment`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Payment  status updated Successfully!!')
                    navigate('/sub-admin/home', { state: { loggedIn: true } });
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
    // const expected_delivery_date = {order && order.expected_delivery_date.slice(0, 10)};
    const dateStyle = {
        width: "13.2rem",
        height: "2rem",
        fontSize: "1.1rem",
        width: '90%'
    };
    return (
        <div>
            <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Update Payment Details||</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        <h4> <span className='text-info'>Healthhepta</span></h4>
                        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', marginLeft: '5vw' }}>
                            <h5 className="font-size-15">PaymentNo: {payment && payment.payment_id} <span className="badge bg-success font-size-12 ms-2">{payment && payment.payment_status}</span></h5>
                            <h5 className="font-size-15">OrderNo: {payment && payment.order_id} </h5>
                            <h5 className="font-size-15">Total Amount: {payment && payment.total_amount} </h5>
                            <h5 className="font-size-15">Payment Type: {payment && payment.payment_type} </h5>
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="orderstatus">Change Payment Status: </label>
                            <br />
                            <select
                                className='m-2 p-1'
                                required
                                onChange={handleInput}
                                name='payment_status'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                <option value="select">{payment.status}</option>
                                <option value="completed">Completed</option>
                            </select><br />
                        </div>
                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>You are sure to complete  <span className='text-warning'>Payment</span> </p>
                            </label>
                        </div>
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
