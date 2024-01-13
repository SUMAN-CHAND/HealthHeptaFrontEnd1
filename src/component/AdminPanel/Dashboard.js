import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import { useEffect, useState } from 'react'
import axios from 'axios';

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

  // console.log(userCount);
  // console.log(productCount);
  // console.log(productPrice);
  // console.log(expiryproductCount);
  // console.log(expiryproductPrice);
  // console.log(expiryingproductCount);
  // console.log(expiryingproductPrice);
  // console.log(purchase_monthlyproductCount);
  // console.log(purchase_monthlyproductPrice);
  // console.log(sales_monthlyproductCount);
  // console.log(sales_monthlyproductPrice);
  // console.log(sales_yearlyproductCount);
  // console.log(sales_yearlyproductPrice);
  // console.log(purchase_yearlyproductCount);
  // console.log(purchase_yearlyproductPrice);
  // console.log(productCountLowStock);
  // console.log(productPriceLowStock);
  // console.log(ordersCount);
  // console.log(serviceProviderCount);
  // console.log(userCountonWeek);
  // console.log(userOrderonWeek);
  // console.log(salesCountWeek);
  // console.log(purchaseCountWeek);

  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/userno')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setUserCount(response.data[0].no)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/userno/week')
      .then(response => {
        // Handle response
        // console.log(response.data)
        if (response.data !== undefined) {
          setuserCountonWeek(response.data)
        }

        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  // if(userCountonWeek.length()>0){
  // console.log(userCountonWeek)
  // }

  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/productno')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setProductCount(response.data[0].no)
          setProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/lowstock')
      .then(response => {
        // Handle response 
        if (response.data !== undefined) {
          setProductCountLowStock(response.data[0].no)
          setProductPriceLowStock(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/expirying_ptoduct')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setExpiryingProductCount(response.data[0].no)
          setExpiryingProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/expiry_product')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setExpiryProductCount(response.data[0].no)
          setExpiryProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/purchase_monthly')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setPurchase_yearlyproductCount(response.data[0].no)
          setPurchase_yearlyProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/purchase_yearly')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setPurchase_monthlyproductCount(response.data[0].no)
          setPurchase_monthlyProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/sales_monthly')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setSales_monthlyproductCount(response.data[0].no)
          setSales_monthlyProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/product/sales_yearly')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setSales_yearlyproductCount(response.data[0].no)
          setSales_yearlyProductPrice(response.data[0].price)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/ordersno')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setOrdersCount(response.data[0].no)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/ordersno/week')
      .then(response => {
        // Handle response
        // console.log(response.data)
        if (response.data !== undefined) {
          setUserOrderonWeek(response.data)
        }

        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/serviceproviderno')
      .then(response => {
        // Handle response
        if (response.data !== undefined) {
          setServiceProviderCount(response.data[0].no)
          // console.log(response.data);
        }
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/sales/week')
      .then(response => {
        // Handle response
        // console.log(response.data)
        if (response.data !== undefined) {
          setSalesCountWeek(response.data)
        }

        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8081/superadmin/purchase/week')
      .then(response => {
        // Handle response
        // console.log(response.data)
        if (response.data !== undefined) {
          setPurchaseCountWeek(response.data)
        }

        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])



  // {userCountonWeek.length > 0 && (
  //   // Render the component that uses userCountonWeek
  // )}
  var data = [];
  // if (userCountonWeek[0] > 0 || userCountonWeek[1] > 0 || userCountonWeek[2] > 0 || userCountonWeek[3] > 0 || userCountonWeek[4] > 0 || userCountonWeek[5] > 0 || userCountonWeek[6] > 0) {
  //   if (userOrderonWeek[0] > 0 || userOrderonWeek[1] > 0 || userOrderonWeek[2] > 0 || userOrderonWeek[3] > 0 || userOrderonWeek[4] > 0 || userOrderonWeek[5] > 0 || userOrderonWeek[6] > 0) {

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
  //   }
  // }

  var salesReport = [];
  // if (salesCountWeek[0] > 0 || salesCountWeek[1] > 0 || salesCountWeek[2] > 0 || salesCountWeek[3] > 0 || salesCountWeek[4] > 0 || salesCountWeek[5] > 0 || salesCountWeek[6] > 0) {
  //   if (purchaseCountWeek[0] > 0 || purchaseCountWeek[1] > 0 || purchaseCountWeek[2] > 0 || purchaseCountWeek[3] > 0 || purchaseCountWeek[4] > 0 || purchaseCountWeek[5] > 0 || purchaseCountWeek[6] > 0) {


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
  //   }
  // }

  // console.log(data);
  // console.log(salesReport);
  var flag1Chart = false;
  var flag2Chart = false;
  if ((userCountonWeek[0] > 0 || userCountonWeek[1] > 0 || userCountonWeek[2] > 0 || userCountonWeek[3] > 0 || userCountonWeek[4] > 0 || userCountonWeek[5] > 0 || userCountonWeek[6] > 0) && (userOrderonWeek[0] > 0 || userOrderonWeek[1] > 0 || userOrderonWeek[2] > 0 || userOrderonWeek[3] > 0 || userOrderonWeek[4] > 0 || userOrderonWeek[5] > 0 || userOrderonWeek[6] > 0)) {
    // console.log('true')
    flag1Chart = true;
  }
  if ((salesCountWeek[0] > 0 || salesCountWeek[1] > 0 || salesCountWeek[2] > 0 || salesCountWeek[3] > 0 || salesCountWeek[4] > 0 || salesCountWeek[5] > 0 || salesCountWeek[6] > 0) && (purchaseCountWeek[0] > 0 || purchaseCountWeek[1] > 0 || purchaseCountWeek[2] > 0 || purchaseCountWeek[3] > 0 || purchaseCountWeek[4] > 0 || purchaseCountWeek[5] > 0 || purchaseCountWeek[6] > 0)) {
    // console.log('true')
    flag2Chart = true;
  }

  // const YourComponent = ({ userCountonWeek, userOrderonWeek }) => {
  //   const data = [
  //     // Your data here
  //   ];

  // const shouldRenderChart = userCountonWeek.some((count, index) => count > 0 || userOrderonWeek[index] > 0);

  return (
    <main className='main-container' style={{fontSize:'13px'}}>
      <div className='main-title'>
        <h3 className='text-dark'>DASHBOARD</h3>
      </div>
      <div className="row mt-4">
        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" href="">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a className="text-decoration-none" href="">
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
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <a href="" className="text-decoration-none">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a href="" className="text-decoration-none">
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
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <a href="" className="text-decoration-none">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a href="" className="text-decoration-none">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a href=" " className="text-decoration-none">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a href=" " className="text-decoration-none">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a href=" " className="text-decoration-none">
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
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <a href=" " id='service-provider' className="text-decoration-none">
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
        </div>
      </div>

      {/* 
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

      </div> */}

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