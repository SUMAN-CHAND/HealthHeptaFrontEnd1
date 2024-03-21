import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import NotificationComponent from '../NotificationComponent';
import '../Style.css';
import UploadBanner from '../UploadBanner';
import B2BDashboard from './B2BDashboard';
import axiosClient from '../../axiosClient';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';

export default function B2BHome() {
  //main for connecting backend with Session
  axiosClient.defaults.withCredentials = true;


  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const [appoiments, setAppoiments] = useState([]);
  const [payments, setPayments] = useState([]);
  const [subAdmins, setSubAdmin] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const location = useLocation();
  const [searchOrder, setSearchOrder] = useState([])
  const [searchSubAdmin, setSearchSubAdmin] = useState([])

  const [ind_product_Images, setInd_product_Images] = useState([]);
  const [searchValue, setSearchValue] = useState({
    input: ''
  })
  useEffect(() => {
    axiosClient.get(`/superadmin/b2b/home`)
      .then(response => {
        // Handle response
        setProducts(response.data[0]);
        setInd_product_Images(response.data[1]);
        setOrders(response.data[2]);
        setPayments(response.data[3]);
        setSubAdmin(response.data[4]);

        // console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [])
  const showCoupon = () => {
    axiosClient.get(`/superadmin/coupon`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setCoupons(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const deleteProduct = (product_id) => {
    const response = window.confirm("Are you sure to delete the Product?");
    if (response) {
      axiosClient.delete(`/superadmin/delete/${product_id}`)
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
  const deleteCoupon = (coupon_id) => {
    const response = window.confirm("Are you sure to delete the Coupon?");
    if (response) {
      axiosClient.delete(`/superadmin/delete/coupon/${coupon_id}`)
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
    axiosClient.post(`/superadmin/orders/accept/${orderId}`).then(response => {
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
    axiosClient.post(`/superadmin/orders/delivery/${orderId}`, values).then(response => {
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
      axiosClient.post(`/superadmin/subadmin/accept/${subAdminId}`).then(response => {
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
  const navigate = useNavigate();
  const toB2C = () => {
    navigate('/superadmin', { state: { loggedIn: true } });
  }

  const handleOrderFilter = (event) => {
    setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();

    const filtered = orders.filter((item) => {
      const phoneNumber = item.phone.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchOrder([]);
    } else {
      setSearchOrder(filtered);
    }
  };

  const handleServiceProviderFilter = (event) => {
    setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    const searchword = event.target.value.toLowerCase();
    const filtered = subAdmins.filter((item) => {
      const phoneNumber = item.phone.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchSubAdmin([]);
    } else {
      setSearchSubAdmin(filtered);
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
      <div className="row" style={{ height: '70vh', overflowX: 'hidden' }}>
        <div className="col-2 sub-admin-quicklink" style={{ borderRight: '2px solid black' }}>
          <div className="container mt-5" style={{ position: 'sticky', top: '50px' }}>
            <h5 style={quiceLink}>Quick Links</h5>
            <hr />
            <div className="list-group shadow m-3" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
              <span onClick={toB2C} className="list-group-item list-group-item-action list-group-item-info" style={{ cursor: 'pointer' }}>B2C </span>
              <Link className="list-group-item list-group-item-action active list-group-item-info">B2B</Link>
            </div>

            <div className="list-group shadow" id="list-tab" role="tablist">
              <Link to="#summary" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Summary</Link>
              <Link to="#list-products" className="list-group-item list-group-item-action  list-group-item-info" id="list-products-list" data-bs-toggle="list" role="tab" aria-controls="list-products">Products</Link>
              <Link to="#orders" className="list-group-item list-group-item-action  list-group-item-info" id="list-orders-list" data-bs-toggle="list" role="tab" aria-controls="list-orders">Orders</Link>
              <Link to="#payment" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link>
              <div class="dropdown">
                <button class="list-group-item list-group-item-action  list-group-item-info dropdown-toggle" id="list-serviceprovider-list" data-bs-toggle="dropdown" aria-expanded="false">
                  Service Provider
                </button>
                <ul class="dropdown-menu " style={{ backgroundColor: '#9eeaf9' }} aria-labelledby="dropdownMenuButton1">
                  <li><Link to="#doctors" className="list-group-item list-group-item-action  list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Doctors</Link></li>
                  <li><Link to="#pharmeasy" className="list-group-item list-group-item-action  list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Pharmeasy Shops</Link></li>
                  <li><Link to="#laboratory" className="list-group-item list-group-item-action  list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Laboratory</Link></li>
                  <li><Link to="#clinic" className="list-group-item list-group-item-action  list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Clinics</Link></li>
                  <li><Link to="#pendingserviceproviders" className="list-group-item list-group-item-action  list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Pending Service Provider</Link></li>
                </ul>
              </div>
              <Link to="#notification" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">New Order</Link>
              <Link to="#commission" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Commission</Link>
              <Link to="#banner" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Add Banner</Link>
              <Link to="#coupon" onClick={showCoupon} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Coupon</Link>
            </div>
          </div>
        </div>
        <div className="col-10" style={{ marginTop: '2vh' }}>
          <div className="tab-content shadow" id="nav-tabContent" style={{ backgroundColor: '#64B5F6', borderRadius: '5px' }} >
            <div className="tab-pane fade show active text-light" id="summary" role="tabpanel" aria-labelledby="list-summary-list">
              <h2 className='p-2'> || B2B Dashboard ||</h2>
              <div className="container text-dark " style={dashboardStyle}>
                <B2BDashboard />
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
                    <option selected value="select">Select One</option>
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
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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
                          <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                            <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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

              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Order by User Phone Number here</p>
                <input className="form-control" name='input' onChange={handleOrderFilter} placeholder="Search User Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  <thead className='thead-dark'>
                    <tr>
                      <th scope="col">Count</th>
                      <th scope="col">Order Id</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Service Provider Name</th>
                      <th scope="col">Order By</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Expected delivery date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Complete Payment</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchOrder.map((order, index) => (
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <th scope="row">{order.id}</th>
                        <td>{order.product_name}</td>
                        <td>{order.name}</td>
                        <td>{order.order_by}</td>
                        <td>{order.order_date.slice(0, 10)}</td>
                        <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status}</td>
                        <td>
                          {/* {order.expected_delivery_date === null ? */}
                          <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            {order.expected_delivery_date}
                            <br />
                          </div>
                        </td>
                        <td>{order.total_amount}({order.payment_type})</td>
                        <td>{order.payment_status}</td>
                        <td>
                          <Link to={`/superadmin/b2b/payment/complete/action/${order.id}/${order.sub_admin_id}`}>Complete Payment</Link>
                        </td>
                        <td>
                          {/* <Link to={`/superadmin/b2b/orders/${order.id}/${order.sub_admin_id}/${order.product_id}`}><div className=" m-1" style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" width="3w" height="3vh" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg></div></Link> */}

                          <Link to={`/superadmin/b2b/orders/action/${order.id}/${order.sub_admin_id}/${order.product_id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>
                          <Link to={`/superadmin/b2b/orders/${order.id}/${order.sub_admin_id}/${order.product_id}`}><GrView className='text-primary' style={{ width: '2vw', height: '2vh', fill: 'blue' }} /></Link>


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
                      <th scope="col">User Id</th>
                      <th scope="col">Order Id</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Paid Amount</th>
                      <th scope="col">Due Amount</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Payment Type</th>
                      <th scope="col">Complete the Payment </th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr key={index}>
                        <th scope="row">{payment.payment_id}</th>
                        <td>{payment.sub_admin_id}</td>
                        <td>{payment.order_id}</td>
                        <td>{payment.total_amount}</td>
                        <td>{payment.paid_amount}</td>
                        <td>{payment.due_amount}</td>
                        <td>{payment.payment_status}</td>
                        <td>{payment.payment_type}</td>
                        <td><Link to={`/superadmin/b2b/payment/complete/action/${payment.order_id}/${payment.sub_admin_id}`}>Complete Payment</Link></td>
                        <td> <Link to={`/superadmin/b2b/orders/${payment.order_id}/${payment.sub_admin_id}/${payment.product_id}`}><button className="btn btn-info m-1">View Order</button></Link>
                          {/* <Link to={`/superadmin/orders/customer/${payment.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-pane fade  text-light" id="doctors" role="tabpanel" aria-labelledby="list-service-provider-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Doctors ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Service Provider by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleServiceProviderFilter} placeholder="Search Service Provider Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>
                <div id='doctors'>
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
                    {searchSubAdmin.length > 0 &&
                    <tbody>
                      {searchSubAdmin.filter(subadmin => subadmin.role === 'doctor').map((subadmin, index) => (
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
                    </tbody>}
                    {searchSubAdmin.length === 0 &&
                    <tbody>
                      {subAdmins.filter(subadmin => subadmin.role === 'doctor').map((subadmin, index) => (
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
                    </tbody>}
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="pharmeasy" role="tabpanel" aria-labelledby="list-service-provider-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Pharmeasy Shops ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Service Provider by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleServiceProviderFilter} placeholder="Search Service Provider Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>

                <div id='pharmeasy'>
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
                    {searchSubAdmin.length > 0 &&
                    <tbody>
                      {searchSubAdmin.filter(subadmin => subadmin.role === 'Medicine Shop').map((subadmin, index) => (
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
                    }
                    {searchSubAdmin.length === 0 &&
                    <tbody>
                      {subAdmins.filter(subadmin => subadmin.role === 'Medicine Shop').map((subadmin, index) => (
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
                    }
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="laboratory" role="tabpanel" aria-labelledby="list-service-provider-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| laboratory ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Service Provider by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleServiceProviderFilter} placeholder="Search Service Provider Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>

                <div id='pharmeasy'>
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
                    {searchSubAdmin.length > 0 &&
                    <tbody>
                      {searchSubAdmin.filter(subadmin => subadmin.role === 'Laboratory').map((subadmin, index) => (
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
                    }
                    {searchSubAdmin.length === 0 &&
                    <tbody>
                      {subAdmins.filter(subadmin => subadmin.role === 'Laboratory').map((subadmin, index) => (
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
                    }
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="clinic" role="tabpanel" aria-labelledby="list-service-provider-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Clinics ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Service Provider by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleServiceProviderFilter} placeholder="Search Service Provider Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>

                <div id='clinic'>
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
                    {searchSubAdmin.length > 0 &&
                      <tbody>
                        {searchSubAdmin.filter(subadmin => subadmin.role === 'Clinic').map((subadmin, index) => (
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
                    }
                    {searchSubAdmin.length === 0 &&
                      <tbody>
                        {subAdmins.filter(subadmin => subadmin.role === 'Clinic').map((subadmin, index) => (
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
                    }
                  </table>
                </div>

              </div>
            </div>
            <div className="tab-pane fade  text-light" id="pendingserviceproviders" role="tabpanel" aria-labelledby="list-service-provider-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Clinics ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Service Provider by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleServiceProviderFilter} placeholder="Search Service Provider Phone number" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchSubAdmin.length > 0 &&
                <div className="container text-dark" style={renDataStyle}>

                  <div id='clinic'>
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
                        {searchSubAdmin.filter(subadmin => subadmin.permission === 'Not_Approve').map((subadmin, index) => (
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

                </div>}
              {searchSubAdmin.length === 0 &&
                <div className="container text-dark" style={renDataStyle}>

                  <div id='clinic'>
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
                        {subAdmins.filter(subadmin => subadmin.permission === 'Not_Approve').map((subadmin, index) => (
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

                </div>}

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
                          <Link to={`addcoupon/${coupon.id}`}> <div className=" m-1" style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                          </svg></div></Link>
                          <Link > <div className=" m-1" onClick={() => deleteCoupon(coupon.id)} style={{ color: 'red' }}><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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
