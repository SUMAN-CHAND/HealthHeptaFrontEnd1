import React, { useState, useEffect } from 'react'
import product from '../img/medicalproduct.webp'
import ProductCardForList from './ProductCardForList'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ParticularProductPage() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

    const param = useParams();
    const product_id = param.product_id;
    const [products, setProducts] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8081/addtocart/${product_id}`).then((res) => {
            setProducts(res.data);
        })
    }, [])

    const haldelClick = () => {
        axios.post(`http://localhost:8081/addtocart/${product_id}/${quantity}`)
            .then(res => {
                if (res.data !== null) {
                    // success();
                    navigate('/cart');
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
            <div className="product" style={{ overflowX: 'hidden' }}>
                <div className="row particular-product" style={{ display: 'flex' }}>
                    <div className='product-details col-7' style={{display:'flex'}}>
                        <div className="col-5 mt-3 " style={{ marginLeft: '1vw' }}>
                            <div className="productimage ">
                                <img src={product} alt="" style={{ width: '25vw', height: '35vh' }} />
                            </div>
                        </div>
                        <div className="col-7  mt-4  ">
                            {products.map(product => (

                                <div key={product.id} className='productdetail p-2 ' style={{ borderRadius: '5px', height: '35vh' }}>
                                    <h2>{product.product_name}</h2>
                                    <p>250g</p>
                                    <hr />
                                    <h5>₹ {product.product_price - ((product.product_price * product.discount) / 100)}</h5>
                                    <h5 style={{ textDecoration: 'line-through', Color: '#878787' }}>₹ {product.product_price}</h5>
                                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <h5 className='px-2'>Qty</h5>
                                        <p style={{ display: 'flex' }}><span className='px-2' onClick={DecreaseItems}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" /></svg></span><span><h5>{quantity}</h5></span>  <span onClick={AddItems} className='px-2'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg></span> </p>
                                    </span>
                                    <p>Inclusive of all taxes</p>
                                    <button onClick={haldelClick} type='submit' className='btn m-2' style={{ backgroundColor: '#0cbea9' }}>Add To Cart</button>
                                    {/* <button onClick={haldelOrderClick} type='submit' className='btn' style={{ backgroundColor: '#0cbea9' }}>Order Now</button> */}
                                    <p className='my-2'>%Offer%</p>
                                    <p className='my-2'>{product.discount}% Off</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-6 products" style={{ width: '40vw', marginTop: '2rem' }}>

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
