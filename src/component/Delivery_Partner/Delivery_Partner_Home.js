import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import axiosClient from '../axiosClient';
export default function Delivery_Partner_Home() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const success = () => toast.success('Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    const danger = () => toast.error('Error ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.backgroundColor = 'rgb(76 76 76 / 19%)'
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        document.body.style.backgroundColor = '#fff'
        setIsOpen(false);
    }
    const navigate = useNavigate();
    let flag = false;
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const location = useLocation();
    const [commissions, setCommissions] = useState([]);
    const [ownCommissions, setOwnCommissions] = useState([]);
    const [payments, setPayments] = useState([]);
    const [appoiments, setAppoiments] = useState([]);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        axiosClient.get(`/deleviry_partner/assigned/orders`)
            .then(res => {
                if (res.data !== null) {
                    setOrders(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const showPartnerCommission = () => {
        axiosClient.get(`/superadmin/delivery-partner-commissions`)
            .then(response => {
                // Handle response
                setCommissions(response.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }
    const showYourCommission = () => {
        axiosClient.get(`/superadmin/own/delivery-partner-commissions`)
            .then(response => {
                // Handle response
                setOwnCommissions(response.data)
                console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }
    useEffect(() => {
        axiosClient.get(`/delivery_partner/home/profile`).then((response, err) => {
            if (response.data !== null) {
                setUser(response.data[0]);
            } else {
                console.error(err);

            }
        });
    }, []);
    const flagm = true;
    const listStyle = {
        backgroundColor: 'rgb(207 244 252)',
        display: 'flex',
        justifyContent: 'space-between'
    }
    const [labBookings, setLabBookings] = useState([]);
    const [loggedIn, setLoggedIn] = useState([]);
    const handleLogout = async () => {
        try {
            const response = await axiosClient.post(`/profile`);
            if (response.data.success) {
                setLoggedIn(undefined);
                navigate('/')
            } else {
                // Handle logout failure
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const updateStatus = (orderId) => {
        const response = window.confirm("Are you sure to Accept the Order?");
        if (response) {
            axiosClient.post(`/delivery_partner/orders/accept/${orderId}`).then(response => {
                if (response.data) {
                    alert('Order Accepted');
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert('Order Not Accepted');
        }

    }
    const updateToCompleteStatus = (orderId) => {
        const response = window.confirm("Are you sure that Order is Delivered?");
        if (response) {
            axiosClient.post(`/delivery_partner/orders/complete/${orderId}`).then(response => {
                if (response.data) {
                    alert('Order Copeleted');
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert('Order Not Copeleted');
        }
    }



    //TODO

    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        // minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1vh'
    }

    const quiceLink = {
        backgroundColor: '#055160',
        padding: '5px',
        color: 'white',
        borderRadius: '5px'
    }

    return (
        <div>
            <div className=" partner-profile-full-class row" style={{ height: '70vh', overflowX: 'hidden' }}>
                <div className="col-3" style={{ borderRight: '2px solid black' }}>
                    <div className="container mt-5" style={{ top: '50px' }}>
                        <h5 style={quiceLink}>Quick Links</h5>
                        <hr />
                        <div className="list-group shadow" id="list-tab" role="tablist">
                            {/* <Link to="#summary" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Summary</Link> */}
                            <Link to="#orders" className="list-group-item active list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-order">Orders</Link>
                            {/* <Link to="#lab" onClick={ShowLabBooking} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Lab Tests</Link> */}
                            <Link to="#your-commission" onClick={showYourCommission} className="list-group-item list-group-item-action  list-group-item-info" id="list-commission-service-wise-list" data-bs-toggle="list" role="tab" aria-controls="list-commission-service-wise">Your Commission</Link>
                            <Link to="#profile" className="list-group-item list-group-item-action  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</Link>
                            <Link to="#commission-service-wise" onClick={showPartnerCommission} className="list-group-item list-group-item-action  list-group-item-info" id="list-commission-service-wise-list" data-bs-toggle="list" role="tab" aria-controls="list-commission-service-wise">Commission Service Wise</Link>
                        </div>
                    </div>
                </div>
                <div className="col-9" style={{ marginTop: '2vh' }}>
                    <div className="tab-content shadow" id="nav-tabContent" style={{ color: 'black', borderRadius: '5px' }} >
                        {/* <div className="tab-pane fade show active text-light" style={{ backgroundColor: '#rgba(255, 255, 255, 0.95)' }} id="summary" role="tabpanel" aria-labelledby="list-summry-list">
                            <h2 className='p-2 text-dark'></h2>
                            <Dashboard />
                        </div> */}
                        <div className="tab-pane fade show text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <h2 className='p-2 text-dark' > || Profile ||</h2>
                            <div className="container text-dark " style={renDataStyle}>
                                <div className='profile-details' style={{ minWidth: '95%', marginBottom: '2vh' }}>
                                    <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        <ul className="list-group" >
                                            <li className="list-group-item " style={listStyle}>
                                            </li>
                                            <li className="list-group-item " style={listStyle}><h2>Hi <span style={{ color: '#1facff' }}>{user.name}</span>!</h2></li>
                                            <li className="list-group-item " style={listStyle}>
                                                <p>
                                                    Phone no:- {user.ph_num}
                                                </p>
                                            </li>
                                            <li className="list-group-item " style={listStyle}>
                                                <>
                                                    Address :- {user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.Pin}
                                                </>
                                            </li>

                                            <li className="list-group-item " style={listStyle}>
                                                <div className=' p-1' style={{ fontWeight: '700', display: 'flex', justifyContent: 'space-between', width: '100%' }} >

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane active fade text-light" id="orders" role="tabpanel" style={{ opacity: '1' }} aria-labelledby="list-Medicine-list">
                            <h2 className='p-2 text-dark'> Orders</h2>
                            <div className="container text-dark" style={renDataStyle}>
                                {orders.length > 0 ?
                                    <div >
                                        {/* <h2 className='p-2'>|| Orders ||</h2> */}
                                        <div className="container text-dark " style={renDataStyle}>
                                            <table className="table table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Order Total Amount</th>
                                                        <th scope="col">Product Quantity</th>
                                                        <th scope="col">Payment Status</th>
                                                        <th scope="col">Payment Type</th>
                                                        <th scope="col">Expected Delivery Date</th>
                                                        <th scope="col">See Customer</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders.filter(orderf => orderf.status.toLowerCase() !== 'completed').map((order, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{order.id}</th>
                                                            {/* <td>{product.product_id}</td> */}
                                                            <td>{order.product_name}</td>
                                                            <td>{order.total_amount}</td>
                                                            <td>{order.quantity}</td>
                                                            <td>{order.payment_status}</td>
                                                            <td>{order.payment_type}</td>
                                                            <td>{order.expected_delivery_date}</td>
                                                            <td><button className='btn btn-info'> See User</button></td>
                                                            <td> {order.status === 'Delivery Persion Accepted' ? <>
                                                                <button onClick={() => updateToCompleteStatus(order.id)} className='btn btn-warning'>Complete The Order</button>

                                                            </> : <>
                                                                <button onClick={() => updateStatus(order.id)} className='btn btn-warning'>Accept</button>
                                                            </>
                                                            }
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    :
                                    <p>No Delivery Assigned!!</p>
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="lab" role="tabpanel" aria-labelledby="list-Lab-list"><h2 className='p-2'> Your Lab Appointments</h2>
                            <div className="container text-dark" style={renDataStyle}>
                                <table className="table table-striped">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Test ID</th>
                                            <th scope="col">Patient Name</th>
                                            <th scope="col">Patient Phone no:</th>
                                            <th scope="col">appoint_date</th>
                                            <th scope="col">appoint_time</th>
                                            <th scope="col">Test Name</th>
                                            <th scope="col">Semple Collection</th>
                                            <th scope="col">Clinic</th>
                                            {/* <th scope="col">Clinic Description</th> */}
                                            <th scope="col">Appoiment Status</th>
                                            {/* <th scope="col">Appoiment Type</th> */}
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {labBookings.length > 0 ? <>

                                            {labBookings.map((labBooking, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{labBooking.id}</th>
                                                    <td>{labBooking.Test_id}</td>
                                                    <td>{labBooking.name}</td>
                                                    <td>{labBooking.ph_number}</td>
                                                    <td>{labBooking.appoint_date}</td>
                                                    <td>{labBooking.appoint_time}</td>
                                                    <td>{labBooking.Test_Name}</td>
                                                    <td>{labBooking.sample_collection}</td>
                                                    <td>{labBooking.sub_name}</td>
                                                    <td>{labBooking.LabTestStatus}</td>
                                                    <td> <Link to={`/reschedule/${labBooking.id}`}><button className="btn btn-info m-1">Reschedule</button></Link>

                                                        <Link className=" btn btn-info mx-2" aria-current="page" onClick={openModal} >View Commission</Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </> : <>
                                            <p>no record found!!</p>

                                        </>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade text-light" id="commission-service-wise" role="tabpanel" aria-labelledby="list-commission-service-wise-list">
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>||  Partner Commission ||</h2></span>
                            <div className="container text-dark" style={renDataStyle}>
                                <div id='partner-commission'>
                                    <table className="table table-striped">
                                        <thead className='thead-dark'>
                                            <tr>
                                                <th scope="col"> Id</th>
                                                <th scope="col">Service Type</th>
                                                <th scope="col">Commission Type</th>
                                                <th scope="col">Commission</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {commissions.map((commission, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{commission.id}</th>
                                                    <td>{commission.service_type}</td>
                                                    <td>{commission.commision_type}</td>
                                                    <td>{commission.commision}</td>

                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade text-light" id="your-commission" role="tabpanel" aria-labelledby="list-your-commission-list">
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>||  Your Commission ||</h2></span>
                            <div className="container text-dark" style={renDataStyle}>
                                <div id='partner-commission'>
                                    <table className="table table-striped">
                                        <thead className='thead-dark'>
                                            <tr>
                                                <th scope="col"> Id</th>
                                                <th scope="col">Service Type</th>
                                                <th scope="col">Commission Type</th>
                                                <th scope="col">Commission</th>
                                                <th scope="col">Order Id</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ownCommissions.map((commission, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{commission.id}</th>
                                                    <td>{commission.service_type}</td>
                                                    <td>{commission.commision_type}</td>
                                                    <td>{commission.commision}</td>
                                                    <td>{commission.order_id}</td>

                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner-profile-full-class-mob row m-2 p-2">
                <div className="shadow">
                    <div >
                        <nav >
                            <div >
                                <div>
                                    <div style={{ position: 'absolute' }}>Hey! HealthHepta Customer</div></div><div >
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="showOptions" style={{ paddingTop: '4vh', display: 'flex', flexDirection: 'column', paddingBottom: '2vh' }}>
                        <div>
                            <Link to={`orders`}><button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Orders</button></Link>
                            <Link to={`lab-booking`}><button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Lab Booking </button></Link>
                        </div>
                        <div>
                            <Link to={`appoiments`}><button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Appoiments</button></Link>
                            <Link to={`clinic`}> <button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Clinic</button></Link>
                        </div>
                        <Link to={`/`}><button type="button" className="btn btn-info m-2 p-2" style={{ width: '90%', height: '7vh', cursor: 'pointer' }}>Shop Now</button></Link>
                    </div>
                </div>
                <div className="gap" style={{ width: '100%', height: '1vh', backgroundColor: '#80808070' }}>
                </div>
                <div style={{ padding: '3vh 0' }}>
                    <div className='account-setting'>
                        <h1 className='m-2' style={{ fontSize: "calc(1.375rem + 0.7vw)", fontWeight: '600', textAlign: 'left' }}>Account Setting</h1>

                        <div className='all-funtions' >
                            <div className='edit-profile pt-3' style={{ marginLeft: '3vw', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex' }}>
                                    <CgProfile style={{ color: 'blue', height: '3vh', width: '16vw' }} />
                                    Edit Profile
                                </div>
                                <IoIosArrowForward />
                            </div>
                            <div className='edit-profile pt-3' style={{ marginLeft: '3vw', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex' }}>
                                    <IoLocationOutline style={{ color: 'blue', height: '3vh', width: '16vw' }} />
                                    Saved Address
                                </div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logout">
                    <button type="button" onClick={handleLogout} className="btn btn-primary m-2 p-2" style={{ width: '90%' }}>Log Out</button>
                </div>
            </div>
        </div>
    )
}
