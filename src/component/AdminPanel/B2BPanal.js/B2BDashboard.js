
import React, { Suspense, lazy } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient';
import Modal from 'react-modal';
import HashLoader from 'react-spinners/HashLoader';


const OtcOrderProduct = lazy(() => import('../B2BDashboardTabModals/OtcOrderProduct'));
const DrugOrderProduct = lazy(() => import('../B2BDashboardTabModals/DrugOrderProduct'));

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
export default function B2BDashboard() {
    const [userCount, setUserCount] = useState();
  const [productCount, setProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [expiryproductCount, setExpiryProductCount] = useState(0);
  const [expiryproductPrice, setExpiryingProductPrice] = useState(0);
  const [expiryingproductCount, setExpiryingProductCount] = useState(0);
  const [expiryingproductPrice, setExpiryProductPrice] = useState(0);
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
  const [userCountonMonday, setUserCountonMonday] = useState([]);
  const [userOrderonMonday, setOrderCountonMonday] = useState([]);
  const [salesCountWeek, setSalesCountWeek] = useState([]);
  const [purchaseCountWeek, setPurchaseCountWeek] = useState([]);


  const [otcorderCount, setOtcOrderCount] = useState(0);
  const [otcorderproductPrice, setOtcOrderProductPrice] = useState(0);

  const [drugorderCount, setDrugOrderCount] = useState(0);
  const [drugorderproductPrice, setDrugOrderProductPrice] = useState(0);

let re ;
  useEffect(() => {
    axiosClient.get(`/super_admin/b2b/dashboard/details`)
      .then(response => {
        // Handle response
        console.log(response)
        re = response;
        setUserCount(response.data[0]);
        setUserCountonMonday(response.data[1]);
        setProductCount(response.data[5].no)
        setProductPrice(response.data[5].price)
        setProductCountLowStock(response.data[6].no)
        setProductPriceLowStock(response.data[6].price)
        setExpiryingProductCount(response.data[7].no)
        setExpiryingProductPrice(response.data[7].price)
        setExpiryProductCount(response.data[8].no)
        setExpiryProductPrice(response.data[8].price)
        setPurchase_yearlyproductCount(response.data[10].no)
        setPurchase_yearlyProductPrice(response.data[10].price)
        setPurchase_monthlyproductCount(response.data[9].no)
        setPurchase_monthlyProductPrice(response.data[9].price)
        setSales_monthlyproductCount(response.data[11].no)
        setSales_monthlyProductPrice(response.data[11].price)
        setSales_yearlyproductCount(response.data[12].no)
        setSales_yearlyProductPrice(response.data[12].price)
        setOrdersCount(response.data[13].no)
        setServiceProviderCount(response.data[14].no)
        setOrderCountonMonday(response.data[4])
        setSalesCountWeek(response.data[2])
        setPurchaseCountWeek(response.data[3])
        // setOtcOrderCount(response.data[3])
        // setOtcOrderProductPrice(response.data[3])
        // setDrugOrderCount(response.data[3])
        // setDrugOrderProductPrice(response.data[3])



        // setProductCount
        // console.log(response.data);
      })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [re])


  const data = [
    {
      name: '1',
      user: userCountonMonday[0],
      order: userOrderonMonday[0],
      amt: 2400,
    },
    {
      name: '2',
      user: userCountonMonday[1],
      order: userOrderonMonday[1],
      amt: 2210,
    },
    {
      name: '3',
      user: userCountonMonday[2],
      order: userOrderonMonday[2],
      amt: 2290,
    },
    {
      name: '4',
      user: userCountonMonday[3],
      order: userOrderonMonday[3],
      amt: 2000,
    },
    {
      name: '5',
      user: userCountonMonday[4],
      order: userOrderonMonday[4],
      amt: 2181,
    },
    {
      name: '6',
      user: userCountonMonday[5],
      order: userOrderonMonday[5],
      amt: 2500,
    },
    {
      name: '7',
      user: userCountonMonday[6],
      order: userOrderonMonday[6],
      amt: 2100,
    },
  ];

  const salesReport = [
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
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Orders </div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{ordersCount}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-people-arrows fa-2x text-gray-300" aria-hidden="true"></i>
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
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Service Provider </div>
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
        <div className="col-xl-3 col-md-6 mb-4">
          <a id='otc-order' className="text-decoration-none" >
          {/* onClick={otcOrderopenModal} */}
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total  OTC Order </div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{0}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹{0}</div>
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
          <a id='drug-order' className="text-decoration-none" >
          {/* onClick={drugOrderopenModal} */}
            <div className="card border-left-primary shadow h-100 py-2 align-items-center">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total  Drug Order </div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800">{0}</div>
                  </div>
                  <div className="col-auto">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-right">Value</div>
                    <div className="h6 mb-0 font-weight-bold text-gray-800 text-right">₹{0}</div>
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


      <div className='charts'>
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

      </div>
    </main>
  )
}

