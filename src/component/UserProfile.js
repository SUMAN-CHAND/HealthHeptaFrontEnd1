import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ReactWhatsapp from 'react-whatsapp';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import axiosClient from './axiosClient';
import Modal from 'react-modal';
import ChoosePrimaryAddressByUser from './ChoosePrimaryAddressByUser';
import AddNewAddressOfUser from './AddNewAddressOfUser';
export default function UserProfile() {
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
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        document.body.style.overflow = 'unset';
        setIsOpen(false);
    }
    const [modalIsOpenAdd, setIsOpenAdd] = React.useState(false);
    function openModalAdd() {
        setIsOpenAdd(true);
    }
    function afterOpenModalAdd() {
        document.body.style.overflow = 'hidden';
    }
    function closeModalAdd() {
        document.body.style.overflow = 'unset';
        setIsOpenAdd(false);
    }
    const customStyles = {
        content: {
            overflowY: 'hidden',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '100'
        },
    };
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const [loggedIn, setLoggedIn] = useState([])
    const handleLogout = async () => {
        try {
            const response = await axiosClient.post('/profile');
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
    const [products, setProducts] = useState([]);
    const [ind_product_Images, setInd_product_Images] = useState([]);
    const showOrders = () => {
        axiosClient.get(`/profile/orders`).then((res) => {
            if (res.data !== null) {
                setProducts(res.data[0]);
                setInd_product_Images(res.data[1]);
            } else {
                console.log('Product not present')
            }
        })
    }
    let flag = false;
    useEffect(() => {
        axiosClient.get(`/profile`).then((response) => {
            setUser(response.data[0]);
            setUserAddress(response.data[1])
        });
    }, []);
    let numOfProduct;
    if (products) {
        numOfProduct = products.length;
    }

    if (numOfProduct > 0) {
        flag = true;
    }

    const flagm = true;
    const listStyle = {
        backgroundColor: 'rgb(207 244 252)',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    var [address, setAddress] = useState(false);
    const UpdateAddress = () => {
        setAddress(true);
    }
    var [phoneStatus, setPhoneStatus] = useState(false);
    const updatePhone = () => {
        setPhoneStatus(true);
    }
    const [phoneno, setPhoneno] = useState({
        phone: ''
    })
    const handlePInput = (event) => {
        setPhoneno(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const onPSubmit = (event) => {
        event.preventDefault();
        axiosClient.patch(`/profile/phone`, phoneno)
            .then(res => {
                if (res.data !== null) {
                    // console.log(values)
                    setPhoneStatus(false);
                    success();
                    navigate('/profile');
                }
                else if (res.data === null) {
                    danger();
                }
                else {
                    danger();
                }
            })
    }
    const [values, setValues] = useState({
        Village: '',
        P_O: '',
        City: '',
        district: '',
        State: '',
        Pin: '',
    })
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const onASubmit = (event) => {
        event.preventDefault();
        axiosClient.patch(`/profile/address`, values)
            .then(res => {
                if (res.data !== null) {
                    setAddress(false);
                    success();
                    navigate('/profile');
                }
                else if (res.data === null) {
                    danger();
                }
                else {
                    danger();
                }
            })
            .catch(err => console.log(err));
    }
    const onAPostSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/profile/address`, values)
            .then(res => {
                if (res.data !== null) {
                    setAddress(false);
                    success();
                    navigate('/profile');
                }
                else if (res.data === null) {
                    danger();
                }
                else {
                    danger();
                }
            })
            .catch(err => console.log(err));
    }
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

    const [appoiments, setAppoiments] = useState([]);
    const [labBookings, setLabBookings] = useState([]);

    const ShowAppoiment = () => {
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
    }
    const ShowLabBooking = () => {
        axiosClient.get(`/user/see-lab-booking`)
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
   
    const getUserCurrentAddress = async (latitude, longitude) => {
        // console.log(latitude,longitude)
        let query = `${latitude},${longitude}`;
        // let apiUrl = `${process.env.REACT_APP_GEOLOCATION_API_ENDPOINT}?q=${query}&key=${process.env.REACT_APP_GEOLOCATION_API_KEY}`;
        let apiUrl = `${process.env.REACT_APP_GEOLOCATION_API_ENDPOINT}?latlng=${query}&key=${process.env.REACT_APP_GEOLOCATION_API_KEY}`;
        // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=
        console.log(apiUrl)
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                const { latitude, longitude } = position.coords;
                getUserCurrentAddress(latitude, longitude);

            }, (error) => {
                console.log(error.message);
            })

        }
    }

    return (
        <>
            <div>
                <div className="profile-full-class row m-2 p-2">
                    <div className="col-3 profile-left-sidebar">
                        <div className="list-group shadow" id="list-tab" role="tablist">
                            <Link to="#profile" className="list-group-item list-group-item-action active  list-group-item-info" id="list-profile-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</Link>
                            <Link to="#appoiment" onClick={ShowAppoiment} className="list-group-item list-group-item-action  list-group-item-info" id="list-Appointments-list" data-bs-toggle="list" role="tab" aria-controls="list-Appointments">Appointments</Link>
                            {flagm ? <Link to="#order" onClick={showOrders} className="list-group-item list-group-item-action  list-group-item-info" id="list-Medicine-list" data-bs-toggle="list" role="tab" aria-controls="list-Medicine">Medicine Order</Link>
                                :
                                ''
                            }
                            <Link to="#list-Lab" onClick={ShowLabBooking} className="list-group-item list-group-item-action  list-group-item-info" id="list-Lab-list" data-bs-toggle="list" role="tab" aria-controls="list-Lab">Lab Test</Link>
                            <Link to="#list-Clinic" className="list-group-item list-group-item-action  list-group-item-info" id="list-Clinic-list" data-bs-toggle="list" role="tab" aria-controls="list-Clinic">Clinic Book</Link>
                        </div>
                    </div>
                    <div className="col-9 profile-right-content" style={{ minHeight: '60vh' }} >
                        <div className="tab-content shadow" id="nav-tabContent" style={{ backgroundColor: '#64B5F6', borderRadius: '5px' }} >
                            <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                                <h2 className='p-2'> Your Profile</h2>

                                <ul className="list-group" >
                                    <li className="list-group-item " style={listStyle}><h2>Hi {user.name}!</h2></li>
                                    <li className="list-group-item " style={listStyle}>
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
                                                <Link to='phone'><button className='btn btn-warning' onClick={updatePhone}>Update</button></Link>
                                            </>
                                        }
                                    </li>
                                    <li className="list-group-item " style={listStyle}>
                                        {/* {userAddress ? <>
                                            {address ?
                                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <form onSubmit={onASubmit} style={{ width: '75%', borderRadius: '5px' }} className='shadow p-2 m-2'>
                                                        <div className='m-2' style={{ display: 'flex' }}>
                                                            <p style={{ marginBottom: 'inherit' }}>Village :- </p>
                                                            <input style={{ width: '70%' }} type="text" name="Village" id="vill" onChange={handleInput} placeholder={user.Village} />
                                                        </div>
                                                        <div className='m-2' style={{ display: 'flex' }}>
                                                            <p style={{ marginBottom: 'inherit' }}>P-O :- </p>
                                                            <input style={{ width: '70%' }} type="text" name="P_O" id="po" onChange={handleInput} placeholder={user.P_O} />
                                                        </div>
                                                        <div className='m-2' style={{ display: 'flex' }}>
                                                            <p style={{ marginBottom: 'inherit' }}>City :- </p>
                                                            <input style={{ width: '70%' }} type="text" name="City" id="city" onChange={handleInput} placeholder={user.City} />
                                                        </div>
                                                        <div className='m-2' style={{ display: 'flex' }}>
                                                            <p style={{ marginBottom: 'inherit' }}>District :- </p>
                                                            <input style={{ width: '70%' }} type="text" name="district" id="district" onChange={handleInput} placeholder={user.district} />
                                                        </div>
                                                        <div className='m-2' style={{ display: 'flex' }}>
                                                            <p style={{ marginBottom: 'inherit' }}>State :- </p>
                                                            <input style={{ width: '70%' }} type="text" name="State" id="state" onChange={handleInput} placeholder={user.State} />
                                                        </div>
                                                        <div className='m-2' style={{ display: 'flex' }}>
                                                            <p style={{ marginBottom: 'inherit' }}>Pin No :- </p>
                                                            <input style={{ width: '70%' }} type="text" name="Pin" id="pin" onChange={handleInput} placeholder={user.Pin} />
                                                        </div>
                                                        <button className='btn btn-info' type='submit' >Save</button>
                                                    </form>
                                                </div>
                                                : <>
                                                    Address :- {user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.Pin}
                                                    <Link to='address'><button className='btn btn-warning' onClick={UpdateAddress}>Update</button></Link>
                                                </>
                                            }  </> :
                                            <>
                                                {address ?
                                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <form onSubmit={onAPostSubmit} style={{ width: '75%', borderRadius: '5px' }} className='shadow p-2 m-2'>
                                                            <div className='m-2' style={{ display: 'flex' }}>
                                                                <p style={{ marginBottom: 'inherit' }}>Village :- </p>
                                                                <input style={{ width: '70%' }} type="text" name="Village" id="vill" onChange={handleInput} placeholder={user.Village} />
                                                            </div>
                                                            <div className='m-2' style={{ display: 'flex' }}>
                                                                <p style={{ marginBottom: 'inherit' }}>P-O :- </p>
                                                                <input style={{ width: '70%' }} type="text" name="P_O" id="po" onChange={handleInput} placeholder={user.P_O} />
                                                            </div>
                                                            <div className='m-2' style={{ display: 'flex' }}>
                                                                <p style={{ marginBottom: 'inherit' }}>City :- </p>
                                                                <input style={{ width: '70%' }} type="text" name="City" id="city" onChange={handleInput} placeholder={user.City} />
                                                            </div>
                                                            <div className='m-2' style={{ display: 'flex' }}>
                                                                <p style={{ marginBottom: 'inherit' }}>District :- </p>
                                                                <input style={{ width: '70%' }} type="text" name="district" id="district" onChange={handleInput} placeholder={user.district} />
                                                            </div>
                                                            <div className='m-2' style={{ display: 'flex' }}>
                                                                <p style={{ marginBottom: 'inherit' }}>State :- </p>
                                                                <input style={{ width: '70%' }} type="text" name="State" id="state" onChange={handleInput} placeholder={user.State} />
                                                            </div>
                                                            <div className='m-2' style={{ display: 'flex' }}>
                                                                <p style={{ marginBottom: 'inherit' }}>Pin No :- </p>
                                                                <input style={{ width: '70%' }} type="text" name="Pin" id="pin" onChange={handleInput} placeholder={user.Pin} />
                                                            </div>
                                                            <button className='btn btn-info' type='submit' >Save</button>
                                                        </form>
                                                    </div>
                                                    : <>
                                                        Address :- {user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.Pin}
                                                        <Link to='address'><button className='btn btn-warning' onClick={UpdateAddress}>Add</button></Link>
                                                    </>
                                                }
                                            </>
                                        } */}
                                        {/* <button className="btn btn-primary" onClick={getUserLocation}>Add Current Location</button> */}
                                        <div>
                                            <p>Address :- {user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.pin_code} </p>
                                        </div>
                                        <div>

                                            <button className='btn btn-primary' onClick={openModal}>Change Address</button>
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onAfterOpen={afterOpenModal}
                                                onRequestClose={closeModal}
                                                style={customStyles}
                                                contentLabel="Example Modal"
                                            >
                                                <ChoosePrimaryAddressByUser closeTheModal={closeModal} />
                                            </Modal>
                                        </div>
                                       
                                        <div>

                                            <button className='btn btn-warning' onClick={openModalAdd}>Add New Address</button>
                                            <Modal
                                                isOpen={modalIsOpenAdd}
                                                onAfterOpen={afterOpenModalAdd}
                                                onRequestClose={closeModalAdd}
                                                style={customStyles}
                                                contentLabel="Example Modal"
                                            >
                                                <AddNewAddressOfUser closeTheModal={closeModalAdd} />
                                            </Modal>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            {/* <div className="tab-pane fade text-light" id="list-Appointments" role="tabpanel" aria-labelledby="list-Appointments-list">
                                <h2 className='p-2'> Your Appointments</h2>
                                <div className="container text-dark" style={renDataStyle}>
                                    <p>no record found!!</p>
                                </div>
                            </div> */}
                            <div className="tab-pane fade  text-light" id="appoiment" role="tabpanel" aria-labelledby="list-payments-list">
                                <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Appoiments ||</h2> <Link to='/listofdoctor'><button className='btn btn-primary mx-3 my-2' >Add New Appoiment</button></Link></span>
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
                                                {/* <th scope="col">Clinic Description</th> */}
                                                <th scope="col">Appoiment Status</th>
                                                <th scope="col">Appoiment Type</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {appoiments.length > 0 ? <>

                                                {appoiments.map((appoiment, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{appoiment.id}</th>
                                                        <td>{appoiment.name}</td>
                                                        <td>{appoiment.ph_number}</td>
                                                        <td>{appoiment.appoint_date}</td>
                                                        <td>{appoiment.appoint_time}</td>
                                                        <td>{appoiment.doc_name}</td>
                                                        <td>{appoiment.clinic}</td>
                                                        {/* <td>{appoiment.clinic_desc}</td> */}
                                                        <td>{appoiment.AppointmentStatus}</td>
                                                        {appoiment.type_of_visite === 'online' ? <>
                                                            <td>{appoiment.type_of_visite}
                                                                <ReactWhatsapp number={`'+91 ' + ${appoiment.Phone_number}`} className="btn btn-primary outline" massage="Hi There is HealthHeapta">Join Now</ReactWhatsapp>
                                                            </td>
                                                        </> : <>
                                                            <td>{appoiment.type_of_visite}</td> 
                                                        </>}
                                                        <td> <Link to={`/reschedule/${appoiment.id}`}><button className="btn btn-info m-1">Reschedule</button></Link></td>
                                                    </tr>
                                                ))}
                                            </> : <>

                                            </>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="tab-pane fade text-light" id="order" role="tabpanel" aria-labelledby="list-Medicine-list">
                                <h2 className='p-2'> Your Orders</h2>
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
                                                        {products.map((product, index) => (
                                                            <tr key={index}>
                                                                {/* <th scope="row">{product.id}</th> */}
                                                                <td>{product.product_id}</td>
                                                                <td>{product.product_name}</td>
                                                                <td>{product.total_amount}</td>
                                                                <td>{product.quantity}</td>
                                                                <td>{product.discount}</td>
                                                                <td>{product.expected_delivery_date}</td>
                                                                <td> <button className='btn btn-danger' onClick={() => deleteOrder(product.id)}>Cancle</button>
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
                            <div className="tab-pane fade  text-light" id="list-Lab" role="tabpanel" aria-labelledby="list-Lab-list"><h2 className='p-2'> Your Lab Appointments</h2>
                                <div className="container text-dark" style={renDataStyle}>
                                    <table className="table table-striped">
                                        <thead className='thead-dark'>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Patient Name</th>
                                                <th scope="col">Patient Phone no:</th>
                                                <th scope="col">appoint_date</th>
                                                <th scope="col">appoint_time</th>
                                                <th scope="col">Test Name</th>
                                                <th scope="col">Semple Collection</th>
                                                <th scope="col">Clinic</th>
                                                {/* <th scope="col">Clinic Description</th> */}
                                                <th scope="col">Appoiment Status</th>
                                                <th scope="col">Appoiment Fees</th>
                                                {/* <th scope="col">Appoiment Type</th> */}
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {labBookings.length > 0 ? <>

                                                {labBookings.map((labBooking, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{labBooking.Test_id}</th>
                                                        <td>{labBooking.name}</td>
                                                        <td>{labBooking.ph_number}</td>
                                                        <td>{labBooking.appoint_date}</td>
                                                        <td>{labBooking.appoint_time}</td>
                                                        <td>{labBooking.Test_Name}</td>
                                                        <td>{labBooking.sample_collection}</td>
                                                        <td>{labBooking.sub_name}</td>
                                                        {/* <td>{appoiment.clinic_desc}</td> */}
                                                        <td>{labBooking.LabTestStatus}</td>
                                                        <td>{labBooking.Price}</td>
                                                        {/* {labBooking.type_of_visite === 'online' ? <>
                                                            <td>{appoiment.type_of_visite}
                                                            console.log({appoiment.Phone_number})
                                                            <ReactWhatsapp number={`'+91 ' + ${appoiment.Phone_number}` } className="btn btn-primary outline" massage="Hi There is HealthHeapta">Join Now</ReactWhatsapp>
                                                            </td>
                                                        </> : <>
                                                            <td>{appoiment.type_of_visite}</td>
                                                        </>} */}
                                                        <td> <Link to={`/reschedule/lab/${labBooking.id}`}><button className="btn btn-info m-1">Reschedule</button></Link></td>
                                                    </tr>
                                                ))}
                                            </> : <>

                                            </>}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="tab-pane fade text-light" id="list-Clinic" role="tabpanel" aria-labelledby="list-Clinic-list"><h2 className='p-2'> Your Clinic Book</h2>
                                <div className="container text-dark" style={renDataStyle}>
                                    <p>no record found!!</p>
                                </div></div>
                        </div>
                    </div>
                    <div className="logout">
                        <button type="button" onClick={handleLogout} className="btn btn-primary m-2 p-2" style={{ width: '25%' }}>Log Out</button>
                    </div>
                </div>

                <div className="profile-full-class-mob row m-2 p-2">
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
                            <div className="phone" style={{ display: 'none', justifyContent: 'space-around', alignItems: 'center', padding: '2vh 0' }}>
                                {phoneStatus ?
                                    <form onSubmit={onPSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex' }}>
                                            <p style={{ marginBottom: 'inherit' }}>Phone no:-</p>
                                            <input type="text" name="phone" id="phone" placeholder={user.phone} onChange={handlePInput} />
                                        </div>
                                        <button className='btn btn-info' type='submit'>Save</button>
                                    </form>
                                    : <>
                                        {/* <p> */}
                                        Phone no:- {user.phone}
                                        {/* </p> */}
                                        <Link to='phone'><button className='btn btn-primary' onClick={updatePhone}>Update</button></Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="logout">
                        <button type="button" onClick={handleLogout} className="btn btn-primary m-2 p-2" style={{ width: '90%' }}>Log Out</button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}


// <div className="cart-item container m-2 p-2" >
//                                             {products.map((product, index) => (
//                                                 <div key={index} className='shadow m-1 p-1 ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#fff', borderRadius: '8px' }}>
//                                                     <CartItemCard product_name={product.product_name} product_price={product.product_price} product_id={product.product_id} discount={product.discount} expected_delivery_date={product.expected_delivery_date} /> Order Placed
//                                                     {/* <Link to={`/order/${product.id}/product/${product.product_id}`}></Link> */}
//                                                     <button className='btn btn-danger' onClick={() => deleteOrder(product.id)}>Cancle</button>
//                                                 </div>
//                                             ))}
//                                         </div>