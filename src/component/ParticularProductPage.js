import React, { useState, useEffect } from 'react'
import product from '../img/medicalproduct.webp'
import ProductCardForList from './ProductCardForList'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from './axiosClient';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
export default function ParticularProductPage() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const param = useParams();
    const product_id = param.product_id;
    const [products, setProducts] = useState([])
    const [image, setImage] = useState([])
    const navigate = useNavigate();
    const [ProductForLists, setProductForLists] = useState([])
    const [imageLists, setImageLists] = useState([])
    const [user, setUser] = useState({});
    useEffect(() => {
        axiosClient.get(`/profile`).then((response) => {
            setUser(response.data[0]);
        });
    }, []);
    useEffect(() => {
        axiosClient.get(`/addtocart/${product_id}`).then((res) => {
            setProducts(res.data[0]);
            setImage(res.data[1]);
        })
    }, [])
    useEffect(() => {
        axiosClient.get(`/product`).then((res) => {
            setProductForLists(res.data[0]);
            setImageLists(res.data[1]);
        })
    }, [])
    const LogedIn = sessionStorage.getItem('LogedIn');
    const userId = sessionStorage.getItem('user_id');
    const haldelClick = () => {
        if (LogedIn) {
            axiosClient.post(`/addtocart/${product_id}/${quantity}`)
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
        else {
            const redirectUrl = `/addtocart/${product_id}/`;
            sessionStorage.setItem('redirectUrl', redirectUrl);
            navigate('/login');
        }
    }
    // Quantity State
    const [quantity, setQuantity] = useState(1);
    // Increase Quantity
    const AddItems = () => setQuantity(quantity => quantity + 1);
    // Decrease Quantity
    const DecreaseItems = () => {
        if (quantity > 1) setQuantity(quantity => quantity - 1);
    };
    return (
        <div>
            <div className="product" style={{ overflowX: 'hidden' }}>
                <div className="row particular-product" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#8080804f', overflow: 'scroll' }}>
                    <div className='product-details col-6' style={{ display: 'flex', backgroundColor: 'white', height: '81vh' }}>
                        <div className="col-5 mt-3 " style={{ marginLeft: '1vw' }}>
                            <div className="productimage ">
                                {image.map(img => (

                                    <img src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`} alt="" style={{ width: '25vw', height: '35vh' }} />
                                ))}
                            </div>
                            <div>
                                {products.map(product => (
                                    <p>{product.fulldesctiption}</p>
                                ))}

                            </div>
                        </div>
                        <div className="col-7  mt-4  ">
                            {products.map(product => (

                                <div key={product.id} className='productdetail p-2 ' style={{ borderRadius: '5px', height: '35vh' }}>
                                    <h2>{product.product_name}</h2>
                                    <p>{product.description}</p>
                                    <hr />
                                    <h5>₹ {product.product_price - ((product.product_price * product.discount) / 100)}</h5>
                                    <h5 style={{ textDecoration: 'line-through', Color: '#878787' }}>₹ {product.product_price}</h5>
                                    <span style={{ display: 'flex', justifyContent: 'center' }}>
                                        <h5 className='px-2'>Qty</h5>
                                        <p style={{ display: 'flex' }}>
                                            <span className='px-2' onClick={DecreaseItems}>
                                                <FaMinus />
                                            </span>
                                            <span>
                                                <h5>{quantity}</h5></span>  <span onClick={AddItems} className='px-2'>
                                                <FaPlus />
                                            </span>
                                        </p>
                                    </span>
                                    <p>Inclusive of all taxes</p>
                                    <button onClick={haldelClick} type='submit' className='btn m-2' style={{ backgroundColor: '#0cbea9' }}>Add To Cart</button>
                                    <p className='my-2'>%Offer%</p>
                                    <p className='my-2'>{product.discount}% Off</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-5 products" style={{ backgroundColor: 'white' }}>
                        <h5 className='m-2 p-2'>Suggected Medicine</h5>
                        {ProductForLists.filter(product => product.category.toLowerCase() === 'madicine').map(fproduct => (
                            <div key={fproduct.product_id}>
                                {imageLists.map((img) => (
                                    <div key={img.id}>
                                        {parseInt(fproduct.productImageId) === img.id ?
                                            <>
                                                <ProductCardForList imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                                            </>
                                            : <></>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
