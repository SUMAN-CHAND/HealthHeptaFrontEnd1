import React, { Suspense, lazy } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import { useEffect, useState } from 'react'
import axiosClient from '../axiosClient';
import HashLoader from 'react-spinners/HashLoader';
import Modal from 'react-modal';
const ProductListModal = lazy(() => import('./B2BDashboardTabModals/ProductListModal'));
const LowStockProductModal = lazy(() => import('./B2BDashboardTabModals/LowStockProductModal'));
const ExpiringProductModal = lazy(() => import('./B2BDashboardTabModals/ExpiringProductModal'));
const ExpiredProductModal = lazy(() => import('./B2BDashboardTabModals/ExpiredProductModal'));
const SubAdminModal = lazy(() => import('./B2BDashboardTabModals/SubAdminModal'));
const UserModal = lazy(() => import('./B2BDashboardTabModals/UserModal'));
const OrderYModal = lazy(() => import('./B2BDashboardTabModals/OrderYModal'));
const OrderMModal = lazy(() => import('./B2BDashboardTabModals/OrderMModal'));
const SaleYModal = lazy(() => import('./B2BDashboardTabModals/SaleYModal'));
const SaleMModal = lazy(() => import('./B2BDashboardTabModals/SaleMModal'));
const OtcOrderProduct = lazy(() => import('./B2BDashboardTabModals/OtcOrderProduct'));
const DrugOrderProduct = lazy(() => import('./B2BDashboardTabModals/DrugOrderProduct'));



