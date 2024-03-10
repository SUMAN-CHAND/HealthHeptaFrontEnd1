import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
// import ViewCommissionModal from './ViewCommissionModal.js';
import Modal from 'react-modal';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import axiosClient from '../axiosClient.js';
import { FaPlus } from 'react-icons/fa6';


export default function B2BEmployee_Home() {
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
    const [payments, setPayments] = useState([]);
    const [appoiments, setAppoiments] = useState([]);
    const [your_orders, setYour_orders] = useState([])
    const showOrders = () => {

        axiosClient.get('/sub-admin/own/orders')
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setYour_orders(response.data)
                }
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }
    const numOfProduct = your_orders.length;
    if (numOfProduct > 0) {
        flag = true;
    }
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

    const showPartnerCommission = () => {
        axiosClient.get(`/superadmin/partner-commissions`)
            .then(response => {
                // Handle response
                setCommissions(response.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }
    useEffect(() => {
        axiosClient.get(`/b2b-emp/home/profile`).then((response) => {
            if (response.data !== null) {
                setUser(response.data);
            }
        });
    }, []);
    const flagm = true;
    const listStyle = {
        backgroundColor: 'rgb(207 244 252)',
        display: 'flex',
        justifyContent: 'space-between'
    }
    const ShowAppoiment = () => {
        axiosClient.get(`/user/see-appoiment`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setAppoiments(response.data);
                }
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }
    const [searchUser, setSearchUser] = useState([])
    const [subadmin, setSubAdmin] = useState([])
    const [searchMedicine, setSearchMedicine] = useState([])
    const [medicine, setMedicine] = useState([])



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
    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
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
    const [searchValue, setSearchValue] = useState({
        input: ''
    })
    const [searchmedicineValue, setSearchMedicineValue] = useState({
        input: ''
    })

    axiosClient.get(`/superadmin/service-provider`)
        .then(response => {
            // Handle response
            setSubAdmin(response.data)
        })
        .catch(err => {
            // Handle errors
            console.error(err);
        });


    axiosClient.get(`/b2b/product/all`)
        .then(response => {
            // Handle response
            setMedicine(response.data)
        })
        .catch(err => {
            // Handle errors
            console.error(err);
        });


    const handleUserFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();
        const filtered = subadmin.filter((item) => {
            const name = item.name.toString().toLowerCase();
            const search = searchword.toLowerCase();
            return name.includes(search);
        });
        if (searchword === "") {
            setSearchUser([]);
        } else {
            setSearchUser(filtered);
        }
    };
    const AddSubAdmin = (id) => {
        const sub_admin_id = id;
        axiosClient.post(`/b2b/add/subadmin/${sub_admin_id}`)
            .then(res => {
                if (res.data !== null) {
                    // navigate('/b2b/cart');
                    alert('Sub Admin Added Successfully!!')
                }
                else if (res.data === null) {
                }

            })
            .catch(err => console.log(err));
        // console.log(sub_admin_id);
    }

    const handleMedicineFilter = (event) => {
        setSearchMedicineValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();
        const filtered = medicine[0].filter((item) => {
            const name = item.product_name.toString().toLowerCase();
            const search = searchword.toLowerCase();
            return name.includes(search);
        });
        if (searchword === "") {
            setSearchMedicine([]);
        } else {
            setSearchMedicine(filtered);
        }
    };
    // Quantity State
    const [quantity, setQuantity] = useState(1);
    // Increase Quantity
    const AddItems = () => setQuantity(quantity => quantity + 1);
    // Decrease Quantity
    const DecreaseItems = () => {
        if (quantity > 0) setQuantity(quantity => quantity - 1);
    };
    const AddToCart = (product_id) => {
        axiosClient.post(`/b2b/addtocart/${product_id}/${quantity}`)
            .then(res => {
                if (res.data !== null) {
                    alert("Added to Cart")
                }
                else if (res.data === null) {
                }

            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className=" partner-profile-full-class row" style={{ height: '70vh', overflowX: 'hidden' }}>
                <div className="col-3" style={{ borderRight: '2px solid black' }}>
                    <div className="container mt-5" style={{ top: '50px' }}>
                        <h5 style={quiceLink}>Quick Links</h5>
                        <hr />
                        <div className="list-group shadow" id="list-tab" role="tablist">
                            <Link to="#profile" className="list-group-item list-group-item-action active list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</Link>
                            <Link to="/b2b-home" className="list-group-item list-group-item-action list-group-item-info">Shop Now</Link>
                            <Link to="#orders" onClick={showOrders} className="list-group-item list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-order">Your Orders</Link>
                            <Link to="#order_now" className="list-group-item list-group-item-action list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Order Now</Link>
                            <Link to="/b2b/emp/addnew/service-provider" className="list-group-item list-group-item-action list-group-item-info">Add Sub Admin</Link>
                            <Link to="/b2b/emp/addnew/customer" className="list-group-item list-group-item-action list-group-item-info">Add Customer</Link>
                            <Link to="/b2b/emp/addnew/query/product" className="list-group-item list-group-item-action list-group-item-info">Add Quary product</Link>
                        </div>
                    </div>
                </div>
                <div className="col-9" style={{ marginTop: '2vh' }}>
                    <div className="tab-content shadow" id="nav-tabContent" style={{ color: 'black', borderRadius: '5px' }} >
                        <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                            <h2 className='p-2 text-dark' > || Profile ||</h2>
                            <div className="container text-dark " style={renDataStyle}>
                                <div className='profile-details' style={{ minWidth: '95%', marginBottom: '2vh' }}>
                                    <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        <ul className="list-group" >
                                            <li className="list-group-item " style={listStyle}>
                                            </li>
                                            <li className="list-group-item " style={listStyle}><h2>Hi <span style={{ color: '#1facff' }}>{user && user.name}</span>!</h2></li>
                                            <li className="list-group-item " style={listStyle}>
                                                <p>
                                                    Employee Id:- {user && user.id}
                                                    <br />
                                                    <hr />
                                                    Phone no:- {user && user.ph_num}
                                                    <br />
                                                    <hr />
                                                    Email:- {user && user.email}
                                                </p>
                                            </li>
                                            <li className="list-group-item " style={listStyle}>
                                                <>
                                                    {/* Address :- {user&&user.name}, {user&&user.Village},{user&&user.P_O},{user&&user.City},{user&&user.district},{user&&user.State},{user&&user.Pin} */}
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
                                                        <th scope="col">Product Id</th>
                                                        <th scope="col">User ID</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Payment Mood</th>
                                                        <th scope="col">Payment Status</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {your_orders.map((order, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{order.id}</th>
                                                            <td>{order.product_id}</td>
                                                            <td>{order.sub_admin_id}</td>
                                                            <td>{order.order_date}</td>
                                                            <td>{order.payment_type}</td>
                                                            <td>{order.payment_status}</td>
                                                            <td> <Link to={`/sub-admin/orders/${order.id}/${order.sub_admin_id}/${order.product_id}`}><button className="btn btn-info m-1">View Order</button></Link></td>
                                                            <td> <button className='btn btn-danger m-1' onClick={() => deleteOrder(order.id)}>Cancle Order</button></td>
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
                        <div className="tab-pane fade text-light" id="order_now" role="tabpanel" aria-labelledby="list-Medicine-list">
                            <h2 className='p-2 text-dark'> Order Now</h2>
                            {/* <div className="container text-dark" style={renDataStyle}>
                                <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                        <p className='p-1 m-1'>Search Sub Admin by Name</p>
                                        <input className="form-control" name='input' onChange={handleUserFilter} placeholder="Search Sub Admin by Name" value={searchValue.input} style={{ fontSize: '0.9em', width: '55%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
                                    </div>
                                    {searchUser.length !== 0 && (
                                        <div className="container text-dark" style={renDataStyle}>
                                            <table className="table table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Phone No</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {searchUser.map((user, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{user.id}</th>
                                                            <td>{user.name}</td>
                                                            <td>{user.phone}</td>
                                                            <td>{user.role}</td>
                                                            <td onClick={() => AddSubAdmin(user.id)}> <FaPlus style={{ color: 'blue', width: '25px', height: '25px' }} /></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div> */}
                            <div className="container text-dark" style={renDataStyle}>
                                <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                        <p className='p-1 m-1'>Search Medicine by Name</p>
                                        <input className="form-control" name='input' onChange={handleMedicineFilter} placeholder="Search Medicine by Name" value={setSearchMedicineValue.input} style={{ fontSize: '0.9em', width: '55%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
                                    </div>
                                    {searchMedicine.length !== 0 && (
                                        <div className="container text-dark" style={renDataStyle}>
                                            <table className="table table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Product Name</th>
                                                        <th scope="col">Discounded Price</th>
                                                        <th scope="col">Product Price</th>
                                                        <th scope="col">Product Quantity</th>
                                                        <th scope="col">Discount</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {searchMedicine.map((product, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{product.product_id}</th>
                                                            <td>{product.product_name}</td>
                                                            <td><>₹ {product.product_price - ((product.product_price * product.discount) / 100)}</></td>
                                                            <td>{product.product_price}</td>
                                                            {/* <td>{product.product_quantity}</td> */}
                                                            <td>
                                                                {
                                                                    product.product_quantity !== 0 ? <>
                                                                        <span style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                                                            {

                                                                                product.product_quantity > quantity ? <>
                                                                                    <p className='px-2'>Qty</p>
                                                                                    <p style={{ display: 'flex' }}>
                                                                                        <span className='px-2' onClick={DecreaseItems}><svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" /></svg></span><span>
                                                                                            <p>{quantity}</p>
                                                                                        </span>
                                                                                        <span onClick={AddItems} className='px-2'><svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg></span> </p>

                                                                                </> : <>
                                                                                    <h5 className='px-2 text-danger'>Qty</h5>
                                                                                    <p style={{ display: 'flex' }}>
                                                                                        <span className='px-2' onClick={DecreaseItems}><svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" /></svg></span><span>
                                                                                            <h5>{quantity}</h5>
                                                                                        </span>
                                                                                        <span disabled={true} className='px-2'><svg tyle={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg></span>
                                                                                    </p>
                                                                                    <br />
                                                                                    <p className='text-danger' style={{ height: '20px', flexBasis: '100%' }}>Product Out Of Stock</p>

                                                                                </>
                                                                            }
                                                                        </span>

                                                                    </> : <>
                                                                    </>

                                                                }
                                                            </td>
                                                            <td>{product.discount}</td>
                                                            {/* <td> <div className="btn btn-danger">Delete</div> <div className="btn btn-warning">Update</div> </td> */}
                                                            <td onClick={() => AddToCart(product.product_id)}> <FaPlus style={{ color: 'blue', width: '25px', height: '25px' }} /></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
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
                            {/* <Link to={`lab-booking`}><button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Lab Booking </button></Link> */}
                        </div>
                        <div>
                            {/* <Link to={`appoiments`}><button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Appoiments</button></Link>
                            <Link to={`clinic`}> <button type="button" className="btn btn-outline-info m-2 p-2" style={{ width: '32vw', height: '7vh', cursor: 'pointer' }}>Clinic</button></Link> */}
                        </div>
                        <Link to={`/b2b-home`}><button type="button" className="btn btn-info m-2 p-2" style={{ width: '90%', height: '7vh', cursor: 'pointer' }}>Shop Now</button></Link>
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
