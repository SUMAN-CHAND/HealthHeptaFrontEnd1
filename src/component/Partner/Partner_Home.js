import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Dashboard from '../Service_Provider/Dashboard.js';
import ViewCommissionModal from './ViewCommissionModal.js';
import Modal from 'react-modal';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


export default function Partner_Home() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

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


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const fontStyle = {
        fontSize: 'calc(1vw + 0.5rem)'
    }
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

    // console.log(location)
    // if (location.state === null) {
    //     return <Navigate to='/partner/login' />;
    // }
    // const [your_orders, setYour_orders] = useState([])
    const [payments, setPayments] = useState([]);
    const [appoiments, setAppoiments] = useState([]);

    const [orders, setOrders] = useState([])

    const showOrders = () => {
        axios.get('http://localhost:8081/partner/profile/order').then((res) => {
            if (res.data !== null) {
                setOrders(res.data)
            } else {
                console.log('Product not present')
            }
        })
    }

    const numOfProduct = orders.length;
    if (numOfProduct > 0) {
        flag = true;
    }

    const deleteOrder = (id) => {
        // console.log('click')
        const response = window.confirm("Are you sure to Cancle the Order?");
        if (response) {
            axios.delete(`http://localhost:8081/orders/${id}`)
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
    const showPartnerCommission = () => {
        axios.get('http://localhost:8081/superadmin/partner-commissions')
            .then(response => {
                // Handle response
                setCommissions(response.data)
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }



    useEffect(() => {
        axios.get('http://localhost:8081/partner/home/profile').then((response) => {
            if (response.data !== null) {
                setUser(response.data[0]);
                // setUserAddress(response.data[1]);

            }
        });
    }, []);


    // console.log(user)

    // var [address, setAddress] = useState(false);
    // const UpdateAddress = () => {
    //   setAddress(true);
    // }






    const flagm = true;
    const listStyle = {
        backgroundColor: 'rgb(207 244 252)',
        display: 'flex',
        justifyContent: 'space-between'
    }



    // const [appoiments, setAppoiments] = useState([]);

    const ShowAppoiment = () => {
        axios.get('http://localhost:8081/user/see-appoiment')
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
    }
    // console.log(appoiments)

    const [labBookings, setLabBookings] = useState([]);

    const ShowLabBooking = () => {
        axios.get('http://localhost:8081/user/see-lab-booking')
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setLabBookings(response.data[0]);
                }
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }

    // console.log(labBookings)

    const [loggedIn, setLoggedIn] = useState([]);


    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:8081/profile');
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
                            <Link to="#profile" className="list-group-item list-group-item-action active list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</Link>
                            <Link to="/" className="list-group-item list-group-item-action list-group-item-info">Shop Now</Link>
                            <Link to="#appoiment" onClick={ShowAppoiment} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Appoiment</Link>
                            <Link to="#orders" onClick={showOrders} className="list-group-item list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-order">Your Orders</Link>
                            <Link to="#lab" onClick={ShowLabBooking} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Lab Tests</Link>
                            <Link to="#clinicbook" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Clinic Books</Link>
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
                        <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <h2 className='p-2 text-dark' > || Profile ||</h2>
                            <div className="container text-dark " style={renDataStyle}>
                                <div className='profile-details' style={{ minWidth: '95%', marginBottom: '2vh' }}>
                                    <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        <ul className="list-group" >
                                            <li className="list-group-item " style={listStyle}>
                                                {/* <div>
                          {images.map((img) => (
                            <div key={img.id}>
                              <img
                                src={`http://localhost:8081/${img.path}`}
                                alt={img.name}

                                style={{ borderRadius: '50%', width: '8vw', height: '16vh', border: '5px solid cadetblue' }}
                              />
                              {/* <p>{img.name}</p> */}
                                                {/* </div>
                          ))}
                        </div> */}
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

                        <div className="tab-pane fade  text-light" id="payment" role="tabpanel" aria-labelledby="list-payments-list">
                            <h2 className='p-2'>|| Payments ||</h2>
                            <div className="container text-dark" style={renDataStyle}>
                                <table className="table table-striped">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">Payments Id</th>
                                            <th scope="col">User Id</th>
                                            <th scope="col">Order Id</th>
                                            <th scope="col">Total Amount</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Payment Type</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {payments.map((payment, index) => (
                                            <tr key={index}>
                                                <th scope="row">{payment.payment_id}</th>
                                                <td>{payment.user_id}</td>
                                                <td>{payment.order_id}</td>
                                                <td>{payment.total_amount}</td>
                                                <td>{payment.payment_status}</td>
                                                <td>{payment.payment_type}</td>
                                                <td> <Link to={`/sub-admin/payment/${payment.order_id}/${payment.user_id}/${payment.product_id}`}><button className="btn btn-info m-1">View</button></Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="appoiment" role="tabpanel" aria-labelledby="list-payments-list">
                            <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Appoiments ||</h2> <Link to='/ '><button className='btn btn-primary mx-3 my-2' >Book New Appoiment</button></Link></span>
                            <div className="container text-dark" style={renDataStyle}>
                                <table className="table table-striped">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Patient Name</th>
                                            <th scope="col">Patient Phone no:</th>
                                            <th scope="col">appoint_date</th>
                                            <th scope="col">appoint_time</th>
                                            <th scope="col">Doctor Name</th>
                                            <th scope="col">Clinic</th>
                                            <th scope="col">Clinic Description</th>
                                            <th scope="col">Appoiment Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appoiments.map((appoiment, index) => (
                                            <tr key={index}>
                                                <th scope="row">{appoiment.id}</th>
                                                <td>{appoiment.name}</td>
                                                <td>{appoiment.ph_number}</td>
                                                <td>{appoiment.appoint_date}</td>
                                                <td>{appoiment.appoint_time}</td>
                                                <td>{appoiment.doc_name}</td>
                                                <td>{appoiment.clinic}</td>
                                                <td>{appoiment.clinic_desc}</td>
                                                <td>{appoiment.AppointmentStatus}</td>
                                                <td> <Link to={`/reschedule/${appoiment.id}`}><button className="btn btn-info m-1">Reschedule</button></Link>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade text-light" id="orders" role="tabpanel" aria-labelledby="list-Medicine-list">
                            <h2 className='p-2 text-dark'> Your Orders</h2>
                            <div className="container text-dark" style={renDataStyle}>
                                {flag ?
                                    <div >
                                        <h2 className='p-2'>|| Orders ||</h2>
                                        <div className="container text-dark " style={renDataStyle}>
                                            <table className="table table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Product Price</th>
                                                        <th scope="col">Product Quantity</th>
                                                        <th scope="col">Discount</th>
                                                        <th scope="col">Expected Delivery Date</th>

                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders.map((order, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{order.id}</th>
                                                            {/* <td>{product.product_id}</td> */}
                                                            <td>{order.product_name}</td>
                                                            <td>{order.total_amount}</td>
                                                            <td>{order.quantity}</td>
                                                            <td>{order.discount}</td>
                                                            <td>{order.expected_delivery_date}</td>
                                                            <td> <button className='btn btn-danger' onClick={() => deleteOrder(order.id)}>Cancle</button>
                                                                {/* <Link to='/'><button className='btn btn-info' >View Commission</button></Link> */}
                                                                <Link className=" btn btn-info mx-2" aria-current="page" onClick={openModal} >View Commission</Link>
                                                                <Modal
                                                                    isOpen={modalIsOpen}
                                                                    onAfterOpen={afterOpenModal}
                                                                    onRequestClose={closeModal}
                                                                    style={customStyles}
                                                                    contentLabel="Example Modal"
                                                                >
                                                                    <ViewCommissionModal closeTheModal={closeModal} data={order.id} product_ids={order.product_id} />

                                                                </Modal>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    :
                                    <p>no record found!!</p>
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
                                                    {/* <td>{appoiment.clinic_desc}</td> */}
                                                    <td>{labBooking.LabTestStatus}</td>
                                                    {/* {labBooking.type_of_visite === 'online' ? <>
                                                            <td>{appoiment.type_of_visite}
                                                            console.log({appoiment.Phone_number})
                                                            <ReactWhatsapp number={`'+91 ' + ${appoiment.Phone_number}` } className="btn btn-primary outline" massage="Hi There is HealthHeapta">Join Now</ReactWhatsapp>
                                                            </td>
                                                        </> : <>
                                                            <td>{appoiment.type_of_visite}</td>
                                                        </>} */}
                                                    <td> <Link to={`/reschedule/${labBooking.id}`}><button className="btn btn-info m-1">Reschedule</button></Link>

                                                        <Link className=" btn btn-info mx-2" aria-current="page" onClick={openModal} >View Commission</Link>
                                                        <Modal
                                                            isOpen={modalIsOpen}
                                                            onAfterOpen={afterOpenModal}
                                                            onRequestClose={closeModal}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                        >
                                                            <ViewCommissionModal closeTheModal={closeModal} data={labBooking.id} product_ids={labBooking.Test_id} />

                                                        </Modal></td>
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
                    </div>
                </div>
            </div>
            <div className="partner-profile-full-class-mob row m-2 p-2">
                <div className="shadow">
                    {/* <div className="list-group shadow" id="list-tab" role="tablist">
                            <Link to="#profile" className="list-group-item list-group-item-action active  list-group-item-info" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</Link>
                            <Link to="#appoiment" onClick={ShowAppoiment} className="list-group-item list-group-item-action  list-group-item-info" id="list-Appointments-list" data-bs-toggle="list" role="tab" aria-controls="list-Appointments">Appointments</Link>
                            {flagm ? <Link to="#order" onClick={showOrders} className="list-group-item list-group-item-action  list-group-item-info" id="list-Medicine-list" data-bs-toggle="list" role="tab" aria-controls="list-Medicine">Medicine Order</Link>
                                :
                                ''
                            }
                            <Link to="#list-Lab" onClick={ShowLabBooking} className="list-group-item list-group-item-action  list-group-item-info" id="list-Lab-list" data-bs-toggle="list" role="tab" aria-controls="list-Lab">Lab Test</Link>
                            <Link to="#list-Clinic" className="list-group-item list-group-item-action  list-group-item-info" id="list-Clinic-list" data-bs-toggle="list" role="tab" aria-controls="list-Clinic">Clinic Book</Link>
                        </div> */}
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
                        {/* <div className="phone" style={{ display: 'none', justifyContent: 'space-around', alignItems: 'center', padding: '2vh 0' }}>
                                {phoneStatus ?
                                    <form onSubmit={onPSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex' }}>
                                            <p style={{ marginBottom: 'inherit' }}>Phone no:-</p>
                                            <input type="text" name="phone" id="phone" placeholder={user.phone} onChange={handlePInput} />
                                        </div>
                                        <button className='btn btn-info' type='submit'>Save</button>
                                    </form>
                                    : <>
                                        <p>
                                        Phone no:- {user.phone}
                                        </p>
                                        <Link to='phone'><button className='btn btn-primary' onClick={updatePhone}>Update</button></Link>
                                    </>
                                }
                            </div> */}
                    </div>
                </div>
                <div className="logout">
                    <button type="button" onClick={handleLogout} className="btn btn-primary m-2 p-2" style={{ width: '90%' }}>Log Out</button>
                </div>
            </div>
        </div>
    )
}
