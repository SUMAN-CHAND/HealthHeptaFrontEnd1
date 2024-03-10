import React, { useState, useEffect } from 'react'
import product from '../img/medicalproduct.webp'
import ProductCardForList from './ProductCardForList'
import {  useParams } from 'react-router-dom'
import axiosClient from './axiosClient';
export default function ParticularProductOfOrderStatus() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials= true;
    const param = useParams();
    const product_id = param.product_id;
    const order_id = param.order_id;
    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosClient.get(`/order/${order_id}/product/${product_id}`).then((res)=>{
            setProducts(res.data);
        })
    }, [])
    return (
        <div>
            <div className="product" style={{ overflowX: 'hidden' }}>
                <div className="row" style={{ display: 'flex' }}>
                    <div className="col-3">
                        <div className="productimage p-5">
                            <img src={product} alt="" style={{ width: '25vw', height: '35vh' }} />
                        </div>
                    </div>
                    <div className="col-4 m-4 p-5  ">
                        {products.map(product => (

                            <div key={product.id} className='productdetail p-2 ' style={{ borderRadius: '5px', height: '35vh' }}>
                                <h2>{product.product_name}</h2>
                                <p>250g</p>
                                <hr />
                                <h5>₹ {product.product_price}</h5>
                                <p>Inclusive of all taxes</p>
                                <p className='my-2'>%Offer%</p>
                            </div>
                        ))}
                    </div>
                    <div className="products" style={{ width: '35vw', marginTop: '2rem' }}>
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                        <ProductCardForList />
                    </div>
                </div>
            </div>
        </div>
    )
}
