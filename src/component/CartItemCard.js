import React from 'react'
import product2 from '../img/medicalproduct.webp'
import axiosClient from './axiosClient';
export default function CartItemCard(props) {
    // console.log(props)
    const product_id = props.product_id;
    const removeProductFormCart = (product_id) => {
        const response = window.confirm("Are you sure to remove the Product from cart ?");
        // console.log(product_id)
        if (response) {
            axiosClient.delete(`/remove/cart/product/${product_id}`)
                .then(response => {
                    if (response.data === 'success') {
                        alert('Product Remove Successfully');
                    }
                    else if (response.data === null) {
                        alert('Product not Removed at this time');
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            alert('No Product Remove!!')
        }
    }
    return (
        <div>
            <div className="m my-3" style={{ display: 'flex' }}>
                <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.imgpath}`} className="card-img-top" alt="..." style={{ height: '5vh', width: '5vw' }} />

                <div className='py-1' style={{ display: 'flex',justifyContent:'space-between', width:'95%' }}>
                    <div style={{display:'flex'}}>
                        <p className='m-2'>{props.product_name}</p>
                        <p className='m-2'>{props.description}</p>

                        <p className="text-success m-2" style={{ marginRight: '10px' }}>₹{(props.product_price - ((props.product_price * props.discount) / 100))}</p>
                        <p className=" m-2" style={{ textDecoration: 'line-through', Color: '#878787' }}>₹{props.product_price}</p>
                        <p className="text-primary m-2" style={{ marginRight: '10px' }}>Qty {props.quantity}</p>
                        <p className="text-success m-2" style={{ marginRight: '10px', }}>{props.discount} % off</p>
                    </div>
                    <div className="icons">
                        <button className='btn btn-danger' onClick={() => removeProductFormCart(product_id)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
