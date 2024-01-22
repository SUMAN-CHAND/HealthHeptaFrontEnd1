import React, { useState, useEffect } from 'react'
import {
  Link, useNavigate
} from "react-router-dom";
import axios from 'axios';
const customStyle = {
  maxHeight: '60vh',
  minHeight: '50vh',
  maxWidth: '85vw',
  minWidth: '50vw',
  borderRadius: '5px',
  overflow: 'hidden',
  background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
  backgroundColor: 'rgb(41 116 132)'

};


export default function ViewCommissionModal({ closeTheModal, data, product_ids }) {

  // console.log(data)
  // console.log(product_ids)
  const order_id = data;
  const product_id = product_ids;



  const [commissions, setCommissions] = useState([]);
  const [payments, setPayments] = useState([]);
  const [products, setProducts] = useState([])


  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/partner/commission/${order_id}`)
      .then(res => {
        // setSelectLocation(res.data[2])
        setCommissions(res.data[0]);
        setPayments(res.data[1]);
      })
  }, []);
  useEffect(() => {
     axios.get(`http://${process.env.REACT_APP_HOST}:8081/partner/profile/order`).then((res) => {
            if (res.data !== null) {
                setProducts(res.data)
            } else {
                console.log('Product not present')
            }
        })
  }, []);
  var total_amount = 0;
  // console.log(commissions)
  // console.log(payments)
  // console.log(products)


  return (
    <>
      <div className="commission container " style={customStyle}>
        <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
        <h5 className='text-light'>commission</h5>
        <div className='details p-3 m-3'>
        {products.filter(productf => productf.product_id === product_id).map((product, index) => (
          <div className="col m-2 p-2" style={{ display: 'flex', color: 'white' }}>
            <p className='mx-2'>Product Name : </p>
            <p className='mx-2'>{product.product_name} </p>
          </div>
          ))}
          {payments.map((payment, index) => (
            <div className="col m-2 p-2" style={{ display: 'flex', color: 'white' }}>
              <p className='mx-2'>Amount Pay : </p>
              <p className='mx-2'>{total_amount = payment.total_amount} </p>
            </div>

          ))}
          {commissions.map((commission, index) => (<>
            <div className="col m-2 p-2" style={{ display: 'flex', color: 'white' }}>
              <p className='mx-2'>Commission {commission.commision_type} : </p>
              <p className='mx-2'>{commission.commision} </p>
            </div>
            <div className="col m-2 p-2" style={{ display: 'flex', color: 'white' }}>
              <p className='mx-2'>Commission Amount : </p>
              {commissions.commision_type === 'Percentage' ?
               <>
                <p className='mx-2'>{(total_amount * commission.commision) / 100} </p>
              </> : <>
                <p className='mx-2'>{commission.commision} </p>

              </>}
            </div>
          </>

          ))}


        </div>
      </div>
    </>
  )
}