const Dashboard = () => {
  const [userCount, setUserCount] = useState();
  const [productCount, setProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [expiryproductCount, setExpiryProductCount] = useState(0);
  const [expiryproductPrice, setExpiryProductPrice] = useState(0);
  const [expiryingproductCount, setExpiryingProductCount] = useState(0);
  const [expiryingproductPrice, setExpiryingProductPrice] = useState(0);
  const [purchase_monthlyproductCount, setPurchase_monthlyproductCount] = useState(0);
  const [purchase_monthlyproductPrice, setPurchase_monthlyProductPrice] = useState(0);
  const [sales_monthlyproductCount, setSales_monthlyproductCount] = useState(0);
  const [sales_monthlyproductPrice, setSales_monthlyProductPrice] = useState(0);
  const [sales_yearlyproductCount, setSales_yearlyproductCount] = useState(0);
  const [sales_yearlyproductPrice, setSales_yearlyProductPrice] = useState(0);
  const [purchase_yearlyproductCount, setPurchase_yearlyproductCount] = useState(0);
  const [purchase_yearlyproductPrice, setPurchase_yearlyProductPrice] = useState(0);
  const [productCountLowStock, setProductCountLowStock] = useState(0);
  const [productPriceLowStock, setProductPriceLowStock] = useState(0);
  const [ordersCount, setOrdersCount] = useState();
  const [serviceProviderCount, setServiceProviderCount] = useState();
  const [userCountonWeek, setuserCountonWeek] = useState([]);
  const [userOrderonWeek, setUserOrderonWeek] = useState([]);
  const [salesCountWeek, setSalesCountWeek] = useState([]);
  const [purchaseCountWeek, setPurchaseCountWeek] = useState([]);

  const [otcorderCount, setOtcOrderCount] = useState(0);
  const [otcorderproductPrice, setOtcOrderProductPrice] = useState(0);

  const [drugorderCount, setDrugOrderCount] = useState(0);
  const [drugorderproductPrice, setDrugOrderProductPrice] = useState(0);

  useEffect(() => {
    axiosClient.get(`/superadmin/userno`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setUserCount(response.data[0].no)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/userno/week`)
      .then(response => {
        // Handle response
        // console.log(response.data)
        if (response.data !== undefined) {
          setuserCountonWeek(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/productno`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setProductCount(response.data[0].no)
          setProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/product/lowstock`)
      .then(response => {
        // Handle response 
        if (response.data !== undefined) {
          setProductCountLowStock(response.data[0].no)
          setProductPriceLowStock(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/product/expirying_ptoduct`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setExpiryingProductCount(response.data[0].no)
          setExpiryingProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/product/expiry_product`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setExpiryProductCount(response.data[0].no)
          setExpiryProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/product/purchase_monthly`)
      .then(response => {
        // Handle response
        setPurchase_monthlyproductCount(response.data[0].no)
        setPurchase_monthlyProductPrice(response.data[0].price)

        if (response.data !== undefined) {
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/product/purchase_yearly`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setPurchase_yearlyproductCount(response.data[0].no)
          setPurchase_yearlyProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/product/sales_monthly`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setSales_monthlyproductCount(response.data[0].no)
          setSales_monthlyProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])

  useEffect(() => {
    axiosClient.get(`/superadmin/product/sales_yearly`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setSales_yearlyproductCount(response.data[0].no)
          setSales_yearlyProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/ordersno`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setOrdersCount(response.data[0].no)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/ordersno/week`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setUserOrderonWeek(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/serviceproviderno`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setServiceProviderCount(response.data[0].no)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/otc/order/no`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setOtcOrderCount(response.data[0].no)
          setOtcOrderProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/drug/order/no`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setDrugOrderCount(response.data[0].no)
          setDrugOrderProductPrice(response.data[0].price)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/sales/week`)
      .then(response => {
        // Handle response
        // console.log(response.data)
        if (response.data !== undefined) {
          setSalesCountWeek(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axiosClient.get(`/superadmin/purchase/week`)
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setPurchaseCountWeek(response.data)
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  var data = [];
  data = [
    {
      name: '1',
      user: userCountonWeek[0],
      order: userOrderonWeek[0],
      amt: 2400,
    },
    {
      name: '2',
      user: userCountonWeek[1],
      order: userOrderonWeek[1],
      amt: 2210,
    },
    {
      name: '3',
      user: userCountonWeek[2],
      order: userOrderonWeek[2],
      amt: 2290,
    },
    {
      name: '4',
      user: userCountonWeek[3],
      order: userOrderonWeek[3],
      amt: 2000,
    },
    {
      name: '5',
      user: userCountonWeek[4],
      order: userOrderonWeek[4],
      amt: 2181,
    },
    {
      name: '6',
      user: userCountonWeek[5],
      order: userOrderonWeek[5],
      amt: 2500,
    },
    {
      name: '7',
      user: userCountonWeek[6],
      order: userOrderonWeek[6],
      amt: 2100,
    },
  ];
  var salesReport = [];
  salesReport = [
    {
      name: '1',

      sales: salesCountWeek[0],
      purchase: purchaseCountWeek[0],
      amt: 2400,
    },
    {
      name: '2',
      sales: salesCountWeek[1],
      purchase: purchaseCountWeek[1],
      amt: 2210,
    },
    {
      name: '3',
      sales: salesCountWeek[2],
      purchase: purchaseCountWeek[2],
      amt: 2290,
    },
    {
      name: '4',
      sales: salesCountWeek[3],
      purchase: purchaseCountWeek[3],
      amt: 2000,
    },
    {
      name: '5',
      sales: salesCountWeek[4],
      purchase: purchaseCountWeek[4],
      amt: 2181,
    },
    {
      name: '6',
      sales: salesCountWeek[5],
      purchase: purchaseCountWeek[5],
      amt: 2500,
    },
    {
      name: '7',
      sales: salesCountWeek[6],
      purchase: purchaseCountWeek[6],
      amt: 2100,
    },

  ];
  var flag1Chart = true;
  var flag2Chart = true;
  if ((userCountonWeek[0] > 0 || userCountonWeek[1] > 0 || userCountonWeek[2] > 0 || userCountonWeek[3] > 0 || userCountonWeek[4] > 0 || userCountonWeek[5] > 0 || userCountonWeek[6] > 0) && (userOrderonWeek[0] > 0 || userOrderonWeek[1] > 0 || userOrderonWeek[2] > 0 || userOrderonWeek[3] > 0 || userOrderonWeek[4] > 0 || userOrderonWeek[5] > 0 || userOrderonWeek[6] > 0)) {
    flag1Chart = true;
  }
  if ((salesCountWeek[0] > 0 || salesCountWeek[1] > 0 || salesCountWeek[2] > 0 || salesCountWeek[3] > 0 || salesCountWeek[4] > 0 || salesCountWeek[5] > 0 || salesCountWeek[6] > 0) && (purchaseCountWeek[0] > 0 || purchaseCountWeek[1] > 0 || purchaseCountWeek[2] > 0 || purchaseCountWeek[3] > 0 || purchaseCountWeek[4] > 0 || purchaseCountWeek[5] > 0 || purchaseCountWeek[6] > 0)) {
    flag2Chart = true;
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

  const [lowStockmodalIsOpen, setLowStockmodalIsOpen] = React.useState(false);
  function lsopenModal() {
    setLowStockmodalIsOpen(true);
  }
  function afterlsOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function lscloseModal() {
    document.body.style.overflow = 'unset';
    setLowStockmodalIsOpen(false);
  }

  const [expiringProductIsOpen, setExpiringProductIsOpen] = React.useState(false);
  function expiringopenModal() {
    setExpiringProductIsOpen(true);
  }
  function afterexpiringOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function expiringcloseModal() {
    document.body.style.overflow = 'unset';
    setExpiringProductIsOpen(false);
  }

  const [expiredProductIsOpen, setExpiredProductIsOpen] = React.useState(false);
  function expiredopenModal() {
    setExpiredProductIsOpen(true);
  }
  function afterexpiredOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function expiriedcloseModal() {
    document.body.style.overflow = 'unset';
    setExpiredProductIsOpen(false);
  }

  const [subadminIsOpen, setsubadminIsOpen] = React.useState(false);
  function subadminopenModal() {
    setsubadminIsOpen(true);
  }
  function aftersubadminOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function subadmincloseModal() {
    document.body.style.overflow = 'unset';
    setsubadminIsOpen(false);
  }
  const [otcOrderIsOpen, setotcOrderIsOpen] = React.useState(false);
  function otcOrderopenModal() {
    setotcOrderIsOpen(true);
  }
  function afterotcOrderOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function otcOrdercloseModal() {
    document.body.style.overflow = 'unset';
    setotcOrderIsOpen(false);
  }

  const [userIsOpen, setuserIsOpen] = React.useState(false);
  function useropenModal() {
    setuserIsOpen(true);
  }
  function afteruserOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function usercloseModal() {
    document.body.style.overflow = 'unset';
    setuserIsOpen(false);
  }
  const [orderYIsOpen, setorderYIsOpen] = React.useState(false);
  function orderYopenModal() {
    setorderYIsOpen(true);
  }
  function afterorderYOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function orderYcloseModal() {
    document.body.style.overflow = 'unset';
    setorderYIsOpen(false);
  }

  const [orderMIsOpen, setorderMIsOpen] = React.useState(false);
  function orderMopenModal() {
    setorderMIsOpen(true);
  }
  function afterorderMOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function orderMcloseModal() {
    document.body.style.overflow = 'unset';
    setorderMIsOpen(false);
  }
  const [saleYIsOpen, setsaleYIsOpen] = React.useState(false);
  function saleYopenModal() {
    setsaleYIsOpen(true);
  }
  function aftersaleYOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function saleYcloseModal() {
    document.body.style.overflow = 'unset';
    setsaleYIsOpen(false);
  }
  const [saleMIsOpen, setsaleMIsOpen] = React.useState(false);
  function saleMopenModal() {
    setsaleMIsOpen(true);
  }
  function aftersaleMOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function saleMcloseModal() {
    document.body.style.overflow = 'unset';
    setsaleMIsOpen(false);
  }
  const [drugOrderIsOpen, setdrugOrderIsOpen] = React.useState(false);
  function drugOrderopenModal() {
    setdrugOrderIsOpen(true);
  }
  function afterdrugOrderOpenModal() {
    document.body.style.overflow = 'hidden';
  }
  function drugOrdercloseModal() {
    document.body.style.overflow = 'unset';
    setdrugOrderIsOpen(false);
  }

  return (
    <main className='main-container' style={{ fontSize: '13px' }}>
      <div className='main-title'>
        <h3 className='text-dark'>DASHBOARD</h3>
      </div>
      <div className="row mt-4">
        <div className="col-xl-3 col-md-6 mb-4" >
          <a className="text-decoration-none" onClick={openModal} >
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Product</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{productCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹&nbsp;{productPrice}</div>
                  </div>
                </div>
              </div>
            </div>

          </a>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <ProductListModal closeTheModal={closeModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={lsopenModal} >
            <div className="card border-left-danger shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Low Stock</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{productCountLowStock}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹&nbsp;{productPriceLowStock}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={lowStockmodalIsOpen}
            onAfterOpen={afterlsOpenModal}
            onRequestClose={lscloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <LowStockProductModal closeTheModal={lscloseModal} /></Suspense> </div>
          </Modal>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={expiringopenModal}>
            <div className="card border-left-warning shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Expiring Product</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">
                      {expiryingproductCount}
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">
                      ₹&nbsp;{expiryingproductPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={expiringProductIsOpen}
            onAfterOpen={afterexpiringOpenModal}
            onRequestClose={expiringcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <ExpiringProductModal closeTheModal={expiringcloseModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={expiredopenModal}>
            <div className="card border-left-danger shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Expired Product</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{expiryproductCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹&nbsp;{expiryproductPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={expiredProductIsOpen}
            onAfterOpen={afterexpiredOpenModal}
            onRequestClose={expiriedcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <ExpiredProductModal closeTheModal={expiriedcloseModal} /></Suspense> </div>
          </Modal>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={orderMopenModal}>
            <div className="card border-left-info shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1" title="October, 2023">Purchase (Monthly)</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{purchase_monthlyproductCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹&nbsp;{purchase_monthlyproductPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={orderMIsOpen}
            onAfterOpen={afterorderMOpenModal}
            onRequestClose={orderMcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <OrderMModal closeTheModal={orderMcloseModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={orderYopenModal}>
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" title="2023">Purchase (Yearly)</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{purchase_yearlyproductCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹&nbsp;{purchase_yearlyproductPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={orderYIsOpen}
            onAfterOpen={afterorderYOpenModal}
            onRequestClose={orderYcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <OrderYModal closeTheModal={orderYcloseModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={saleMopenModal}>
            <div className="card border-left-success shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1" title="October, 2023">Sales (Monthly)</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{sales_monthlyproductCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹&nbsp;{sales_monthlyproductPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={saleMIsOpen}
            onAfterOpen={aftersaleMOpenModal}
            onRequestClose={saleMcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <SaleMModal closeTheModal={saleMcloseModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={saleYopenModal}>
            <div className="card border-left-success shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1" title="2023">Sales (Yearly)</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{sales_yearlyproductCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹{sales_yearlyproductPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={saleYIsOpen}
            onAfterOpen={aftersaleYOpenModal}
            onRequestClose={saleYcloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <SaleYModal closeTheModal={saleYcloseModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" onClick={useropenModal}>
            <div className="card border-left-info shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Total Customer</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{userCount}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-gray-300" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={userIsOpen}
            onAfterOpen={afteruserOpenModal}
            onRequestClose={usercloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <UserModal closeTheModal={usercloseModal} /></Suspense> </div>
          </Modal>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a id='service-provider' className="text-decoration-none" onClick={subadminopenModal}>
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Supplier</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{serviceProviderCount}</div>
                  </div>
                  
                  <div className="col-auto">
                    <i className="fas fa-people-arrows fa-2x text-gray-300" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={subadminIsOpen}
            onAfterOpen={aftersubadminOpenModal}
            onRequestClose={subadmincloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <SubAdminModal closeTheModal={subadmincloseModal} /></Suspense> </div>
          </Modal>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <a id='otc-order' className="text-decoration-none" onClick={otcOrderopenModal}>
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total  OTC Order </div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{otcorderCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹{otcorderproductPrice}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-people-arrows fa-2x text-gray-300" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={otcOrderIsOpen}
            onAfterOpen={afterotcOrderOpenModal}
            onRequestClose={otcOrdercloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <OtcOrderProduct closeTheModal={otcOrdercloseModal} /></Suspense> </div>
          </Modal>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <a id='drug-order' className="text-decoration-none" onClick={drugOrderopenModal}>
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total  Drug Order </div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{drugorderCount}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹{drugorderproductPrice}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-people-arrows fa-2x text-gray-300" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <Modal
            isOpen={drugOrderIsOpen}
            onAfterOpen={afterdrugOrderOpenModal}
            onRequestClose={drugOrdercloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <DrugOrderProduct closeTheModal={drugOrdercloseModal} /></Suspense> </div>
          </Modal>
        </div>
      </div>

  
      <div className='charts' style={{ height: '300px', width: '70vw' }}>

        {flag1Chart ? <>

          <ResponsiveContainer width="100%" height="100%" >
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="user" fill="#8884d8" />
              <Bar dataKey="order" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

        </> : <>
          <p>No Data Found</p>

        </>
        }
        {flag2Chart ? <>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={salesReport}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="purchase" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </> : <>
          <p className='text-dark'>No Data Found</p>
        </>


        }

      </div> 

      {/* //new One */}
      {/* <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="user" fill="#8884d8" />
            <Bar dataKey="order" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={salesReport}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="purchase" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div> */}

    </main>
  )
}

export default Dashboard