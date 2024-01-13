import React from 'react'
import product2 from '../img/medicalproduct.webp'


export default function CartItemCard(props) {
    return (
        <div>
            <div className="m my-3" style={{ display: 'flex' }}>
                <img src={product2} alt="" style={{ height: '5vh', width: '5vw' }} />
                <span className='py-1' style={{ display: 'flex' }}>
                    <p className='m-2'>{props.product_name}</p>
                    <p className='m-2'>250ml</p>

                    <p className="text-success m-2" style={{ marginRight: '10px' }}>₹{(props.product_price-((props.product_price * props.discount)/100))}</p>
                    <p className=" m-2" style={{ textDecoration: 'line-through', Color: '#878787' }}>₹{props.product_price}</p>
                    <p className="text-primary m-2" style={{ marginRight: '10px' }}>Qty {props.quantity}</p>
                    <p className="text-success m-2" style={{ marginRight: '10px', }}>{props.discount} % off</p>
                    <p className="text-success m-2" style={{ marginRight: '10px', }}> Expected Delivery Date :- {props.expected_delivery_date} % off</p>
                </span>
            </div>
        </div>
    )
}
