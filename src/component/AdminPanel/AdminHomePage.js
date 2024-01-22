import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import NotificationComponent from './NotificationComponent';
import Dashboard from './Dashboard';
import './Style.css';
import UploadBanner from './UploadBanner';

export default function AdminHomePage() {
  //main for connecting backend with Session
  axios.defaults.withCredentials = true;


  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const [appoiments, setAppoiments] = useState([]);
  const [labbokking, setLabbokking] = useState([]);
  const [payments, setPayments] = useState([]);
  const [subAdmins, setSubAdmin] = useState([]);
  const [partners, setPartner] = useState([]);
  const [commissions, setCommissions] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [searchUser, setSearchUser] = useState([])
  const [searchPatient, setSearchPatient] = useState([])

  const navigate = useNavigate();

  const location = useLocation();
  // const [loggedIn ,setLoggedIn] = useState();


  if (location.state === null) {
    return <Navigate to='/superadmin/login' />;
  }
  const [ind_product_Images, setInd_product_Images] = useState([]);

  // useEffect(() => {
  const ShowProduct = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/product`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setProducts(response.data[0]);
          setInd_product_Images(response.data[1]);
          // loadImages();
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      })
  }
  // }, [])
  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/orders`)
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
  const showUser = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/user`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setUser(response.data)
        }
        console.log(user);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showAppoiments = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/appoiments`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setAppoiments(response.data)
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showLabbokking = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/labbokking`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setLabbokking(response.data)
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }

  const showPayments = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/payments`)
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
  const showServiceProvider = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/service-provider`)
      .then(response => {
        // Handle response
        setSubAdmin(response.data)
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showPartner = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/partner`)
      .then(response => {
        // Handle response
        setPartner(response.data)
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showPartnerCommission = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/partner-commissions`)
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
  const showCoupon = () => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/coupon`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setCoupons(response.data)
        }
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  // const param = useParams();
  // const product_id = param.product_id;
  const deleteProduct = (product_id) => {
    const response = window.confirm("Are you sure to delete the Product?");
    if (response) {
      axios.delete(`http://${process.env.REACT_APP_HOST}:8081/superadmin/delete/${product_id}`)
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
  const DeleteCommission = (commission_id) => {
    const response = window.confirm("Are you sure to delete the Commission?");
    if (response) {
      axios.delete(`http://${process.env.REACT_APP_HOST}:8081/superadmin/delete/commission/${commission_id}`)
        .then(response => {
          if (response.data === 'success') {
            alert('Commission Delete Successfully');
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert('No Commission Delete')
    }
  }
  const deleteCoupon = (coupon_id) => {
    const response = window.confirm("Are you sure to delete the Coupon?");
    if (response) {
      axios.delete(`http://${process.env.REACT_APP_HOST}:8081/superadmin/delete/coupon/${coupon_id}`)
        .then(response => {
          if (response.data === 'success') {
            alert('Coupon Delete Successfully');
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      alert('No Coupon Delete')
    }
  }

  const updateStatus = (orderId) => {
    axios.post(`http://${process.env.REACT_APP_HOST}:8081/superadmin/orders/accept/${orderId}`).then(response => {
      if (response.data) {
        alert('Order Accepted');
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const [values, setValues] = useState({
    expected_delivery_date: ''
  })
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // setRole(event.target.value)
  }

  const [medicineType, setMedicineType] = useState({
    type: 'select'
  })

  const handleMedicineType = (event) => {
    setMedicineType(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // setRole(event.target.value)
  }
  // console.log(medicineType.type)

  const updateDeliveryDate = (orderId) => {
    console.log('click')
    axios.post(`http://${process.env.REACT_APP_HOST}:8081/superadmin/orders/delivery/${orderId}`, values).then(response => {
      if (response.data) {
        alert('Order Delivery Date Change');
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const updateSubAdminStatus = (subAdminId) => {
    const response = window.confirm("Are you sure to give the Permission?");
    if (response) {
      axios.post(`http://${process.env.REACT_APP_HOST}:8081/superadmin/subadmin/accept/${subAdminId}`).then(response => {
        if (response.data) {
          alert('Permission Garented');
        }
      }).catch(err => {
        console.log(err)
      })
    } else {
      alert('Permission Denied')
    }
  }
  const updatePartnerStatus = (partner_id) => {
    const response = window.confirm("Are you sure to give the Permission?");
    if (response) {
      axios.post(`http://${process.env.REACT_APP_HOST}:8081/superadmin/partner/accept/${partner_id}`).then(response => {
        if (response.data) {
          alert('Permission Garented');
        }
      }).catch(err => {
        console.log(err)
      })
    } else {
      alert('Permission Denied')
    }
  }

  // console.log(partners)

  const ViewAadhaar = (AadhaarCardImageID) => {
    navigate(`/superadmin/image/${AadhaarCardImageID}`)
  }

  // const [images, setImages] = useState([]);

  // const loadImages = () => {
  //   axios
  //     .get('http://${process.env.REACT_APP_HOST}:8081/images')
  //     .then((response) => {
  //       setImages(response.data);
  //       // console.log(images)
  //     })
  //     .catch((error) => {
  //       console.error('Image retrieval error: ' + error);
  //     });
  // };

  // function handleMedicineTypeChange(e) {
  //   setMedicineType(e.target.value);
  //   console.log(medicineType)
  // }


  // const [partnerType, setPartnerType] = useState({
  //   type: 'all'
  // })
  // const handlePartnerType = (event) => {
  //   setPartnerType(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  //   console.log(partnerType)
  //   // setRole(event.target.value)
  // }
  const [searchValue, setSearchValue] = useState({
    input: ''
  })
  const handleUserFilter = (event) => {
    setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();

    const filtered = user.filter((item) => {
      const phoneNumber = item.phone.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchUser([]);
    } else {
      setSearchUser(filtered);
    }
  };
  const handlePatientFilter = (event) => {
    setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();

    const filtered = appoiments.filter((item) => {
      const phoneNumber = item.ph_number.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchPatient([]);
    } else {
      setSearchPatient(filtered);
    }
  };

  const renDataStyle = {
    backgroundColor: 'rgb(237 237 237)',
    display: 'flex',
    // minHeight: '50vh',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '1vh',
    flexDirection: 'column',
    overflowX: 'auto'
  }
  const dashboardStyle = {
    backgroundColor: 'rgb(237 237 237)',
    display: 'flex',
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '1vh',
    flexDirection: 'column'
  }

  const quiceLink = {
    backgroundColor: '#055160',
    padding: '5px',
    color: 'white',
    borderRadius: '5px'
  }
  const dateStyle = {
    width: "13.2rem",
    height: "2rem",
    fontSize: "1.1rem",
    width: '90%',
    cursor: 'pointer'
  };

  return (
    <div>
      <div className="row" style={{ overflowX: 'hidden' }}>
        <div className="col-2 sub-admin-quicklink admin-quicklink" style={{ borderRight: '2px solid black' }}>
          <div className="container mt-5 sub-admin-quicklink" style={{ position: 'sticky', top: '50px' }}>
            <h5 style={quiceLink}>Quick Links</h5>
            <hr />
            <div className="list-group shadow m-3" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
              <Link className="list-group-item list-group-item-action active  list-group-item-info" id="list-b2c-list" data-bs-toggle="list" role="tab" aria-controls="list-b2c">B2C </Link>
              {/* <Link to="/b2b" className="list-group-item list-group-item-action  list-group-item-info" id="list-b2b-list" data-bs-toggle="list" role="tab" aria-controls="list-b2b">B2B</Link> */}
              <Link to="b2b" className="list-group-item list-group-item-action list-group-item-info">B2B</Link>
            </div>

            <div className="list-group shadow" id="list-tab" role="tablist">
              <Link to="#summary" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Summary</Link>
              <Link to="#list-products" onClick={ShowProduct()} className="list-group-item list-group-item-action  list-group-item-info" id="list-products-list" data-bs-toggle="list" role="tab" aria-controls="list-products">Products</Link>
              <Link to="#orders" className="list-group-item list-group-item-action  list-group-item-info" id="list-orders-list" data-bs-toggle="list" role="tab" aria-controls="list-orders">Orders</Link>
              <Link to="#appoiments" onClick={showAppoiments} className="list-group-item list-group-item-action  list-group-item-info" id="list-appoiments-list" data-bs-toggle="list" role="tab" aria-controls="list-appoiments">Appoiments</Link>
              <Link to="#labbokking" onClick={showLabbokking} className="list-group-item list-group-item-action  list-group-item-info" id="list-appoiments-list" data-bs-toggle="list" role="tab" aria-controls="list-appoiments">Lab Bookings</Link>
              <Link to="#list-users" onClick={showUser} className="list-group-item list-group-item-action  list-group-item-info" id="list-users-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Users</Link>
              <Link to="#payment" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link>
              <Link to="#serviceprovider" onClick={showServiceProvider} className="list-group-item list-group-item-action list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Service Provider</Link>
              <Link to="#partner" onClick={showPartner} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Partner</Link>
              <Link to="#partner-commission" onClick={showPartnerCommission} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-commission-list" data-bs-toggle="list" role="tab" aria-controls="list-partner-commission">Partner Commission</Link>
              <Link to="#notification" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">New Order</Link>
              <Link to="#commission" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Commission</Link>
              <Link to="#banner" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Add Banner</Link>
              <Link to="#coupon" onClick={showCoupon} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Coupon</Link>
            </div>
          </div>
        </div>

        <div className="col-10 admin-content" style={{ marginTop: '2vh' }}>
          <div className="tab-content shadow" id="nav-tabContent" style={{ backgroundColor: '#64B5F6', borderRadius: '5px' }} >
            <div className="tab-pane fade show active text-light" id="summary" role="tabpanel" aria-labelledby="list-summary-list">
              <h2 className='p-2'> || Dashboard ||</h2>
              <div className="container text-dark " style={dashboardStyle}>
                <Dashboard />
              </div>
            </div>
            <div className="tab-pane fade text-light" id="list-products" role="tabpanel" aria-labelledby="list-products-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Products ||</h2> <Link to='addproduct'><button className='btn btn-primary mx-3 my-2' >Add New</button></Link></span>
              <div className="container text-dark " style={renDataStyle}>
                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                  <p style={{ marginLeft: '10px' }}>Select Drug or Otc :</p>
                  <select
                    onChange={handleMedicineType} name='type'
                    style={{ width: '25%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                    <option defaultValue="select">Select One</option>
                    <option value="drug">Drug</option>
                    <option value="otc">otc</option>
                  </select>
                </div>
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
                    {medicineType.type[0] === 'select' ? <>
                      {products.map((product, index) => (
                        <tr key={index}>
                          <th scope="row">{product.product_id}</th>
                          <td>{ind_product_Images.map((img) => (
                            <div key={img.id}>
                              {parseInt(product.productImageId) === img.id ?
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
                          <td>{product.product_name}</td>
                          <td>{product.description}</td>
                          <td>{product.product_price}</td>
                          <td>{product.product_quantity}</td>
                          <td>{product.manufacturing}</td>
                          <td>{product.expiry}</td>
                          <td>{product.discount} %</td>
                          <td>{product.DrugOrNot} </td>
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></div>
                          </div></td>
                        </tr>
                      ))}
                    </> : <>

                    </>
                    }
                    {medicineType.type === 'select' ? <>
                      {products.map((product, index) => (
                        <tr key={index}>
                          <th scope="row">{product.product_id}</th>
                          <td>{ind_product_Images.map((img) => (
                            <div key={img.id}>
                              {parseInt(product.productImageId) === img.id ?
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
                          <td>{product.product_name}</td>
                          <td>{product.description}</td>
                          <td>{product.product_price}</td>
                          <td>{product.product_quantity}</td>
                          <td>{product.manufacturing}</td>
                          <td>{product.expiry}</td>
                          <td>{product.discount} %</td>
                          <td>{product.DrugOrNot} </td>
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></div>
                          </div></td>
                        </tr>
                      ))}
                    </> : <>

                    </>
                    }
                    {medicineType.type[0] === 'drug' ? <>
                      {products.filter(productf => productf.DrugOrNot === 'drug').map((product, index) => (
                        <tr key={index}>
                          <th scope="row">{product.product_id}</th>
                          <td>{ind_product_Images.map((img) => (
                            <div key={img.id}>
                              {parseInt(product.productImageId) === img.id ?
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
                          <td>{product.product_name}</td>
                          <td>{product.description}</td>
                          <td>{product.product_price}</td>
                          <td>{product.product_quantity}</td>
                          <td>{product.manufacturing}</td>
                          <td>{product.expiry}</td>
                          <td>{product.discount} %</td>
                          <td>{product.DrugOrNot} </td>
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></div>
                          </div></td>
                        </tr>
                      ))}
                    </> : <>

                    </>
                    }
                    {medicineType.type[0] === 'otc' ? <>
                      {products.filter(productf => productf.DrugOrNot === 'otc').map((product, index) => (
                        <tr key={index}>
                          <th scope="row">{product.product_id}</th>
                          <td>{ind_product_Images.map((img) => (
                            <div key={img.id}>
                              {parseInt(product.productImageId) === img.id ?
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
                          <td>{product.product_name}</td>
                          <td>{product.description}</td>
                          <td>{product.product_price}</td>
                          <td>{product.product_quantity}</td>
                          <td>{product.manufacturing}</td>
                          <td>{product.expiry}</td>
                          <td>{product.discount} %</td>
                          <td>{product.DrugOrNot} </td>
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></div>
                          </div></td>
                        </tr>
                      ))}
                    </> : <>

                    </>
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade text-light" id="orders" role="tabpanel" aria-labelledby="list-orders-list">
              <h2 className='p-2'>|| Orders ||</h2>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Product Id</th>
                      <th scope="col">User ID</th>
                      <th scope="col">User Role</th>
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
                        <th scope="row">{order.id}</th>
                        <td>{order.product_id}</td>
                        <td>{order.user_id}</td>
                        <td>{order.role}</td>
                        <td>{order.order_date}</td>
                        <td>{order.payment_type}</td>
                        <td>{order.payment_status}</td>
                        <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status}</td>
                        <td>
                          {/* {order.expected_delivery_date === null ? */}
                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            {order.expected_delivery_date}
                            <input
                              className='m-2 p-1'
                              type="date"
                              style={dateStyle}
                              name='expected_delivery_date'
                              placeholder={order.expected_delivery_date}
                              onChange={handleInput}
                              onClick={() => updateDeliveryDate(order.id)}
                            />
                            <br />
                          </div>
                          {/* :
                            <div>{order.expected_delivery_date}
                              <button className='btn btn-warning'>Change</button>
                            </div>
                          } */}

                        </td>
                        <td> <Link to={`/superadmin/orders/${order.id}/${order.user_id}/${order.product_id}`}><div className=" m-1" style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg></div></Link></td>

                        {/* <Link to={`/superadmin/orders/customer/${order.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> </td> */}

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade text-light" id="appoiments" role="tabpanel" aria-labelledby="list-appoiments-list">
              <h2 className='p-2'>|| Appoiments ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Patient by Phone Number here</p>
                <input className="form-control" name='input' onChange={handlePatientFilter} placeholder="Search User Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchPatient.length !== 0 && (
                <div className="container text-dark " style={renDataStyle}>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Doctor Id</th>
                        <th scope="col">User ID</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Clinic ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Patient Ph No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>

                      </tr>
                    </thead>
                    <tbody>
                      {searchPatient.map((appoiment, index) => (
                        <tr key={index}>
                          <th scope="row">{appoiment.id}</th>
                          <td>{appoiment.doctor_id}</td>
                          <td>{appoiment.user_id}</td>
                          <td>{appoiment.role}</td>
                          <td>{appoiment.clinic_id}</td>
                          <td>{appoiment.name}</td>
                          <td>{appoiment.ph_number}</td>
                          <td>{appoiment.appoint_date}</td>
                          <td>{appoiment.appoint_time}</td>
                          <td onClick={() => updateStatus(appoiment.id)} style={{ cursor: 'pointer', color: 'blue' }} >{appoiment.status}</td>
                          {/* <td>
                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            {order.expected_delivery_date}
                            <input
                              className='m-2 p-1'
                              type="date"
                              style={dateStyle}
                              name='expected_delivery_date'
                              placeholder={order.expected_delivery_date}
                              onChange={handleInput}
                              onClick={() => updateDeliveryDate(order.id)}
                            />
                            <br />
                          </div>
                        </td>
                        <td> <Link to={`/superadmin/orders/${order.id}/${order.user_id}/${order.product_id}`}><div className=" m-1" style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" width="3w" height="3vh" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg></div></Link></td> */}

                          {/* <Link to={`/superadmin/orders/customer/${order.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> </td> */}

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            <div className="tab-pane fade text-light" id="labbokking" role="tabpanel" aria-labelledby="list-appoiments-list">
              <h2 className='p-2'>|| Lab Bokking ||</h2>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Test Id</th>
                      <th scope="col">User ID</th>
                      <th scope="col">Clinic ID</th>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Patient Ph No</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Sample Collection</th>
                      <th scope="col">User Role</th>
                      <th scope="col">Actions</th>

                    </tr>
                  </thead>
                  <tbody>
                    {labbokking.map((lab, index) => (
                      <tr key={index}>
                        <th scope="row">{lab.id}</th>
                        <td>{lab.Test_id}</td>
                        <td>{lab.user_id}</td>
                        <td>{lab.clinic_id}</td>
                        <td>{lab.name}</td>
                        <td>{lab.ph_number}</td>
                        <td>{lab.appoint_date}</td>
                        <td>{lab.appoint_time}</td>
                        <td>{lab.sample_collection}</td>
                        <td>{lab.role}</td>
                        <td onClick={() => updateStatus(lab.id)} style={{ cursor: 'pointer', color: 'blue' }} >{lab.LabTestStatus}</td>
                        {/* <td>
                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            {order.expected_delivery_date}
                            <input
                              className='m-2 p-1'
                              type="date"
                              style={dateStyle}
                              name='expected_delivery_date'
                              placeholder={order.expected_delivery_date}
                              onChange={handleInput}
                              onClick={() => updateDeliveryDate(order.id)}
                            />
                            <br />
                          </div>
                        </td>
                        <td> <Link to={`/superadmin/orders/${order.id}/${order.user_id}/${order.product_id}`}><div className=" m-1" style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" width="3w" height="3vh" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg></div></Link></td> */}

                        {/* <Link to={`/superadmin/orders/customer/${order.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> </td> */}

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="list-users" role="tabpanel" aria-labelledby="list-users-list">
              <h2 className='p-2'>|| Users ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search User by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleUserFilter} placeholder="Search User Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
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
                          <td> <div className="btn btn-danger">Delete</div> <div className="btn btn-warning">Update</div> </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
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
                        <td> <Link to={`/superadmin/orders/order/${payment.order_id}`}><button className="btn btn-info m-1">View Order</button></Link>
                          <Link to={`/superadmin/orders/customer/${payment.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-pane fade  text-light" id="serviceprovider" role="tabpanel" aria-labelledby="list-serviceprovider-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Service Provider ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <div className="list-group shadow" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                  <Link to="#service-provider" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">New Service Provider </Link>
                  <Link to="#service-provider" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">All Service Provider</Link>
                </div>
                <div className="list-group shadow m-3" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                  <Link to="#medicineshop" className="list-group-item list-group-item-action active  list-group-item-info" id="list-medicineshop-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Medicine Shop</Link>
                  <Link to="#doctors" className="list-group-item list-group-item-action   list-group-item-info" id="list-doctors-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Doctors</Link>
                  <Link to="#clinics" className="list-group-item list-group-item-action   list-group-item-info" id="list-clinics-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Clinics</Link>
                  <Link to="#labs" className="list-group-item list-group-item-action   list-group-item-info" id="list-labs-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Labs</Link>
                </div>
                <div id='medicineshop'>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col"> Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Role</th>
                        <th scope="col">Permission</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subAdmins.map((subadmin, index) => (
                        <tr key={index}>
                          <th scope="row">{subadmin.id}</th>
                          <td>{subadmin.name}</td>
                          <td>{subadmin.phone}</td>
                          <td>{subadmin.role}</td>
                          <td onClick={() => updateSubAdminStatus(subadmin.id)} style={{ cursor: 'pointer', color: 'blue' }} >{subadmin.permission}</td>
                          <td> <button className="btn btn-info m-1">View Licence</button>
                            <Link to={`/superadmin/subadmin/profile/${subadmin.id}`}> <div className="btn btn-info m-1">View Profile</div></Link>
                            <Link to={`/superadmin/subadmin/products/${subadmin.id}`}> <div className="btn btn-info m-1">View Products</div></Link>
                            <Link to={`/superadmin/subadmin/orders/${subadmin.id}`}> <div className="btn btn-info m-1">View Orders</div></Link>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="partner" role="tabpanel" aria-labelledby="list-partner-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>||  Partner ||</h2> <Link to='addnew/partner'><button className='btn btn-primary mx-3 my-2' >Add New Partner</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <div className="list-group shadow" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                  <Link to="#partner" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">All Partner </Link>
                  <Link to="#newpartner" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">New Partner</Link>
                </div>
                <div id='partner'>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col"> Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Aadhaar Card</th>
                        <th scope="col">Pan Card</th>
                        <th scope="col">Permission</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partners.map((partner, index) => (
                        <tr key={index}>
                          <th scope="row">{partner.id}</th>
                          <td>{partner.name}</td>
                          <td>{partner.ph_num}</td>
                          <td>{partner.aadhaar}</td>
                          <td>{partner.pan}</td>
                          <td onClick={() => updatePartnerStatus(partner.id)} style={{ cursor: 'pointer', color: 'blue' }} >{partner.permission}</td>
                          <td>
                            <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(partner.AadhaarCardImageID)}>View Aadhaar Card</button>
                            <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(partner.PanCardImageID)}>View Pan Card</button>

                          </td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="partner-commission" role="tabpanel" aria-labelledby="list-partner-commission-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>||  Partner Commission ||</h2> <Link to='addnew/partner-commission'><button className='btn btn-primary mx-3 my-2' >Add New Partner Commission</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <div id='partner-commission'>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col"> Id</th>
                        <th scope="col">Service Type</th>
                        <th scope="col">Commission Type</th>
                        <th scope="col">Commission</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commissions.map((commission, index) => (
                        <tr key={index}>
                          <th scope="row">{commission.id}</th>
                          <td>{commission.service_type}</td>
                          <td>{commission.commision_type}</td>
                          <td>{commission.commision}</td>
                          <td>

                            <Link to={`/superadmin/update-commission/${commission.id}`}> <div className="btn btn-info m-1">Update Commission</div></Link>
                            <div className="btn btn-info m-1" onClick={() => DeleteCommission(commission.id)}>Delete Commission</div>

                          </td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="notification" role="tabpanel" aria-labelledby="list-notification-list">
              <h2 className='p-2'>|| Notification ||</h2>
              <div className="container text-dark" style={renDataStyle}>
                <NotificationComponent />
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="banner" role="tabpanel" aria-labelledby="list-notification-list">
              <h2 className='p-2'>|| Upload Banner ||</h2>
              <div className="container text-dark" style={renDataStyle}>
                <UploadBanner />
              </div>
            </div>
            <div className="tab-pane fade  text-light" id="coupon" role="tabpanel" aria-labelledby="list-coupon-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Coupons ||</h2> <Link to='addcoupon'><button className='btn btn-primary mx-3 my-2' >Add New</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col"> Id</th>
                      <th scope="col">Coupon Code</th>
                      <th scope="col">Discount Persentage </th>
                      <th scope="col">Starting Date</th>
                      <th scope="col">Expiry Date</th>
                      <th scope="col">Active</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coupons.map((coupon, index) => (
                      <tr key={index}>
                        <th scope="row">{coupon.id}</th>
                        <td>{coupon.coupon_code}</td>
                        <td>{coupon.discount_percentage}</td>
                        <td>{coupon.created_at}</td>
                        <td>{coupon.expiry_date}</td>
                        <td className='text-light'><span style={{ backgroundColor: 'red', padding: '5px', borderRadius: '9%' }}>{coupon.is_active}</span></td>
                        <td style={{ display: 'flex', justifyContent: 'center' }}>
                          <Link to={`addcoupon/${coupon.id}`}> <div className=" m-1" style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                          <Link > <div className=" m-1" onClick={() => deleteCoupon(coupon.id)} style={{ color: 'red' }}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg></div></Link>

                        </td>
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
