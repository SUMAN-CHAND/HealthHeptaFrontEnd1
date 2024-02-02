import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosClient from './axiosClient';

export default function OrderBill() {

  const [product, setProduct] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrders] = useState([]);
  const [orderDetail, setorderDetail] = useState([]);
  const location = useLocation();
  let stateData = location.state
  var order_id = stateData.orderId;
  var productIds = stateData.productIds;
  
console.log(productIds)
//   const param = useParams();
  // var order_id = param.id;
//   var product_id = param.product_id;
  // console.log(order_id)
  // console.log(product_id)
  // console.log(product_id)
//   useEffect(() => {
//     axiosClient.get(`/sub-admin/orders/product/${product_id}`)
//       .then(res => {
//         if (res.data !== null) {
//           setProduct(res.data[0]);
//         }
//       })
//       .catch(err => {
//         console.log(err)
//       })

//   }, [])
//   console.log(product)

//   var user_id = param.user_id;
  // console.log(user_id)
  useEffect(() => {
    axiosClient.get(`/profile`)
      .then(res => {
        if (res.data) {
          setCustomer(res.data[0]);
        }
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

//   var order_id = param.id;
  // console.log(product_id)
  useEffect(() => {
    axiosClient.get(`/sub-admin/orders/order/${order_id}`)
      .then(res => {
        if (res.data !== null) {
          setorderDetail(res.data[0])
          setOrders(res.data);
          // console.log(product)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sub-admin/home', { state: { loggedIn: true } });
  }
//   console.log(product.product_price)
//   const discountPrice = (product.product_price - ((product.product_price * product.discount) / 100));
//   console.log(discountPrice)
const discountPrice=1;
  const delevaryCharge = 25;

  return (
    <div>
      <div className='m-5 p-3 shadow' style={{ border: '2px solid black' }}>
        <div className="container" >
          <div className="row">
            <div className="col-lg-12">
              <div className="card-order " >
                <div className="card-body">
                  <div className="invoice-title">
                    <h4 className="float-end font-size-15">OrderNo: {orderDetail.id} <span className="badge bg-success font-size-12 ms-2">{orderDetail.payment_status}</span></h4>
                    <div className="mb-4">
                      <h2 className="mb-1 text-muted">Healthhepta.com</h2>
                    </div>
                    <div className="text-muted">
                      <p className="mb-1">Po- Gokarna, Ps- Kandi, Gokarna, Murshidabad</p>
                      <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i>  Murshidabad, West Bengal, India</p>
                      <p><i className="uil uil-phone me-1"></i>742136</p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="text-muted">
                        <h5 className="font-size-16 mb-3">Billed To:</h5>
                        <h5 className="font-size-15 mb-2">{customer.name}</h5>
                        <p className="mb-1">{customer.phone}</p>
                        <p className="mb-1">{customer.name}, {customer.Village},{customer.P_O},{customer.City},{customer.district},{customer.State},{customer.Pin}</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-muted text-sm-end">
                        <div>
                          <h5 className="font-size-15 mb-1">Order No:</h5>
                          <p>{orderDetail.id}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-15 mb-1">Order Date:</h5>
                          <p>{orderDetail.order_date}</p>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <h5 className="font-size-15">Order Summary</h5>

                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap table-centered mb-0">
                        <thead>
                          <tr>
                            <th style={{ width: '70px' }}>No.</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className="text-end" style={{ width: '120px' }}>Total</th>
                          </tr>
                        </thead>

                        <tbody>

                          {order.map((orders, index) => (
                            <tr key={index}>
                              <th scope="row">{orders.product_id}</th>
                              <td>
                                <div>
                                  <h5 className="text-truncate font-size-14 mb-1">{orders.product_name}</h5>
                                  <p className="text-muted mb-0">{orders.description}</p>
                                </div>
                              </td>
                              <td>₹ {orders.product_price}</td>
                              <td>{orders.quantuity}</td>
                              <td className="text-end">₹ ({orders.quantuity}  {orders.product_price} )</td>
                            </tr>
                          ))}

                          <tr>

                          </tr>

                          <tr>
                            <th scope="row" colspan="4" className="text-end">Sub Total</th>
                            <td className="text-end">₹{orderDetail.product_price}</td>
                          </tr>
                          <tr>
                            <th scope="row" colspan="4" className="border-0 text-end">
                              Discount :</th>
                            <td className="border-0 text-end">₹{discountPrice}</td>
                          </tr>
                          <tr>
                            <th scope="row" colspan="4" className="border-0 text-end">
                              Shipping Charge :</th>
                            <td className="border-0 text-end">₹{delevaryCharge}</td>
                          </tr>

                          <tr>
                            <th scope="row" colspan="4" className="border-0 text-end">
                              Tax</th>
                            <td className="border-0 text-end">₹ 12.00</td>
                          </tr>

                          <tr>
                            <th scope="row" colspan="4" className="border-0 text-end">Total</th>
                            <td className="border-0 text-end"><h4 className="m-0 fw-semibold">₹({discountPrice}+{delevaryCharge}) </h4></td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                    <div className="d-print-none mt-4">
                      <div className="float-end">
                        <a href="javascript:window.print()" className="btn btn-success me-1"><i className="fa fa-print">Print</i></a>
                        {/* <a href="#" className="btn btn-primary w-md"></a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}