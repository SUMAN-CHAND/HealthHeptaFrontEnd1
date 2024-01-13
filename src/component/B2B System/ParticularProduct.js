import React, { useState, useEffect } from 'react'
import product from '../../img/medicalproduct.webp'
import ProductCardForList from '../ProductCardForList'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ParticularProduct() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

    const param = useParams();
    const product_id = param.product_id;
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    let productActualQuantity;

    useEffect(() => {
        axios.get(`http://localhost:8081/b2b/addtocart/${product_id}`).then((res) => {
            setProducts(res.data);


        })
    }, [])

    // console.log(products)

    const haldelClick = () => {
        console.log('click')
        axios.post(`http://localhost:8081/b2b/addtocart/${product_id}/${quantity}`)
            .then(res => {
                if (res.data !== null) {
                    // success();
                    navigate('/b2b/cart');
                }
                else if (res.data === null) {
                    // danger();
                }

            })
            .catch(err => console.log(err));
    }
    // const haldelOrderClick =()=>{
    //     axios.post(`http://localhost:8081/addtocart/${product_id}`)
    //     .then(res => {
    //         console.log ('click')
    //         navigate('/cart');
    //     })
    //     .catch(err => console.log(err));
    // }
    // productActualQuantity = products[0].product_quantity;


    if (products[0] !== undefined) {
        productActualQuantity = products[0].product_quantity;
        // console.log(products[0].product_quantity)
    }

    // Quantity State
    const [quantity, setQuantity] = useState(1);

    // Increase Quantity
    const AddItems = () => setQuantity(quantity => quantity + 1);

    // Decrease Quantity
    const DecreaseItems = () => {
        if (quantity > 0) setQuantity(quantity => quantity - 1);
    };

    return (
        <div>
            <div className="product" style={{ overflowX: 'hidden', backgroundColor: 'gainsboro' }}>
                <div className="row particular-product" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='product-details col-6 m-1' style={{ display: 'flex' }}>
                        <div className="col-5 mt-3 " style={{ marginLeft: '1vw' }}>
                            <div className="productimage m-2" style={{ backgroundColor: 'white', borderRadius: '5px', padding: '2px 0px 43px 0px' }}>
                                <div>
                                    <img src={product} alt="" style={{ width: '19vw', padding: '2vw' }} />
                                </div>
                                <div className='spall-image mt-3 m-2'>
                                    <img src={product} alt="" className='mx-1' style={{ width: '5vw' }} />
                                    <img src={product} alt="" style={{ width: '5vw' }} />
                                    <img src={product} alt="" className='mx-1' style={{ width: '5vw' }} />

                                </div>
                            </div>
                        </div>
                        <div className="col-7  mt-4  ">
                            {products.map(product => (

                                <div key={product.id} className='productdetail p-2  shadow' style={{ borderRadius: '5px', backgroundColor: 'white' }}>
                                    <h2>{product.product_name}</h2>
                                    <p>{product.description}</p>
                                    <hr />
                                    <h5>₹ {product.product_price - ((product.product_price * product.discount) / 100)}</h5>
                                    <h5 style={{ textDecoration: 'line-through', Color: '#878787' }}>₹ {product.product_price} </h5>

                                    {
                                        productActualQuantity !== 0 ? <>
                                            <span style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                                                {

                                                    productActualQuantity > quantity ? <>
                                                        <h5 className='px-2'>Qty</h5>
                                                        <p style={{ display: 'flex' }}>
                                                            <span className='px-2' onClick={DecreaseItems}><svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" /></svg></span><span>
                                                                <h5>{quantity}</h5>
                                                            </span>
                                                            <span onClick={AddItems} className='px-2'><svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg></span> </p>

                                                    </> : <>
                                                        <h5 className='px-2 text-danger'>Qty</h5>
                                                        <p style={{ display: 'flex' }}>
                                                            <span className='px-2' onClick={DecreaseItems}><svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" /></svg></span><span>
                                                                <h5>{quantity}</h5>
                                                            </span>
                                                            <span disabled={true} className='px-2'><svg tyle={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg></span>
                                                        </p>
                                                        <br />
                                                        <p className='text-danger' style={{height:'20px',flexBasis:'100%'}}>Product Out Of Stock</p>

                                                    </>
                                                }
                                            </span>
                                            <button onClick={haldelClick} type='submit' className='btn m-2' style={{ backgroundColor: '#0cbea9' }}>Add To Cart</button>

                                        </> : <>
                                            <p className='text-danger'>Product Out Of Stock</p>
                                            <button type='' disabled={true} className='btn m-2' style={{ backgroundColor: '#0cbea9' }}>Add To Cart</button>

                                        </>

                                    }

                                    <p>Inclusive of all taxes</p>
                                    {/* <button onClick={haldelOrderClick} type='submit' className='btn' style={{ backgroundColor: '#0cbea9' }}>Order Now</button> */}
                                    <p className='my-2'>%Offer%</p>
                                    <p className='my-2'>{product.discount}% Off</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-6 products m-1" style={{ width: '40vw', marginTop: '2rem', backgroundColor: 'white', borderRadius: '5px' }}>

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
