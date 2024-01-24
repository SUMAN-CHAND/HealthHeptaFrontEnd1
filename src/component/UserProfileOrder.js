import axios from 'axios'
import React, { useEffect, useState } from 'react'
import logo from '../img/logo.jpeg';
import { IoIosArrowForward } from "react-icons/io";
import axiosClient from './axiosClient';


export default function UserProfileOrder() {
    const [products, setProducts] = useState([]);
    const [ind_product_Images, setInd_product_Images] = useState([]);


    // const showOrders = () => {
    useEffect(() => {
        axiosClient.get(`/profile/orders`).then((res) => {
            if (res.data !== null) {
                setProducts(res.data[0]);
                setInd_product_Images(res.data[1]);
            } else {
                console.log('Product not present')
            }
        })
        // }
    }, []);
    let flag = false;
    const numOfProduct = products.length;
    if (numOfProduct > 0) {
        flag = true;
    }
    const deleteOrder = (id) => {
        // console.log('click')
        const response = window.confirm("Are you sure to Cancle the Order?");
        if (response) {
            axiosClient.delete(`/orders/${id}`)
                .then(response => {
                    console.log(response)
                    if (response.data === 'success') {
                        alert('Order Delete Successfully');
                    }
                    else if (response.data === null) {
                        console.log(response.data)
                        alert('Order cannot be canceled at this time');
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            alert('No Order Cancled')
        }

    }

    // console.log(products)

    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        // minHeight: '50vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div>
            <div className="tab-pane" id="order" role="tabpanel" aria-labelledby="list-Medicine-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className='p-2'> Your Orders</h2>
                <div className="gap" style={{ width: '100%', height: '1vh', backgroundColor: '#80808070' ,marginBottom:'25px'}}></div>
                {products.map((product, index) => (
                    <>

                        <div className="" style={{ width: '85vw', display: 'flex', flexDirection: 'initial', backgroundColor: 'white', height: '8vh', alignItems: 'center' }}>
                            {/* <img className="" src={logo} alt="Card image cap" style={{ width: '7vw', height: '5vh' }} /> */}
                            {ind_product_Images.map((img) => (
                                <div key={img.id}>
                                    {parseInt(product.productImageId) === img.id ?
                                        <>
                                            <img
                                                src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                                alt={img.name}
                                                width="50" />
                                        </>
                                        : <></>}
                                </div>
                            ))}
                            <div className="card-body" style={{ textAlign: 'left', marginLeft: '5vw' }}>

                                <h5 className="card-title">Delivary Date:- {product.expected_delivery_date}</h5>
                                <h5 className="card-text">{product.product_name}</h5>
                                {/* <h5 className="card-title">Price:- ₹{product.total_amount}</h5> */}
                                <p className="card-text">Quantity:- {product.quantity}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                            <div className="icons">
                                <button className='btn btn-danger' onClick={() => deleteOrder(product.id)}>Cancle</button>
                                {/* <IoIosArrowForward /> */}
                            </div>
                        </div>
                        <hr style={{ width: '100vw' }} />
                    </>
                ))}

                {/* <div className="" style={{width:'85vw',display:'flex',flexDirection:'initial',backgroundColor:'white',height:'8vh',alignItems:'center'}}>
                    <img className="" src={logo} alt="Card image cap" style={{width:'7vw',height:'5vh'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="icons">
                    <IoIosArrowForward />

                    </div>
                </div> */}
            </div>
        </div>
    )
}
