import React, { useEffect, useState } from 'react'
import productimg from '../../img/madicalProduct.avif'
import {  useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
export default function ViewProductModal() {
    const pStyle = {
        display: 'flex',
        alignItems: 'center',

    }
    const [product, setProduct] = useState([]);
    const param = useParams();
    var product_id = param.product_id;
    useEffect(() => {
        axiosClient.get(`/superadmin/orders/product/${product_id}`)
            .then(res => {
                if (res.data) {
                    setProduct(res.data[0]);
                    console.log(product)
                }
            })
            .catch(err => {
                console.log(err)
            })

    },[])
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/superadmin' , { state: { loggedIn: true } });
    }

    return (

        <>
            <div className="container mt-4 " style={{ minHeight: '50vh' }}>
                <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='modal-img mx-3 mb-3' style={{ width: '15vw', marginBottom: '2vh' }} src={productimg} alt="" />
                    <div className="products  mx-3 mb-3">
                        <h2 className=''>Product Details</h2>
                        <hr />
                        <span style={pStyle}>
                            <p className='mx-2'>Product Id : </p> <p>{product.product_id}</p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Product Name : </p> <p>{product.product_name}</p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Product Price : </p> <p>{product.product_price} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Product Category : </p> <p>{product.category} </p>
                        </span>
                        <span style={pStyle}>
                            <p className='mx-2'>Discount : </p> <p>{product.discount} </p>
                        </span>
                    </div>
                </div>
                <div className="button">
                    <button className='btn btn-primary' onClick={handleClick} style={{ width: '20%',cursor:'pointer' }}>Back</button>
                </div>
            </div>
        </>

    )
}
