import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import NotificationComponent from './NotificationComponent';
import Dashboard from './Dashboard';
import './Style.css';
import UploadBanner from './UploadBanner';
import axiosClient from '../axiosClient';
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from "react-icons/gr";
import Modal from 'react-modal';
import HashLoader from 'react-spinners/HashLoader';


export default function AdminHomePage() {
  //main for connecting backend with Session
  axiosClient.defaults.withCredentials = true;
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);
  const [appoiments, setAppoiments] = useState([]);
  const [labbooking, setLabbokking] = useState([]);
  const [payments, setPayments] = useState([]);
  const [subAdmins, setSubAdmin] = useState([]);
  const [partners, setPartner] = useState([]);
  const [employees, setB2bEmployee] = useState([]);
  const [deliveryPartners, setDeliveryPartner] = useState([]);
  const [commissions, setCommissions] = useState([]);
  const [deliveryCommissions, setDeliveryCommissions] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [searchUser, setSearchUser] = useState([])
  const [searchPatient, setSearchPatient] = useState([])
  const [searchOrder, setSearchOrder] = useState([])
  const navigate = useNavigate();
  const location = useLocation();

  const [searchLabBooking, setSearchlabBooking] = useState([])
  const [searchProduct, setSearchProduct] = useState([])
  const [searchPayment, setSearchPayment] = useState([])
  const [searchPartner, setSearchPartner] = useState([])
  const [searchEmployee, setSearchEmployee] = useState([])
  const [searchDeliveryPartner, setSearchDeliveryPartner] = useState([])


  const LogedIn = sessionStorage.getItem('LogedIn');
  const userId = sessionStorage.getItem('user_id');

  if (LogedIn === undefined || LogedIn === null) {
    return <Navigate to='/superadmin/login' />;
  }


  const [ind_product_Images, setInd_product_Images] = useState([]);

  const ShowProduct = () => {
    axiosClient.get(`/superadmin/product`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setProducts(response.data[0]);
          setInd_product_Images(response.data[1]);
          // loadImages();
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      })
  }
  useEffect(() => {
    axiosClient.get(`/superadmin/orders`)
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
  const showUser = () => {
    axiosClient.get(`/superadmin/user`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setUser(response.data)
        }
        // console.log(user);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showAppoiments = () => {
    axiosClient.get(`/superadmin/appoiments`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setAppoiments(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showLabbokking = () => {
    axiosClient.get(`/superadmin/labbokking`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setLabbokking(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }

  const showPayments = () => {
    axiosClient.get(`/superadmin/payments`)
      .then(response => {
        // Handle response
        if (response.data !== null) {
          setPayments(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showServiceProvider = () => {
    axiosClient.get(`/superadmin/service-provider`)
      .then(response => {
        // Handle response
        setSubAdmin(response.data)
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showPartner = () => {
    axiosClient.get(`/superadmin/partner`)
      .then(response => {
        // Handle response
        setPartner(response.data)
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showB2BEmployee = () => {
    axiosClient.get(`/superadmin/b2b/employee`)
      .then(response => {
        // Handle response
        setB2bEmployee(response.data)
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
  const showDeliveryPartner = () => {
    axiosClient.get(`/superadmin/delivery_partner`)
      .then(response => {
        // Handle response
        setDeliveryPartner(response.data)
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
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
  const showDeliveryPartnerCommission = () => {
    axiosClient.get(`/superadmin/delivery-partner-commissions`)
      .then(response => {
        // Handle response
        setDeliveryCommissions(response.data)
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }
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
  const DeleteCommission = (commission_id) => {
    const response = window.confirm("Are you sure to delete the Commission?");
    if (response) {
      axiosClient.delete(`/superadmin/delete/commission/${commission_id}`)
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
  const DeleteDeliveryCommission = (commission_id) => {
    const response = window.confirm("Are you sure to delete the Commission?");
    if (response) {
      axiosClient.delete(`/superadmin/delete/delivery/commission/${commission_id}`)
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
  }

  const [medicineType, setMedicineType] = useState({
    type: 'select'
  })

  const handleMedicineType = (event) => {
    setMedicineType(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }
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
  };

  const updatePartnerStatus = (partner_id) => {
    const response = window.confirm("Are you sure to give the Permission?");
    if (response) {
      axiosClient.post(`/superadmin/partner/accept/${partner_id}`).then(response => {
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
  const updateEmployeeStatus = (emp_id) => {
    const response = window.confirm("Are you sure to give the Permission?");
    if (response) {
      axiosClient.post(`/superadmin/b2b/employee/accept/${emp_id}`).then(response => {
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
  const updateDeliveryPartnerStatus = (delivery_partner_id) => {
    const response = window.confirm("Are you sure to give the Permission?");
    if (response) {
      axiosClient.post(`/superadmin/delivery_partner/accept/${delivery_partner_id}`).then(response => {
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
  const ViewAadhaar = (AadhaarCardImageID) => {
    navigate(`/superadmin/image/${AadhaarCardImageID}`)
  }
  const [searchValue, setSearchValue] = useState({
    input: ''
  })
  const [searchProductValue, setSearchProductValue] = useState({
    input: ''
  })
  const [searchOrderValue, setSearchOrderValue] = useState({
    input: ''
  })
  const [searchAppoimentValue, setSearchAppoimentValue] = useState({
    input: ''
  })
  const [searchLabBookingValue, setSearchLabBookingValue] = useState({
    input: ''
  })
  const [searchUserValue, setSearchUserValue] = useState({
    input: ''
  })
  const [searchPaymentValue, setSearchPaymentValue] = useState({
    input: ''
  })
  const [searchPartnerValue, setSearchPartnerValue] = useState({
    input: ''
  })
  const [searchEmployeeValue, setSearchEmployeeValue] = useState({
    input: ''
  })
  const [searchDPartnerValue, setSearchDPartnerValue] = useState({
    input: ''
  })

  const [Loading, setLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [appoimentLoading, setAppoimentLoading] = useState(false);
  const [labBookingLoading, setLabBookingLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [partnerLoading, setPartnerLoading] = useState(false);
  const [employeeLoading, setEmployeeLoading] = useState(false);
  const [dPartnerLoading, setDPartnerLoading] = useState(false);


  const handleUserFilter = (event) => {
    setSearchUserValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();

    const filtered = user.filter((item) => {
      const phoneNumber = item.phone.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchUser([]);
      setUserLoading(false);
    } else {
      setSearchUser(filtered);
      setUserLoading(true);
    }
  };
  const handlePatientFilter = (event) => {
    setSearchAppoimentValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();

    const filtered = appoiments.filter((item) => {
      const phoneNumber = item.ph_number.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchPatient([]);
      setAppoimentLoading(false);
    } else {
      setSearchPatient(filtered);
      setAppoimentLoading(true);
    }
  };
  const handleLabBookingFilter = (event) => {
    setSearchLabBookingValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();

    const filtered = labbooking.filter((item) => {
      const phoneNumber = item.ph_number.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchlabBooking([]);
      setLabBookingLoading(false)
    } else {
      setSearchlabBooking(filtered);
      setLabBookingLoading(true)
    }
  };

  const handleOrderFilter = (event) => {
    setSearchOrderValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();
    const filtered = orders.filter((item) => {
      const phoneNumber = item.phone.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchOrder([]);
      setOrderLoading(false)
    } else {
      setSearchOrder(filtered);
      setOrderLoading(true)
    }
  };
  const handleProductFilter = (event) => {
    setSearchProductValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();
    const filtered = products.filter((item) => {
      const productName = item.product_name.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return productName.includes(search);
    });
    if (searchword === "") {
      setSearchProduct([]);
      setProductLoading(false)
    } else {
      setSearchProduct(filtered);
      setProductLoading(true)

    }
  };

  const handlePaymentFilter = (event) => {
    setSearchPaymentValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();
    const filtered = payments.filter((item) => {
      const phoneNumber = item.phone.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchPayment([]);
      setPaymentLoading(false);
    } else {
      setSearchPayment(filtered);
      setPaymentLoading(true);
    }
  };

  const handlePartnerFilter = (event) => {
    setSearchPartnerValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    const searchword = event.target.value.toLowerCase();
    const filtered = partners.filter((item) => {
      const phoneNumber = item.ph_num.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchPartner([]);
      setPartnerLoading(false);
    } else {
      setSearchPartner(filtered);
      setPartnerLoading(true);
    }
  };
  const handleEmployeeFilter = (event) => {
    setSearchEmployeeValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    const searchword = event.target.value.toLowerCase();
    const filtered = employees.filter((item) => {
      const phoneNumber = item.ph_num.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchEmployee([]);
      setEmployeeLoading(false);
    } else {
      setSearchEmployee(filtered);
      setEmployeeLoading(true);

    }
  };
  const handleDeliveryPartnerFilter = (event) => {
    setSearchDPartnerValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

    const searchword = event.target.value.toLowerCase();
    const filtered = deliveryPartners.filter((item) => {
      const phoneNumber = item.ph_num.toString().toLowerCase();
      const search = searchword.toLowerCase();
      return phoneNumber.includes(search);
    });
    if (searchword === "") {
      setSearchDeliveryPartner([]);
      setDPartnerLoading(false);
    } else {
      setSearchDeliveryPartner(filtered);
      setDPartnerLoading(true);
    }
  };

  // const [showBanner, setShowbanner] = useState(false);

  const setAssignPinCode = (id) => {
    navigate(`/superadmin/assign/pincode/${id}`)
  }

  const renDataStyle = {
    backgroundColor: 'rgb(237 237 237)',
    display: 'flex',
    paddingTop: '1vh',
    flexDirection: 'column',
    overflowX: 'auto'
  }
  const dashboardStyle = {
    backgroundColor: 'rgb(237 237 237)',
    display: 'flex',
    height: '100%',
    width: '100%',
    paddingTop: '1vh',
    flexDirection: 'column'
  }

  const quiceLink = {
    backgroundColor: '#055160',
    padding: '5px',
    color: 'white',
    borderRadius: '5px'
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
    },
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
              {/* <Link to="#orders" className="list-group-item list-group-item-action  list-group-item-info" id="list-orders-list" data-bs-toggle="list" role="tab" aria-controls="list-orders">Orders</Link> */}
              <div class="dropdown">
                <button class="list-group-item list-group-item-action  list-group-item-info dropdown-toggle" id="list-partner-list" data-bs-toggle="dropdown" aria-expanded="false">
                  Orders
                </button>
                <ul class="dropdown-menu info" style={{ backgroundColor: '#9eeaf9' }} aria-labelledby="dropdownMenuButton1">
                  <li><Link to="#orderspending" className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Pending Orders</Link></li>
                  <li><Link to="#orderscomplete" className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Completed Orders</Link></li>
                </ul>
              </div>
              <Link to="#list-products" onClick={ShowProduct()} className="list-group-item list-group-item-action  list-group-item-info" id="list-products-list" data-bs-toggle="list" role="tab" aria-controls="list-products">Products</Link>
              <Link to="#appoiments" onClick={showAppoiments} className="list-group-item list-group-item-action  list-group-item-info" id="list-appoiments-list" data-bs-toggle="list" role="tab" aria-controls="list-appoiments">Appoiments</Link>
              <Link to="#labbokking" onClick={showLabbokking} className="list-group-item list-group-item-action  list-group-item-info" id="list-appoiments-list" data-bs-toggle="list" role="tab" aria-controls="list-appoiments">Lab Bookings</Link>
              <Link to="#list-users" onClick={showUser} className="list-group-item list-group-item-action  list-group-item-info" id="list-users-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Users</Link>
              {/* <Link to="#payment" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">Payments</Link> */}
              <div class="dropdown">
                <button class="list-group-item list-group-item-action  list-group-item-info dropdown-toggle" id="list-partner-list" data-bs-toggle="dropdown" aria-expanded="false">
                  Payments
                </button>
                <ul class="dropdown-menu info" style={{ backgroundColor: '#9eeaf9' }} aria-labelledby="dropdownMenuButton1">
                  <li><Link to="#paymentcomplete" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Completed Payment</Link></li>
                  <li><Link to="#paymentpending" onClick={showPayments} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Pending Payment</Link></li>
                </ul>
              </div>
              {/* <Link to="#serviceprovider" onClick={showServiceProvider} className="list-group-item list-group-item-action list-group-item-info" id="list-serviceprovider-list" data-bs-toggle="list" role="tab" aria-controls="list-serviceprovider">Service Provider</Link> */}
              {/* <Link to="#partner" onClick={showPartner} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Partner</Link> */}
              <div class="dropdown">
                <button class="list-group-item list-group-item-action  list-group-item-info dropdown-toggle" id="list-partner-list" data-bs-toggle="dropdown" aria-expanded="false">
                  Partner
                </button>
                <ul class="dropdown-menu" style={{ backgroundColor: '#9eeaf9' }} aria-labelledby="dropdownMenuButton1">
                  <li><Link to="#partnerapproved" onClick={showPartner} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Approved Partner</Link></li>
                  <li><Link to="#partnerpending" onClick={showPartner} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Pending Partner</Link></li>
                  <li><Link to="#partner-commission" onClick={showPartnerCommission} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Partner Commission</Link></li>
                </ul>
              </div>
              <Link to="#b2bemployee" onClick={showB2BEmployee} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Employee</Link>
              <Link to="#delivery-partner" onClick={showDeliveryPartner} className="list-group-item list-group-item-action  list-group-item-info" id="list-partner-list" data-bs-toggle="list" role="tab" aria-controls="list-partner">Delivery Partner</Link>
              <Link to="#delivery-partner-commission" onClick={showDeliveryPartnerCommission} className="list-group-item list-group-item-action  list-group-item-info" id="list-delivery-partner-commission-list" data-bs-toggle="list" role="tab" aria-controls="list-partner-commission">Delivery Partner Commission</Link>
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
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Product by Product Name Here</p>
                <input className="form-control" name='input' onChange={handleProductFilter} placeholder="Search Product Name Here" value={searchProductValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchProduct.length > 0 &&
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
                        <th scope="col">Count</th>
                        <th scope="col">Id</th>
                        <th scope="col">image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Whose Product </th>
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
                        {searchProduct.map((product, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
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
                            <td>{product.productOf}</td>
                            <td>{product.product_quantity}</td>
                            <td>{product.manufacturing.slice(0, 10)}</td>
                            <td>{product.expiry.slice(0, 10)}</td>
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
                        {searchProduct.map((product, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
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
                            <td>{product.productOf}</td>
                            <td>{product.product_quantity}</td>
                            <td>{product.manufacturing.slice(0, 10)}</td>
                            <td>{product.expiry.slice(0, 10)}</td>
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
                        {searchProduct.filter(productf => productf.DrugOrNot === 'drug').map((product, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
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
                            <td>{product.productOf}</td>
                            <td>{product.product_quantity}</td>
                            <td>{product.manufacturing.slice(0, 10)}</td>
                            <td>{product.expiry.slice(0, 10)}</td>
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
                        {searchProduct.filter(productf => productf.DrugOrNot === 'otc').map((product, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
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
                            <td>{product.productOf}</td>
                            <td>{product.product_quantity}</td>
                            <td>{product.manufacturing.slice(0, 10)}</td>
                            <td>{product.expiry.slice(0, 10)}</td>
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
              }
              {
                searchProduct.length === 0 && <>
                  {productLoading ? <>
                    <p style={{ padding: '15px' }}>No data found for this product name!!</p>
                  </> : <>
                    <p style={{ padding: '15px' }}>Search Product Details through Product name!!</p>

                  </>
                  }
                </>
              }
            </div>
            <div className="tab-pane fade text-light" id="orderspending" role="tabpanel" aria-labelledby="list-orders-list">
              <h2 className='p-2'>|| Pending Orders ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Order by User Phone Number here</p>
                <input className="form-control" name='input' onChange={handleOrderFilter} placeholder="Search User Phone number" value={searchOrderValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  {searchOrder.length > 0 &&
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col">Count</th>
                        <th scope="col">OrderId</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Coustomer Name(Phone Number)</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Order From</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment Mood</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Status</th>
                        <th scope="col">Expected delivery date</th>
                        <th scope="col">Complete Payment</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>}
                  {searchOrder.length > 0 &&
                    <tbody>
                      {searchOrder.filter(order => order.status === 'pending').map((order, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <th scope="row">{order.id}</th>
                          <td>{order.product_name}</td>
                          <td>{order.name}({order.phone})</td>
                          <td>{order.role}</td>
                          <td>{order.order_date}</td>
                          <td>{order.subadmin_name}</td>
                          <td>{order.order_date.slice(0, 10)}</td>
                          <td>{order.payment_type}</td>
                          <td>{order.payment_status}</td>
                          <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status} <br />{order.orderAcceptedBy}</td>
                          <td>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                              {order.expected_delivery_date.slice(0, 10)}
                              <br />
                            </div>
                          </td>
                          <td>
                            <Link to={`/superadmin/payment/complete/action/${order.id}/${order.user_id}`}>Complete Payment</Link>
                          </td>
                          <td className='flex items-center justify-center'>
                            <Link to={`/superadmin/orders/action/${order.id}/${order.user_id}/${order.product_id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>
                            <Link to={`/superadmin/orders/${order.id}/${order.user_id}`}><GrView className='text-primary' style={{ width: '2vw', height: '2vh', fill: 'blue' }} /></Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  }
                  {/* {searchOrder.length === 0 &&
                    <tbody>
                      {orders.filter(order => order.status === 'pending').map((order, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <th scope="row">{order.id}</th>
                          <td>{order.product_name}</td>
                          <td>{order.name}({order.phone})</td>
                          <td>{order.role}</td>
                          <td>{order.order_date}</td>
                          <td>{order.subadmin_name}</td>
                          <td>{order.order_date.slice(0, 10)}</td>
                          <td>{order.payment_type}</td>
                          <td>{order.payment_status}</td>
                          <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status} <br />{order.orderAcceptedBy}</td>
                          <td>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                              {order.expected_delivery_date.slice(0, 10)}
                              <br />
                            </div>
                          </td>
                          <td>
                            <Link to={`/superadmin/payment/complete/action/${order.id}/${order.user_id}`}>Complete Payment</Link>
                          </td>
                          <td className='flex items-center justify-center'>
                            <Link to={`/superadmin/orders/action/${order.id}/${order.user_id}/${order.product_id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>
                            <Link to={`/superadmin/orders/${order.id}/${order.user_id}`}><GrView className='text-primary' style={{ width: '2vw', height: '2vh', fill: 'blue' }} /></Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  } */}

                </table>
                {searchOrder.length === 0 && <>
                  {orderLoading ? <>
                    <p style={{ padding: '15px' }}>No data found for Phone Number!!</p>
                  </> : <>
                    <p style={{ padding: '15px' }}>Search Order Details through User Phone Number!!</p>

                  </>
                  }
                </>}
              </div>
            </div>
            <div className="tab-pane fade text-light" id="orderscomplete" role="tabpanel" aria-labelledby="list-orders-list">
              <h2 className='p-2'>|| Accepted Orders ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Order by User Phone Number here</p>
                <input className="form-control" name='input' onChange={handleOrderFilter} placeholder="Search User Phone number" value={searchOrderValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark " style={renDataStyle}>
                <table className="table table-striped">
                  {searchOrder.length > 0 &&
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col">Count</th>
                        <th scope="col">OrderId</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Coustomer Name(Phone Number)</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Order From</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment Mood</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Status</th>
                        <th scope="col">Expected delivery date</th>
                        <th scope="col">Complete Payment</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>}
                  {searchOrder.length > 0 &&
                    <tbody>
                      {searchOrder && searchOrder.filter(order => order.status === 'completed').map((order, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <th scope="row">{order.id}</th>
                          <td>{order.product_name}</td>
                          <td>{order.name}({order.phone})</td>
                          <td>{order.role}</td>
                          {/* <td>{order.order_date}</td> */}
                          <td>{order.subadmin_name}</td>
                          <td>{order.order_date.slice(0, 10)}</td>
                          <td>{order.payment_type}</td>
                          <td>{order.payment_status}</td>
                          <td onClick={() => updateStatus(order.id)} style={{ cursor: 'pointer', color: 'blue' }} >{order.status} <br />{order.orderAcceptedBy}</td>
                          <td>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                              {order.expected_delivery_date.slice(0, 10)}
                              <br />
                            </div>
                          </td>
                          <td>
                            <Link to={`/superadmin/payment/complete/action/${order.id}/${order.user_id}`}>Complete Payment</Link>
                          </td>
                          <td className='flex items-center justify-center'>
                            <Link to={`/superadmin/orders/action/${order.id}/${order.user_id}/${order.product_id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>
                            <Link to={`/superadmin/orders/${order.id}/${order.user_id}`}><GrView className='text-primary' style={{ width: '2vw', height: '2vh', fill: 'blue' }} /></Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  }


                </table>
                {searchOrder.length === 0 && <>
                  {orderLoading ? <>
                    <p style={{ padding: '15px' }}>No data found for Phone Number!!</p>
                  </> : <>
                    <p style={{ padding: '15px' }}>Search Order Details through User Phone Number!!</p>

                  </>
                  }
                </>}
              </div>
            </div>
            <div className="tab-pane fade text-light" id="appoiments" role="tabpanel" aria-labelledby="list-appoiments-list">
              <h2 className='p-2'>|| Appoiments ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Patient by Phone Number here</p>
                <input className="form-control" name='input' onChange={handlePatientFilter} placeholder="Search User Phone number" value={searchAppoimentValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchPatient.length !== 0 && (
                <div className="container text-dark " style={renDataStyle}>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Doctor Name(Doctor ID)</th>
                        <th scope="col">User Name (User ID)</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Clinic Name(Clinic ID)</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Patient Ph No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>

                      </tr>
                    </thead>
                    <tbody>
                      {searchPatient.map((appoiment, index) => (
                        <tr key={index}>
                          <th scope="row">{appoiment.a_id}</th>
                          <td>{appoiment.doc_name}({appoiment.doctor_id})</td>
                          <td>{appoiment.name}({appoiment.user_id})</td>
                          <td>{appoiment.role}</td>
                          <td>{appoiment.clinic}({appoiment.clinic_id})</td>
                          <td>{appoiment.name}</td>
                          <td>{appoiment.ph_number}</td>
                          <td>{appoiment.appoint_date}</td>
                          <td>{appoiment.appoint_time}</td>
                          <td style={{ cursor: 'pointer', color: 'blue' }} >{appoiment.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {searchPatient.length === 0 && <>
                {appoimentLoading ? <>
                  <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                </> : <>
                  <p style={{ padding: '15px' }}>Search Appoiment Details through User Phone Number!!</p>

                </>
                }
              </>}
            </div>
            <div className="tab-pane fade text-light" id="labbokking" role="tabpanel" aria-labelledby="list-appoiments-list">
              <h2 className='p-2'>|| Lab Booking ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Patient by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleLabBookingFilter} placeholder="Search User Phone number" value={searchLabBookingValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchLabBooking.length > 0 &&
                <div className="container text-dark " style={renDataStyle}>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col">Count</th>
                        <th scope="col">Lab Booking Id</th>
                        <th scope="col">Test Name (Test Id)</th>
                        <th scope="col">User Name (User Id) </th>
                        <th scope="col">Clinic Name (Clinic Id)</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Patient Ph No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Sample Collection</th>
                        <th scope="col">User Role</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      {searchLabBooking.map((lab, index) => (
                        <tr key={index}>
                          <th scope="row">{index}</th>
                          <th scope="row">{lab.id}</th>
                          <td>{lab.Test_name}({lab.Test_id})</td>
                          <td>{lab.username}({lab.user_id})</td>
                          <td>{lab.sname}({lab.clinic_id})</td>
                          <td>{lab.name}</td>
                          <td>{lab.ph_number}</td>
                          <td>{lab.appoint_date}</td>
                          <td>{lab.appoint_time}</td>
                          <td>{lab.sample_collection}</td>
                          <td>{lab.role}</td>
                          <td onClick={() => updateStatus(lab.id)} style={{ cursor: 'pointer', color: 'blue' }} >{lab.LabTestStatus}</td>
                          <td >

                            <Link to={`/superadmin/labtest/action/${lab.id}`}><FaRegEdit style={{ width: '2vw', height: '2vh', fill: '#ffc107' }} /></Link>

                          </td>


                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
              {searchLabBooking.length === 0 && <>
                {labBookingLoading ? <>
                  <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                </> : <>
                  <p style={{ padding: '15px' }}>Search Appoiment Details through User Phone Number!!</p>
                </>
                }
              </>}
            </div>
            <div className="tab-pane fade  text-light" id="list-users" role="tabpanel" aria-labelledby="list-users-list">
              <h2 className='p-2'>|| Users ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search User by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleUserFilter} placeholder="Search User Phone number" value={searchUserValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
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
              {searchUser.length === 0 && <>
                {userLoading ? <>
                  <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                </> : <>
                  <p style={{ padding: '15px' }}>Search User Details through User Phone Number!!</p>
                </>
                }
              </>}
              {searchUser.length === 0 &&
                <>
                  {!userLoading ? <>
                    <div className="container text-dark" style={renDataStyle}>
                      <div>
                        <p>Here Some User whose Orders  more then 5 times </p>

                      </div>
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
                          {user.filter(userf => userf.OrderCount >= 5).map((user, index) => (
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
                  </> : <></>}
                </>
              }

            </div>
            <div className="tab-pane fade  text-light" id="paymentcomplete" role="tabpanel" aria-labelledby="list-payments-list">
              <h2 className='p-2'>||Completed Payments ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Payments by User Phone Number here</p>
                <input className="form-control" name='input' onChange={handlePaymentFilter} placeholder="Search User Phone number" value={searchPaymentValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchPayment.length > 0 &&
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
                        <th scope="col">Payment Accepted</th>
                        <th scope="col">Complete Payment</th>
                        <th scope="col">Payment Accepted User Id</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchPayment.filter(paymentf => paymentf.payment_status === 'completed').map((payment, index) => (
                        <tr key={index}>
                          <th scope="row">{payment.payment_id}</th>
                          <td>{payment.name}(id : {payment.user_id}) <br />(PH : {payment.phone})</td>
                          <td>{payment.order_id}</td>
                          <td>{payment.total_amount}</td>
                          <td>{payment.payment_status}</td>
                          <td>{payment.payment_type}</td>
                          <td>{payment.paymentacceptedby}</td>
                          <td>{payment.paymentacceptedUserId}</td>
                          <td><Link to={`/superadmin/payment/complete/action/${payment.order_id}/${payment.user_id}`}>Complete Payment</Link></td>
                          <td>
                            <Link to={`/superadmin/orders/${payment.order_id}/${payment.user_id}`}><button className="btn btn-info m-1">View Order</button></Link>
                            {/* <Link to={`/superadmin/orders/customer/${payment.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
              {searchPayment.length === 0 && <>
                {paymentLoading ? <>
                  <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                </> : <>
                  <p style={{ padding: '15px' }}>Search Payment Details through User Phone Number!!</p>
                </>
                }
              </>}
            </div>
            <div className="tab-pane fade  text-light" id="paymentpending" role="tabpanel" aria-labelledby="list-payments-list">
              <h2 className='p-2'>|| Pending Payments ||</h2>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Payments by User Phone Number here</p>
                <input className="form-control" name='input' onChange={handlePaymentFilter} placeholder="Search User Phone number" value={searchPaymentValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              {searchPayment.length > 0 &&
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
                        <th scope="col">Payment Accepted</th>
                        <th scope="col">Complete Payment</th>
                        <th scope="col">Payment Accepted User Id</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchPayment.filter(paymentf => paymentf.payment_status === 'pending').map((payment, index) => (
                        <tr key={index}>
                          <th scope="row">{payment.payment_id}</th>
                          <td>{payment.name}(id : {payment.user_id}) <br />(PH : {payment.phone})</td>
                          <td>{payment.order_id}</td>
                          <td>{payment.total_amount}</td>
                          <td>{payment.payment_status}</td>
                          <td>{payment.payment_type}</td>
                          <td>{payment.paymentacceptedby}</td>
                          <td>{payment.paymentacceptedUserId}</td>
                          <td><Link to={`/superadmin/payment/complete/action/${payment.order_id}/${payment.user_id}`}>Complete Payment</Link></td>
                          <td>
                            <Link to={`/superadmin/orders/${payment.order_id}/${payment.user_id}`}><button className="btn btn-info m-1">View Order</button></Link>
                            {/* <Link to={`/superadmin/orders/customer/${payment.user_id}`}> <div className="btn btn-info m-1">View User</div></Link> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
              {searchPayment.length === 0 && <>
                {paymentLoading ? <>
                  <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                </> : <>
                  <p style={{ padding: '15px' }}>Search Payment Details through User Phone Number!!</p>
                </>
                }
              </>}
            </div>

            {/* <div className="tab-pane fade  text-light" id="serviceprovider" role="tabpanel" aria-labelledby="list-serviceprovider-list">
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
            </div> */}
            <div className="tab-pane fade  text-light" id="partnerpending" role="tabpanel" aria-labelledby="list-partner-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Pending  Partner ||</h2> <Link to='addnew/partner'><button className='btn btn-primary mx-3 my-2' >Add New Partner</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Partner by Phone Number here</p>
                <input className="form-control" name='input' onChange={handlePartnerFilter} placeholder="Search Partner Phone number" value={searchPartnerValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>
                <div id='partner'>
                  {searchPartner.length > 0 &&
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
                        {searchPartner.filter(partnerf => partnerf.permission === 'Pending').map((partner, index) => (
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
                  }
                  {searchPartner.length === 0 && <>
                    {partnerLoading ? <>
                      <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                    </> : <>
                      {/* <p style={{ padding: '15px' }}>Search User Details through User Phone Number!!</p> */}
                    </>
                    }
                  </>}
                  {searchPartner.length === 0 && <>
                    {!partnerLoading ? <>
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
                          {partners.filter(partnerf => partnerf.permission === 'Pending').map((partner, index) => (
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
                    </> : <></>}
                  </>
                  }

                </div>
              </div>

            </div>
            <div className="tab-pane fade  text-light" id="partnerapproved" role="tabpanel" aria-labelledby="list-partnerapproved-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Approved Partner ||</h2> <Link to='addnew/partner'><button className='btn btn-primary mx-3 my-2' >Add New Partner</button></Link></span>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Partner by Phone Number here</p>
                <input className="form-control" name='input' onChange={handlePartnerFilter} placeholder="Search Partner Phone number" value={searchPartnerValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>

                <div id='partner'>
                  {searchPartner.length > 0 &&
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
                        {searchPartner.filter(partnerf => partnerf.permission === 'Approved').map((partner, index) => (
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
                  }
                  {searchPartner.length === 0 && <>
                    {partnerLoading ? <>
                      <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                    </> : <>
                      {/* <p style={{ padding: '15px' }}>Search User Details through User Phone Number!!</p> */}
                    </>
                    }
                  </>}
                  {searchPartner.length === 0 && <>
                    {!partnerLoading ? <>
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
                          {partners.filter(partnerf => partnerf.permission === 'Approved').map((partner, index) => (
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
                    </> : <></>}
                  </>
                  }

                </div>
              </div>

              {/* <div className="container text-dark" style={renDataStyle}>
                {searchPartner.length = 0 &&

                  <div id='partnerpending'>
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
                        {partners.filter(partnerf => partnerf.permission === 'Approved').map((partner, index) => (
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
                }
              </div> */}
            </div>
            <div className="tab-pane fade  text-light" id="b2bemployee" role="tabpanel" aria-labelledby="list-partner-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>||  B2B Employee ||</h2> <Link to='addnew/b2bemployee'><button className='btn btn-primary mx-3 my-2' >Add New B2B Employee</button></Link></span>
              {/* <div className="list-group shadow" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                  <Link to="#partner" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">All Partner </Link>
                  <Link to="#newpartner" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">New Partner</Link>
                </div> */}
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Employee by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleEmployeeFilter} placeholder="Search Partner Phone number" value={searchEmployeeValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>
                <div id='b2bemployee'>
                  {searchEmployee.length > 0 &&
                    <table className="table table-striped">
                      <thead className='thead-dark'>
                        <tr>
                          <th scope='col'>Index</th>
                          <th scope="col">Employee Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Phone No</th>
                          <th scope="col">Email</th>
                          <th scope="col">Added By</th>
                          <th scope="col">Permission</th>
                        </tr>
                      </thead>

                      <tbody>
                        {searchEmployee.map((employee, index) => (
                          <tr key={index}>
                            <th scope="row">{index}</th>
                            <th scope="row">{employee.id}</th>
                            <td>{employee.name}</td>
                            <td>{employee.ph_num}</td>
                            <td>{employee.email}</td>
                            <td>{employee.addedby}</td>
                            <td onClick={() => updateEmployeeStatus(employee.id)} style={{ cursor: 'pointer', color: 'blue' }} >{employee.permission}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  }

                  {searchEmployee.length === 0 && <>
                    {employeeLoading ? <>
                      <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                    </> : <>
                      {/* <p style={{ padding: '15px' }}>Search User Details through User Phone Number!!</p> */}
                    </>
                    }
                  </>}
                  {searchEmployee.length === 0 && <>
                    {!employeeLoading ? <>
                      <table className="table table-striped">
                        <thead className='thead-dark'>
                          <tr>
                            <th scope='col'>Index</th>
                            <th scope="col">Employee Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Email</th>
                            <th scope="col">Added By</th>
                            <th scope="col">Permission</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employees.map((employee, index) => (
                            <tr key={index}>
                              <th scope="row">{index}</th>
                              <th scope="row">{employee.id}</th>
                              <td>{employee.name}</td>
                              <td>{employee.ph_num}</td>
                              <td>{employee.email}</td>
                              <td>{employee.addedby}</td>
                              <td onClick={() => updateEmployeeStatus(employee.id)} style={{ cursor: 'pointer', color: 'blue' }} >{employee.permission}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </> : <></>}
                  </>
                  }

                </div>

              </div>

            </div>
            <div className="tab-pane fade  text-light" id="delivery-partner" role="tabpanel" aria-labelledby="list-delivery-partner-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>||  Delivery Partner ||</h2> <Link to='addnew/delivery-partner'><button className='btn btn-primary mx-3 my-2' >Add New Delivery Partner</button></Link></span>

              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p className='p-1 m-1'>Search Employee by Phone Number here</p>
                <input className="form-control" name='input' onChange={handleDeliveryPartnerFilter} placeholder="Search Partner Phone number" value={searchDPartnerValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
              </div>
              <div className="container text-dark" style={renDataStyle}>
                {/* <div className="list-group shadow" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                  <Link to="#delivery-partner" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">All Delivery Partner </Link>
                  <Link to="#newdelivery-partner" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">New Delivery Partner</Link>
                </div> */}

                <div id='delivery-partner'>
                  {searchDeliveryPartner.length > 0 &&
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
                        {searchDeliveryPartner.map((deliveryPartner, index) => (
                          <tr key={index}>
                            <th scope="row">{deliveryPartner.id}</th>
                            <td>{deliveryPartner.name}</td>
                            <td>{deliveryPartner.ph_num}</td>
                            <td>{deliveryPartner.aadhaar}</td>
                            <td>{deliveryPartner.pan}</td>
                            <td onClick={() => updateDeliveryPartnerStatus(deliveryPartner.id)} style={{ cursor: 'pointer', color: 'blue' }} >{deliveryPartner.permission}</td>
                            <td>
                              <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(deliveryPartner.AadhaarCardImageID)}>View Aadhaar Card</button>
                              <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(deliveryPartner.PanCardImageID)}>View Pan Card</button>

                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  }
                  {searchDeliveryPartner.length === 0 && <>
                    {dPartnerLoading ? <>
                      <p style={{ padding: '15px' }}>No data found for this Phone Number!!</p>
                    </> : <>
                      {/* <p style={{ padding: '15px' }}>Search User Details through User Phone Number!!</p> */}
                    </>
                    }
                  </>}
                  {searchDeliveryPartner.length === 0 && <>
                    {!dPartnerLoading ? <>

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
                          {deliveryPartners.map((deliveryPartner, index) => (
                            <tr key={index}>
                              <th scope="row">{deliveryPartner.id}</th>
                              <td>{deliveryPartner.name}</td>
                              <td>{deliveryPartner.ph_num}</td>
                              <td>{deliveryPartner.aadhaar}</td>
                              <td>{deliveryPartner.pan}</td>
                              <td onClick={() => updateDeliveryPartnerStatus(deliveryPartner.id)} style={{ cursor: 'pointer', color: 'blue' }} >{deliveryPartner.permission}</td>
                              <td>
                                <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(deliveryPartner.AadhaarCardImageID)}>View Aadhaar Card</button>
                                <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(deliveryPartner.PanCardImageID)}>View Pan Card</button>

                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </> : <></>}
                  </>
                  }
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
            <div className="tab-pane fade  text-light" id="delivery-partner-commission" role="tabpanel" aria-labelledby="list-partner-commission-list">
              <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Delivery Partner Commission ||</h2> <Link to='addnew/delivery-partner-commission'><button className='btn btn-primary mx-3 my-2' >Add New Delivery Partner Commission</button></Link></span>
              <div className="container text-dark" style={renDataStyle}>
                <div id='delivery-partner-commission'>
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
                      {deliveryCommissions && <>
                        {deliveryCommissions.map((commission, index) => (
                          <tr key={index}>
                            <th scope="row">{commission.id}</th>
                            <td>{commission.service_type}</td>
                            <td>{commission.commision_type}</td>
                            <td>{commission.commision}</td>
                            <td>

                              <Link to={`/superadmin/delivery/update-commission/${commission.id}`}> <div className="btn btn-info m-1">Update Commission</div></Link>
                              <div className="btn btn-info m-1" onClick={() => DeleteDeliveryCommission(commission.id)}>Delete Commission</div>

                            </td>
                          </tr>
                        ))}
                      </>}
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
