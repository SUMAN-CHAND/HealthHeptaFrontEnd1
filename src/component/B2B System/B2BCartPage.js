import React, { useState, useEffect } from 'react';
import CartItemCard from '../CartItemCard'
import { Link, useNavigate } from 'react-router-dom'
import PopularProductCard from '../PopularProductCard'

import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import axios from 'axios';

export default function B2BCartPage() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const [products, setProducts] = useState([])
    const [isDrug, setIsDrug] = useState(false)
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});

    // const [value, setValue] = useState({
    //     totalActusalPrice: 0,
    //     totalPrice: 0
    // })

    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/b2b/cart`).then((res) => {
     
            if (res.data !== null) {
                console.log(res.data)
                setProducts(res.data)
            } else {
                console.log("no product present")
            }

        })
    }, [0])
    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/b2b/cart/profile`).then((response) => {
            setUser(response.data[0]);
            setUserAddress(response.data[1])
        });
    }, [0]);
   
    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/cart/drug`)
          .then(response => {
            // Handle response
            if(response.data[0].no >0){
                setIsDrug(true)
            }
           
          })
          .catch(err => {
            // Handle errors
            console.error(err);
          });
      }, [])
//    console.log(products)
    let totalPrice = 0;
    let totalActusalPrice = 0;
    let TotalCgst = 0;
    let TotalSgst = 0;
    const totalNumofitem = products.length;
    if (totalNumofitem > 0) {
        let totalPriceArray = products.map((product => {
            return ((((product.product_price * product.discount) / 100)) * product.quantity);
        }))
        totalPrice = totalPriceArray.reduce((val1, val2) => {
            return val1 + val2;
        }, 0)
    }
    if (totalNumofitem > 0) {
        let totalPriceArray = products.map((product => {
            return (product.product_price * product.quantity);
        }))
        totalActusalPrice = totalPriceArray.reduce((val1, val2) => {
            return val1 + val2;
        }, 0)
    }
    if (totalNumofitem > 0) {
        let TotalSgstPerProduct = products.map((product => {
            return ((((product.product_price * product.sgst) / 100)));
        }))
        let TotalCgstPerProduct = products.map((product => {
            return ((((product.product_price * product.cgst) / 100)));
        }))
        TotalSgst = TotalSgstPerProduct.reduce((val1, val2) => {
            return val1 + val2;
        }, 0)
        TotalCgst = TotalCgstPerProduct.reduce((val1, val2) => {
            return val1 + val2;
        }, 0)
    }
    // console.log(TotalCgst)
    // console.log(TotalSgst)
    let totalGst  = TotalCgst+TotalSgst;
    console.log(totalGst)
    const [coupon ,setCoupon] = useState();
    const navigate = useNavigate();
    const Amount = totalActusalPrice - totalPrice + totalGst;
    console.log(Amount)
    const[value ,setValue] = useState({
        amount:Amount
    });
    useEffect(() => {
        // setValue({
        //     amount: Amount
        // })
        // setValue(Amount)
        console.log(value)
        axios.post(`http://${process.env.REACT_APP_HOST}:8081/cart/get-coupons`, value)
            .then(res => {
                console.log(res.data)
                if (res.data !== null) {
                    setCoupon(res.data);
                }else{
                    setCoupon('No Coupon Applicable')
                }
                
            })
            .catch(err => console.log(err));

    }, [])

    const PlaceOrderHandle = (e) => {
        
       
        navigate('/b2b/order',
            {
                state: {
                    totalActusalPrice: totalActusalPrice,
                    totalPrice: totalPrice,
                    totalNumofitem: totalNumofitem,
                    totalGst:totalGst,
                    amount:Amount
                }
            })
    }

    // setValue({
    //     totalActusalPrice: totalActusalPrice,
    //     totalPrice: totalPrice
    // })

    const delivaryCharge = 25;
    return (
        <div style={{ backgroundColor: '#8a858521' }}>
            <div className="container orders" >
                <div className="row ">
                    <div className='cartPage' style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="col-8 m-4 order"  >

                            <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                <h4>Cart Product</h4>
                            </div>
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
                                <>
                                    <p>Delevary To : </p>
                                    <p>{user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.Pin} </p>
                                </>

                                <button className='btn btn-primary'>Change</button>
                            </div>
                            <div className="cart-item container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                {products.map((product, index) => (
                                    <div key={index}>
                                        <CartItemCard product_name={product.product_name} product_price={product.product_price} product_id={product.product_id} discount={product.discount} quantity={product.quantity} />
                                    </div>
                                    
                                ))}
                            </div>
                            
                        {isDrug?
                        <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                            <h5>Add Your Prescription </h5>
                           <div className="btn shadow  m-2" style={{border:'2px solid #e2e2e2'}}><input type="file" name="prescription" id="prescription" /></div> 
                        </div>
                            :
                            ''
                        }

                        </div>
                        <div className="col-4 m-4 order-detail" >
                            <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                <h4>PRICE DETAILS</h4>
                                <hr />
                                <div className="price" style={{ display: 'flex' }}>

                                    <p className='mx-5'>Price ({totalNumofitem} items)</p>
                                    <p className='mx-5'>₹ {totalActusalPrice}</p>


                                </div>
                                <div className="discount" style={{ display: 'flex' }}>
                                    <p className='mx-5'>Discount  &nbsp;  &nbsp;  &nbsp;  &nbsp; </p>
                                    <p className=' text-success mx-5' > -₹{totalPrice}</p>
                                </div>
                                <div className="discount" style={{ display: 'flex' }}>
                                    <p className='mx-5'>GST(sgst+cgst)</p>
                                    <p className=' text-success mx-5' >₹{totalGst}</p>
                                </div>
                                <div className="price" style={{ display: 'flex' }}>
                                    <p className='mx-5'>Delivery Charges </p>
                                    <p className='mx-5 text-success'>₹{delivaryCharge}</p>
                                </div>

                                <hr />
                                <div className="price" style={{ display: 'flex' }}>
                                    <p className='mx-5'>Total Amount  </p>
                                    <p className='mx-5 text-success'>₹{totalActusalPrice - totalPrice + delivaryCharge + totalGst}</p>
                                </div>
                               

                                <> <button onClick={() => PlaceOrderHandle()} className='btn my-2' style={{ backgroundColor: 'orange' }}>Place Order</button></>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' container m-2 p-2 more-product' style={{ backgroundColor: '#fff' }}>
                    <h5>|| Add More Peoduct ||</h5>
                    <Carousel responsive={responsive}>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                        <div><PopularProductCard /> </div>
                    </Carousel>
                </div>
            </div>

        </div >
    )
}
