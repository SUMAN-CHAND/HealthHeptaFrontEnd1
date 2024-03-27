import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import UploadImage from '../UploadImage';
import Dashboard from './Dashboard';
import ReactWhatsapp from 'react-whatsapp';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosClient from '../axiosClient';
import { GrView } from 'react-icons/gr';
export default function Sub_Admin_Home_Page() {
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

  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [userAddress, setUserAddress] = useState({});
  const [rolePresent, setRolePresentStatus] = useState('');
  const location = useLocation();

  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [your_orders, setYour_orders] = useState([])
  const [payments, setPayments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [laboratorys, setLaboratorys] = useState([]);
  const [appoiments, setAppoiments] = useState([]);
  const [laboratorysBookings, setLaboratorysBookings] = useState([]);
  const [images, setImages] = useState([]);
  const [userRole, setUserRole] = useState('');

  const LogedIn = sessionStorage.getItem('LogedIn');
  const userId = sessionStorage.getItem('user_id');

  if (LogedIn === undefined || LogedIn === null) {
    return <Navigate to='/sub-admin/login' />;
  }

  let flag = false;
  useEffect(() => {
    axiosClient.get('/sub-admin/home/profile').then((response) => {
      if (response.data !== null) {
        setUser(response.data[0]);
        setUserAddress(response.data[1]);
        setImages(response.data[2]);
        setUserRole(response.data[0].role)
        setRolePresentStatus(response.data[0].role);

      }
    });
  }, []);


  useEffect(() => {
    axiosClient.get('/sub-admin/product')
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setProducts(response.data)
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
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
  }, [])
  useEffect(() => {
    axiosClient.get('/sub-admin/orders')
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


  const flagm = true;
  const listStyle = {
    backgroundColor: 'rgb(207 244 252)',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left'
  }



  const showBill = (order_id,product_id,sub_admin_id) => {
    // event.preventDefault();
    navigate('/b2b/order/bill',
        {
            state: {
                orderId: order_id,
                productIds: product_id,
                sub_admin_id: sub_admin_id
            }
        });

    success();
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
  const updateStatus = (orderId) => {
    axiosClient.post(`/sub-admin/orders/accept/${orderId}`).then(response => {
      if (response.data) {
        alert('Order Accepted');
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const showPayments = () => {
    axiosClient.get('/sub-admin/payments')
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setPayments(response.data)
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }

  const [ind_doctor_images, setInd_doctor_images] = useState([]);
  const [ind_laboratory_images, setInd_laboratory_images] = useState([]);
  const [chooseProduct, setChooseProduct] = useState([])

  // const loadImages = () => {
  //   axios
  //     .get('/images')
  //     .then((response) => {
  //       setInd_doctor_images(response.data);
  //       // console.log(images)
  //     })
  //     .catch((error) => {
  //       console.error('Image retrieval error: ' + error);
  //     });
  // };

  const ShowDoctor = () => {
    axiosClient.get(`/sub-admin/see-doctor`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setDoctors(response.data[0]);
          setInd_doctor_images(response.data[1])
          // loadImages();
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const ShowLaboratory = () => {
    axiosClient.get(`/sub-admin/see-labtests`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setLaboratorys(response.data[0]);
          setInd_laboratory_images(response.data[1])
          // loadImages();
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }

  // console.log(  doctors)
  // console.log(ind_doctor_images)
  const ShowAppoiment = () => {
    axiosClient.get(`/sub-admin/see-appoiment`)
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
  const ShowLaboratoryTestBooking = () => {
    // console.log('ShowLaboratoryTestBooking')
    axiosClient.get(`/sub-admin/see-lab-bookings`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setLaboratorysBookings(response.data);
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  // console.log(appoiments)
  // console.log(ind_doctor_images)
  // const handleImageUpload = (imageId) => {
  //   setValues({ ...values, SubAdminImageId: imageId });
  // };


  // const handleInput = (event) => {
  //   setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

  // }
  const [AppointmentStatus, setAppointmentStatus] = useState({
    AppointmentStatus: '',
  });
  const [values, setValues] = useState({
    // AppointmentStatus: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // console.log(value)
    setAppointmentStatus({ AppointmentStatus: value });
    // handleSubmit(value);
  };

  const handleSubmit = (appoiment_id) => {
    // console.log(AppointmentStatus)
    axiosClient.post(`/sub-admin/reschedule/status/${appoiment_id}`, AppointmentStatus)
      .then(res => {
        if (res.data !== null) {

          alert('Appoiment Success!!!');

          navigate('/sub-admin/home', { state: { loggedIn: true } });
        }
        else if (res.data === null) {
          alert('Appoiment Failed');
        }
        else {
          alert('Appoiment Failed');
        }
      })
      .catch(err => console.log(err));
  };

  const handlelabSubmit = (appoiment_id) => {
    // console.log(AppointmentStatus)
    axiosClient.post(`/sub-admin/reschedule/lab/status/${appoiment_id}`, AppointmentStatus)
      .then(res => {
        if (res.data !== null) {

          alert('Appoiment Success!!!');

          navigate('/sub-admin/home', { state: { loggedIn: true } });
        }
        else if (res.data === null) {
          alert('Appoiment Failed');
        }
        else {
          alert('Appoiment Failed');
        }
      })
      .catch(err => console.log(err));
  };

  const deleteOrder = (id) => {
    // console.log('click')
    axiosClient.delete(`/sub-admin/delete/orders/${id}`)
      .then(response => {
        // console.log(response)
        if (response.data === 'success') {
          alert('Order Delete Successfully');
        }
        else if (response.data === null) {
          // console.log(response.data)
          alert('Order cannot be canceled at this time');
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleFilter = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();
    // console.log(searchword)
    const newFilter = products.filter((value) => {
      return value.product_name.toLowerCase().includes(searchword)
    });
    if (searchword === "") {
      setChooseProduct([]);
    } else {
      // console.log(newFilter)
      setChooseProduct(newFilter);
    }
  };
  // const handleClick = event => {
  //   setChooseProduct([]);
  // };

  //TODO

  const renDataStyle = {
    backgroundColor: 'rgb(237 237 237)',
    // display: 'flex',
    // minHeight: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1vh',
    overflowX: 'auto',
  }

  const quiceLink = {
    backgroundColor: '#055160',
    padding: '5px',
    color: 'white',
    borderRadius: '5px'
  }

  return (
    <div>
      <div className="row" style={{ height: '70vh', overflowX: 'hidden' }}>
        <div className="col-2 sub-admin-quicklink" style={{ borderRight: '2px solid black' }}>
          <div className="container mt-5 sub-admin-quicklink-items" style={{ top: '50px' }}>
            <h5 style={quiceLink}>Quick Links</h5>
            <hr />
            <div className="list-group shadow" id="list-tab" role="tablist">
              <Link to="#summary" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Summary</Link>
              <Link to="#profile" className="list-group-item list-group-item-action   list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Profile</Link>

              {
                userRole.toLowerCase() === 'medicine shop' ? <>
                  <div class="dropdown">
                    <button class="list-group-item list-group-item-action  list-group-item-info dropdown-toggle" id="list-serviceprovider-list" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </button>
                    <ul class="dropdown-menu " style={{ backgroundColor: '#9eeaf9' }} aria-labelledby="dropdownMenuButton1">
                      <li><Link to="#list-products" className="list-group-item list-group-item-action  list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Products</Link></li>
                      <li><Link to='addproduct' className="list-group-item  list-group-item-info" id="list-serviceprovider-list">Add New Product</Link></li>
                    </ul>
                  </div>

                  <Link to="#orders" className="list-group-item list-group-item-action  list-group-item-info" id="list-orders-list" data-bs-toggle="list" role="tab" aria-controls="list-orders">Order from HealthHepta</Link>
                  <Link to="#payment" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link>
                </> : <></>
              }
              {
                userRole.toLowerCase() === 'clinic' ? <>
                  <Link to="#doctors" onClick={ShowDoctor} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">View Doctors</Link>
                  <Link to="#appoiment" onClick={ShowAppoiment} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Appoiment</Link>
                  <Link to="#payment" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link>
                </> : <></>
              }
              {
                userRole.toLowerCase() === 'doctor' ? <>
                  <Link to="#appoiment" onClick={ShowAppoiment} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Appoiment</Link>
                  <Link to="#clinic" onClick={ShowDoctor} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Clinic</Link>
                  <Link to="#payment" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link>
                </> : <></>
              }
              {
                userRole.toLowerCase() === 'laboratory' ? <>
                  <Link to="#laboratory" onClick={ShowLaboratory} className="list-group-item list-group-item-action  list-group-item-info" id="list-laboratory-list" data-bs-toggle="list" role="tab" aria-controls="list-users">View Laboratory Tests</Link>
                  <Link to="#laboratorytestBooking" onClick={ShowLaboratoryTestBooking} className="list-group-item list-group-item-action  list-group-item-info" id="list-laboratory-list" data-bs-toggle="list" role="tab" aria-controls="list-users">View Laboratory Tests Booking</Link>
                  <Link to="#payment" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link>
                </> : <></>
              }
              <Link to="/b2b-home" className="list-group-item list-group-item-action list-group-item-info">Shop Now</Link>
              <Link to="/b2b-home/lotproduct" className="list-group-item list-group-item-action    list-group-item-info" >Shop By lot Scheme</Link>
              <Link to="/b2b-home/margin" className="list-group-item list-group-item-action    list-group-item-info" >Shop By Margin</Link>
              <Link to="/b2b-home/margin" className="list-group-item list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Offered Product</Link>
              <Link to="#your_order" className="list-group-item list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-order">Your Orders</Link>
              <Link to="#cradit_system" className="list-group-item list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Cradit System</Link>
              <Link to="#pay_bill" className="list-group-item list-group-item-action  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Pay & Bills</Link>
              <Link to="#wallet_history" className="list-group-item list-group-item-action     list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Wallet History</Link>
              <Link to="#view_all_reports" className="list-group-item list-group-item-action    list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">View All Reports</Link>
              <Link to="#refer" className="list-group-item list-group-item-action  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-profile">Refer & Earn</Link>
            </div>
          </div>
        </div>
        <div className="col-10" style={{ marginTop: '2vh' }}>
          <div className="tab-content shadow" id="nav-tabContent" style={{ color: 'black', borderRadius: '5px' }} >
            <div className="tab-pane fade show active text-light" style={{ backgroundColor: '#rgba(255, 255, 255, 0.95)' }} id="summary" role="tabpanel" aria-labelledby="list-summry-list">
              <h2 className='p-2 text-dark'></h2>
              <Dashboard />
            </div>
            <div className="tab-pane fade show  text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
              <h2 className='p-2 text-dark' > || Profile ||</h2>
              <div className="container text-dark " style={renDataStyle}>
                <div className='profile-details' style={{ minWidth: '95%', marginBottom: '2vh' }}>
                  <div className="tab-pane fade show active text-light" id="profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <ul className="list-group" >
                      <li className="list-group-item " style={listStyle}>
                        <div>
                          {images.map((img) => (
                            <div key={img.id}>
                              <img
                                src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                alt={img.name}

                                style={{ borderRadius: '50%', height: '16vh', border: '5px solid cadetblue' }}
                              />
                              {/* <p>{img.name}</p> */}
                            </div>
                          ))}
                        </div>
                      </li>
                      <li className="list-group-item " style={listStyle}><h2>Hi <span style={{ color: '#1facff' }}>{user.name}</span>!</h2></li>
                      <li className="list-group-item " style={listStyle}>
                        <p>
                          Phone no:- {user.phone}
                        </p>

                      </li>
                      <li className="list-group-item " style={listStyle}>
                        <>
                          <p>
                            Address :- {user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.pin_code}
                          </p>
                        </>
                      </li>
                      <li className="list-group-item " style={listStyle}>
                        <>
                          <p>
                            Your Role:- {user.role}
                          </p>
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

            <div className="tab-pane fade " id="list-products" role="tabpanel" aria-labelledby="list-products-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Products ||</h2> <Link to='addproduct'><button className='btn btn-primary mx-3 my-2' >Add New Product</button></Link></span>

              <div className="search  me-2 search-location" >
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <p className='p-1 m-1'>Search Products here</p>
                  <input className="form-control" name='input' onChange={handleFilter} placeholder="Search product name" value={values.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
                  {/* <button type="button" onClick={searchMedicne} className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </button> */}
                </div>
                {chooseProduct.length !== 0 && (
                  <div className="" >
                    {/* {chooseProduct.map((sproduct, index) => {
                      return */}
                    <div className="container text-dark " style={renDataStyle}>
                      <table className="table table-striped">
                        <thead className='thead-dark'>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">MRP</th>
                            <th scope="col">Product Quantity</th>
                            <th scope="col">Manufacturing Date</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Drag/Otc</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody style={{ verticalAlign: 'middle' }}>
                          {chooseProduct.map((product, index) => (
                            <tr key={index}>
                              <th scope="row">{product.product_id}</th>
                              <td>img...</td>
                              <td>{product.product_name}</td>
                              <td>{product.description}</td>
                              <td>{product.product_price}</td>
                              <td>{product.product_quantity}</td>
                              <td>{product.manufacturing}</td>
                              <td>{product.expiry}</td>
                              <td>{product.discount} %</td>
                              <td>{product.DrugOrNot} </td>
                              <td style={{ display: 'flex' }}>
                                <Link to={`updateproduct/${product.product_id}`} >  <FaRegEdit style={{ cursor: 'pointer', color: 'blue', margin: '1px', height: '5vh', width: '2vw' }} />
                                </Link>
                                <RiDeleteBin6Line onClick={() => deleteProduct(product.product_id)} style={{ cursor: 'pointer', color: 'red', margin: '1px', height: '5vh', width: '2vw' }} />

                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* // }
                    // )} */}
                  </div>
                )}
              </div>
              {/* <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">MRP</th>
                      <th scope="col">Product Quantity</th>
                      <th scope="col">Manufacturing Date</th>
                      <th scope="col">Expiry Date</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Drag/Otc</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody style={{ verticalAlign: 'middle' }}>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <th scope="row">{product.product_id}</th>
                        <td>img...</td>
                        <td>{product.product_name}</td>
                        <td>{product.description}</td>
                        <td>{product.product_price}</td>
                        <td>{product.product_quantity}</td>
                        <td>{product.manufacturing}</td>
                        <td>{product.expiry}</td>
                        <td>{product.discount} %</td>
                        <td>{product.DrugOrNot} </td>
                        <td style={{ display: 'flex' }}> <button className="btn btn-danger m-1" onClick={() => deleteProduct(product.product_id)}  >Delete</button>  <Link to={`updateproduct/${product.product_id}`} > <button style={{ cursor: 'pointer' }} type='button' className="btn btn-warning m-1">Update</button></Link> </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
            </div>
            <div className="tab-pane fade " id="orders" role="tabpanel" aria-labelledby="list-orders-list">
              <h2 className='p-2'>|| Orders ||</h2>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Count</th>
                      <th scope="col">OrderId</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment Mood</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Status</th>
                      <th scope="col">Expected delivery date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <th scope="row">{order.id}</th>
                        <td>{order.product_name}</td>
                        <td>{order.name}</td>
                        <td>{order.order_date}</td>
                        <td>{order.payment_type}</td>
                        <td>{order.payment_status}</td>
                        <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status}<br />  {order.orderAcceptedBy}</td>
                        {/* <td> <Link to={`/sub-admin/orders/${order.id}/${order.user_id}/${order.product_id}`}><button className="btn btn-info m-1">View Order</button></Link></td> */}
                        <td>
                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            {order.expected_delivery_date}
                            <br />
                          </div>
                        </td>
                        <td className='flex items-center justify-center'>
                          <Link to={`/sub-admin/orders/action/${order.id}/${order.user_id}/${order.product_id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>
                          <Link to={`/sub-admin/payment/${order.id}/${order.user_id}`}><GrView className='text-primary' style={{ width: '2vw', height: '2vh', fill: 'blue' }} /></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="payment" role="tabpanel" aria-labelledby="list-payments-list">
              <h2 className='p-2'>|| Payments ||</h2>
              <div className="container text-dark" style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Payments Id</th>
                      <th scope="col">User Name</th>
                      <th scope="col">Order Id</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Payment Type</th>
                      <th scope="col">Payment Accept</th>
                      <th scope="col">Complete Payment</th>
                      <th scope="col">Payment Accepted User Id</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr key={index}>
                        <th scope="row">{payment.payment_id}</th>
                        <td>{payment.name}({payment.user_id})</td>
                        <td>{payment.order_id}</td>
                        <td>{payment.total_amount}</td>
                        <td>{payment.payment_status}</td>
                        <td>{payment.payment_type}</td>
                        <td>{payment.paymentacceptedby}</td>
                        <td>{payment.paymentacceptedUserId}</td>
                        <td><Link to={`/sub-admin/payment/complete/action/${payment.order_id}/${payment.user_id}`}>Complete Payment</Link></td>
                        <td>
                          <Link to={`/sub-admin/payment/${payment.order_id}/${payment.user_id}`}><button className="btn btn-info m-1">View Order</button></Link>
                          {/* <Link to={`/superadmin/orders/customer/${payment.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <table className="table table-striped">
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
                </table> */}


              </div>
            </div>
            <div className="tab-pane fade  text-light" id="doctors" role="tabpanel" aria-labelledby="list-payments-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Doctors ||</h2> <Link to='add-new-doctor '><button className='btn btn-primary mx-3 my-2' >Add New Doctor</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Doctor Id</th>
                      <th scope="col">Doctor Image</th>
                      <th scope="col">Doctor Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Clinic</th>
                      <th scope="col">Clinic Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor, index) => (
                      <tr key={index}>
                        <th scope="row">{doctor.id}</th>
                        <td>
                          {ind_doctor_images.map((img) => (
                            <div key={img.id}>
                              {parseInt(doctor.doctor_imageId) === img.id ?
                                <>
                                  <img
                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                    alt={img.name}
                                    width="50"
                                  />
                                </>
                                : <></>}

                              {/* <p>{img.name}</p> */}
                            </div>
                          ))}

                        </td>
                        <td>{doctor.doc_name}</td>
                        <td>{doctor.doc_desc}</td>
                        <td>{doctor.clinic}</td>
                        <td>{doctor.clinic_desc}</td>
                        <td> <Link to={`/sub-admin/home/timetable/doctor/${doctor.id}`}><button className="btn btn-info m-1">View TimeTable</button></Link></td>
                        {/* <td> <Link to={`/sub-admin/payment/${payment.order_id}/${payment.user_id}/${payment.product_id}`}><button className="btn btn-info m-1">View</button></Link></td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="clinic" role="tabpanel" aria-labelledby="list-payments-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Clinics ||</h2> <Link to='add-new-doctor '><button className='btn btn-primary mx-3 my-2' >Add New Clinic</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Doctor Id</th>
                      <th scope="col">Doctor Image</th>
                      <th scope="col">Doctor Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Clinic</th>
                      <th scope="col">Clinic Description</th>
                      <th scope="col">Days opening</th>
                      <th scope="col">Opening Time</th>
                      <th scope="col">Closeing Time</th>
                    </tr>
                  </thead>
                  {doctors.length > 0 ? <>
                    <tbody>
                      {doctors.map((doctor, index) => (
                        <tr key={index}>
                          <th scope="row">{doctor.id}</th>
                          <td>{ind_doctor_images.map((img) => (
                            <div key={img.id}>
                              {parseInt(doctor.doctor_imageId) === img.id ?
                                <>
                                  <img
                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                    alt={img.name}
                                    width="50"
                                  />
                                </>
                                : <></>}
                            </div>
                          ))}</td>
                          <td>{doctor.doc_name}</td>
                          <td>{doctor.doc_desc}</td>
                          <td>{doctor.clinic}</td>
                          <td>{doctor.clinic_desc}</td>
                          <td>{doctor.weekly_day}</td>
                          <td>{doctor.starting_time}</td>
                          <td>{doctor.ending_time}</td>
                          {/* <td> <Link to={`/sub-admin/payment/${payment.order_id}/${payment.user_id}/${payment.product_id}`}><button className="btn btn-info m-1">View</button></Link></td> */}
                        </tr>
                      ))}
                    </tbody>
                  </> : <>

                  </>}
                </table>
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="laboratory" role="tabpanel" aria-labelledby="list-laboratory-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Laboratory Test ||</h2> <Link to='add-new-laboratory-test '><button className='btn btn-primary mx-3 my-2' >Add New Laboratory Test</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Laboratory Test Id</th>
                      <th scope="col">Laboratory Test Image</th>
                      <th scope="col">Laboratory Test Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  {laboratorys.length > 0 ? <>
                    <tbody>
                      {laboratorys.map((laboratory, index) => (
                        <tr key={index}>
                          <th scope="row">{laboratory.Test_id}</th>
                          <td>{ind_laboratory_images.map((img) => (
                            <div key={img.id}>
                              {parseInt(laboratory.test_imageId) === img.id ?
                                <>
                                  <img
                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                    alt={img.name}
                                    width="50"
                                  />
                                </>
                                : <></>}
                              {/* <p>{img.name}</p> */}
                            </div>
                          ))}</td>
                          <td>{laboratory.Test_Name}</td>
                          <td>{laboratory.Test_Desc}</td>
                          <td>{laboratory.Price}</td>
                          {/* <td> <Link to={`/sub-admin/payment/${payment.order_id}/${payment.user_id}/${payment.product_id}`}><button className="btn btn-info m-1">View</button></Link></td> */}
                        </tr>
                      ))}
                    </tbody>
                  </> : <>

                  </>}
                </table>
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="laboratorytestBooking" role="tabpanel" aria-labelledby="list-laboratory-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Laboratory Test Booked ||</h2> <Link to='add-new-laboratory-test '><button className='btn btn-primary mx-3 my-2' >Add New Laboratory Test Book</button></Link></span>
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
                      <th scope="col">Sample Collection</th>
                      <th scope="col">Price</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Payment Accept</th>
                      {/* <th scope="col">Clinic Description</th> */}
                      <th scope="col">Appoiment Status</th>
                      {/* <th scope="col">Appoiment Type</th> */}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laboratorysBookings.length > 0 ? <>

                      {laboratorysBookings.map((labBooking, index) => (
                        <tr key={index}>
                          <th scope="row">{labBooking.id}</th>
                          <td>{labBooking.name}</td>
                          <td>{labBooking.ph_number}</td>
                          <td>{labBooking.appoint_date}</td>
                          <td>{labBooking.appoint_time}</td>
                          <td>{labBooking.Test_Name}</td>
                          <td>{labBooking.sample_collection}</td>
                          <td>{labBooking.price}</td>
                          <td>{labBooking.payment_status}</td>
                          <td><Link to={`/sub-admin/payment/labbooking/complete/action/${labBooking.id}/${labBooking.user_id}`}>Complete Payment</Link></td>

                          {/* <td>{appoiment.clinic_desc}</td> */}
                          {/* <td>{labBooking.LabTestStatus}</td> */}
                          <td>

                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                              <select
                                onChange={handleInput} name='AppointmentStatus'
                                style={{ width: '80%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                                <option value={labBooking.LabTestStatus}>{labBooking.LabTestStatus}</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Reschedule">Reschedule</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </div>
                            <div className="btn btn-warning" onClick={() => handlelabSubmit(labBooking.id)}>Change</div>
                          </td>
                          <td style={{ display: 'flex' }}> <Link to={`sub-admin/reschedule/lab/${labBooking.id}`}><button className="btn btn-info m-1">Reschedule</button></Link>

                            {labBooking.LabTestStatus.toLowerCase() === 'request_reschedule' ? <>
                              <Link to={`/sub-admin/reschedule/lab/see/${labBooking.id}`}><button className="btn btn-info m-1">Request Reschedule</button></Link>
                            </> : <></>
                            }
                          </td>
                        </tr>
                      ))}
                    </> : <>

                    </>}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="appoiment" role="tabpanel" aria-labelledby="list-payments-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Appoiments ||</h2> <Link to='add-new-doctor '><button className='btn btn-primary mx-3 my-2' >Add New Appoiment</button></Link></span>
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
                      <th scope="col">Price</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Payment Accept</th>
                      <th scope="col">Appointment Status</th>
                      <th scope="col">Appoiment Type</th>
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
                        {/* <td>{appoiment.clinic_desc}</td> */}
                        <td>{appoiment.fees}</td>
                        <td>{appoiment.payment_status}</td>
                        <td><Link to={`/sub-admin/payment/appoiment/complete/action/${appoiment.id}/${appoiment.user_id}`}>Complete Payment</Link></td>

                        <td>

                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <select
                              onChange={handleInput} name='AppointmentStatus'
                              style={{ width: '80%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                              <option value={appoiment.AppointmentStatus}>{appoiment.AppointmentStatus}</option>
                              <option value="Accepted">Accepted</option>
                              <option value="Reschedule">Reschedule</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </div>
                          <div className="btn btn-warning" onClick={() => handleSubmit(appoiment.id)}>Change</div>
                        </td>
                        {appoiment.type_of_visite === 'online' ? <>
                          <td>{appoiment.type_of_visite}
                            {/* <Link to={`/v`}><button className="btn btn-info m-1">Join Now</button></Link> */}
                            <ReactWhatsapp number={`'+91 ' + ${appoiment.ph_number}`} className="btn btn-primary outline" massage="Hi There is HealthHeapta">Join Now</ReactWhatsapp>

                          </td>
                        </> : <>
                          <td>{appoiment.type_of_visite}</td>
                        </>}
                        <td style={{ display: 'flex' }}> <Link to={`sub-admin/reschedule/${appoiment.id}`}><button className="btn btn-info m-1">Reschedule</button></Link>

                          {appoiment.AppointmentStatus.toLowerCase() === 'request_reschedule' ? <>
                            <Link to={`/sub-admin/reschedule/see/${appoiment.id}`}><button className="btn btn-info m-1">Request Reschedule</button></Link>
                          </> : <></>
                          }
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade text-light" id="your_order" role="tabpanel" aria-labelledby="list-orders-list">
              <h2 className='p-2'>||Your Orders ||</h2>
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
                        <td>{order.product_name}({order.product_id})</td>
                        <td>{order.name}({order.sub_admin_id})</td>
                        <td>{order.order_date}</td>
                        <td>{order.payment_type}</td>
                        <td>{order.payment_status}</td>
                        {/* <td> <Link to={`/sub-admin/orders/${order.id}/${order.sub_admin_id}/${order.product_id}`}><button className="btn btn-info m-1">View Order</button></Link></td> */}
                        <td> <button className="btn btn-info m-1"onClick={() => showBill(order.id,order.product_id,order.sub_admin_id)}> <p>View Order</p></button></td>
                        <td> <button className='btn btn-danger m-1' onClick={() => deleteOrder(order.id)}>Cancle Order</button></td>
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
  )
}
