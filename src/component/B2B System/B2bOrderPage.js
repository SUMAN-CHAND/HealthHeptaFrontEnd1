import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import SuccfullyOrderplaceModal from '../SuccfullyOrderplaceModal';
import { ToastContainer, toast } from 'react-toastify';
import axiosClient from '../axiosClient';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
export default function B2bOrderPage() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;

    const success = () => toast.success('Order Placed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    const danger = () => toast.error('Error!! ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const [modalIsOpen, setIsOpen] = useState(false);

    

    const [products, setProducts] = useState([])
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const [couponDetails, setcouponDetails] = useState([])
    const [couponResult, setCouponResult] = useState(false)
    const [coupon, setCoupon] = useState([]);
    const [userRole, setuserRole] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/cart`);
            const jsonResult = await result.json();
            setProducts(jsonResult);

        };
        fetchData();
    }, []);

    useEffect(() => {
        axiosClient.get(`/b2b/cart/profile`).then((response) => {
            setUser(response.data[0]);
            setUserAddress(response.data[1]);
            setuserRole(response.data[2]);

        });
    }, []);
    if (userRole === 'b2b_employee') {
        // console.log('b2b_employee')
        // useEffect(() => {
            axiosClient.get(`/b2b/b2b-employee/profile`).then((response) => {
                // console.log(response.data);
                setUser(response.data[0]);
                setUserAddress(response.data[1]);
                setuserRole(response.data[2]);

            });
        // }, []);
    }
    const navigate =useNavigate();


    const location = useLocation();
    let stateData = location.state
    // console.log(location.state)
    var totalActusalPrice = stateData.totalActusalPrice;
    var discount = stateData.totalPrice;
    var totalNumofitem = stateData.totalNumofitem;
    var amount = stateData.amount
    var totalGst = stateData.totalGst
    const [couponAvailable, setCouponAvailable] = useState(false);
    const [amounts, setAmount] = useState({
        amount: amount
    })
    useEffect(() => {

        console.log(amount)
        axiosClient.post(`/cart/get-coupons`, amounts)
            .then(res => {
                console.log(res.data)
                if (res.data !== null) {
                    setCoupon(res.data);
                    setCouponAvailable(true)
                } else {
                    setCoupon('No Coupon Applicable')
                }

            })
            .catch(err => console.log(err));

    }, [])

    // console.log(coupon[0])


    const delivaryCharge = 25;

    const [values, setValues] = useState({
        payment_type: '',
        total_amount: ''
    })
    let total_amountAfterCouponApply = 0;
    const total_amount = (totalActusalPrice - discount + delivaryCharge + totalGst);
    let pay_amount = 0;
    pay_amount = amount + delivaryCharge;
    const handleInput = (e) => {
        setValues({
            payment_type: e.target.value,
            total_amount: pay_amount
        })
    }
    const [couponValue, setCouponValue] = useState({
        coupon: ''
    })
    const handleCouponInput = (e) => {
        setCouponValue({
            coupon: e.target.value
        })
    }
    const applyCoupon = (event) => {
        console.log('click')
        axiosClient.post(`/orders/coupon`, couponValue)
            .then(res => {
                if (res.data !== null) {
                    success();
                    setcouponDetails(res.data[0]);
                    setCouponResult(true)
                }
                else if (res.data === null) {
                    alert('Coupon Code Dose not match!!');
                }
                else {
                    danger();
                }
            })
            .catch(err => console.log(err));
    }
    // console.log(couponDetails.discount_percentage)
    const total_DiscountAfterCouponApply = ((total_amount * couponDetails.discount_percentage) / 100);
    total_amountAfterCouponApply = (total_amount - ((total_amount * couponDetails.discount_percentage) / 100));

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/b2b/orders`, values)
            .then(res => {
                if (res.data !== null) {
                    success();
                    navigate('/b2b/order/bill',
                    {
                        state: {
                            orderId: res.data[0],
                            productIds: res.data[1]
                        }
                    });
                }
                else if (res.data === null) {
                    danger();
                }
                else {
                    danger();
                }
            })
            .catch(err => console.log(err));
        success();
    }

    return (
        <div style={{ backgroundColor: '#8a858521' }}>
            <div className="container orders-payment" >
                <div className="row ">
                    <div className='order_payment_page' style={{ display: 'flex',alignItems:'center' }}>
                        <div className="col-8 m-4 order-payment" >
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                                <><div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>1</p>
                                    <p>Login</p>

                                </div>
                                    <p>Mobile No :- {user&&user.phone} </p>
                                </>

                            </div>
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                                <><div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>2</p>
                                    <p>Delevary To :</p>

                                </div>
                                    <p>{user&&user.name}, {user&&user.Village},{user&&user.P_O},{user&&user.City},{user&&user.district},{user&&user.State},{user&&user.Pin} </p>
                                </>

                            </div>
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                                <><div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>3</p>
                                    <p>Order Summary : </p>

                                </div>

                                </>

                                <Link to='/b2b/cart'> <button className='btn btn-primary'>View</button></Link>
                            </div>
                            <div className=" container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                <div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>4</p>
                                    <p>Payment Option : </p>
                                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                        <select
                                            required
                                            onChange={handleInput} name='payment_type'
                                            style={{ width: '125%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                                            <option value="select">Select</option>
                                            <option value="cod">Cash On Delevary</option>
                                            <option value="cod">online Bankng</option>
                                        </select>
                                    </div>
                                </div>

                                <button type='submit' onClick={handleSubmit} className='btn btn-success mx-5'>Place Order</button>
                                
                                <button type='restart' className='btn btn-warning'>Clear</button>
                            </div>

                            {couponAvailable ? <>
                                <div className="conatainer m-2 p-4" style={{ backgroundColor: 'white' }}>
                                    <p className='mx-5'> <span role="img">You have won a Coupon  </span></p>
                                    <div className="price m-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <p className='mx-5'>Coupon Code </p>
                                        <p className='mx-5 text-success'> {coupon[0].coupon_code}</p>
                                    </div>
                                    <div className="conatainer price m-2" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <p className='mx-5'>Discount  </p>
                                        <p className='mx-5 text-success'>{coupon[0].discount_percentage}%</p>
                                    </div>
                                    <hr />
                                </div>
                            </> : <>

                            </>}

                        </div>
                        <div className="col-4 m-4 order-detail" >
                            <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                <h4>PRICE DETAILS</h4>
                                <hr />
                                <div className="price" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                    <p className='mx-5'>Price ({totalNumofitem} items)</p>
                                    <p className='mx-5'>₹ {totalActusalPrice}</p>


                                </div>
                                <div className="discount" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className='mx-5'>Discount  &nbsp;  &nbsp;  &nbsp;  &nbsp; </p>
                                    <p className=' text-success mx-5' > -₹{discount}</p>
                                </div>
                                <div className="discount" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className='mx-5'>GST(sgst+cgst)</p>
                                    <p className=' text-success mx-5' >₹{totalGst}</p>
                                </div>
                                <div className="price" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className='mx-5'>Delivery Charges </p>
                                    <p className='mx-5 text-success'>₹{delivaryCharge}</p>
                                </div>

                                <hr />
                                <div className="price" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p className='mx-5'>Total Amount  </p>
                                    <p className='mx-5 text-success'>₹{total_amount}</p>
                                </div>
                                <section>


                                </section>
                                <section>
                                    {couponResult ? <>
                                        <div className="conatainer">
                                            <div className="price" style={{ display: 'flex' }}>
                                                <p className='mx-5'>Additional Discount </p>
                                                <p className='mx-5 text-success'>- ₹{total_DiscountAfterCouponApply}</p>
                                            </div>
                                            <hr />
                                            <div className="price" style={{ display: 'flex' }}>
                                                <p className='mx-5'>Final Price  </p>
                                                <p className='mx-5 text-success'>₹{total_amountAfterCouponApply}</p>
                                            </div>
                                        </div>
                                    </> : <>

                                    </>}

                                </section>
                                <div className='coupon'>
                                    <input type="text" onChange={handleCouponInput} name='coupon' className='m-4' style={{ width: '60%', paddingLeft: '5px' }} placeholder='Enter Coupon Code' />
                                    <button className='btn' onClick={applyCoupon} style={{ backgroundColor: '#07dbc1' }}>Apply</button>
                                </div>

                                <Link ><button type='submit' onClick={handleSubmit} className='btn my-2' style={{ backgroundColor: 'orange' }}>Place Order</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
