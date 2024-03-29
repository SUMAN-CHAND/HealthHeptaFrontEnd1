import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from 'react-modal';
import SuccfullyOrderplaceModal from './SuccfullyOrderplaceModal';
// import io from 'socket.io-client';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axiosClient from './axiosClient';
import ChoosePrimaryAddressByUser from './ChoosePrimaryAddressByUser';
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
export default function OrderPaymentPage() {
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


    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        setIsOpen(false);
    }

    const [products, setProducts] = useState([])
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const [couponDetails, setcouponDetails] = useState([])
    const [couponResult, setCouponResult] = useState(false)
    const [coupon, setCoupon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/cart`);
            const jsonResult = await result.json();
            setProducts(jsonResult);

        };
        fetchData();
    }, []);
    useEffect(() => {
        axiosClient.get(`/profile`).then((response) => {
            setUser(response.data[0]);
            setUserAddress(response.data[1]);
        });
    }, []);
    const location = useLocation();
    let stateData = location.state
    // console.log(location.state)
    var totalActusalPrice = stateData.totalActusalPrice;
    var discount = stateData.totalPrice;
    var totalNumofitem = stateData.totalNumofitem;
    var amount = stateData.amount
    var totalGst = stateData.totalGst
    var prescriptionId = stateData.prescriptionId
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
    const delivaryCharge = 25;
    const [values, setValues] = useState({
        payment_type: '',
        total_amount: '',
        prescriptionId: ''
    })
    let total_amountAfterCouponApply = 0;
    const total_amount = (totalActusalPrice - discount + delivaryCharge + totalGst);
    let pay_amount;
    if (total_amountAfterCouponApply !== 0) {
        pay_amount = total_amountAfterCouponApply;
    } else {
        pay_amount = total_amount;
    }
    const handleInput = (e) => {
        setValues({
            payment_type: e.target.value,
            total_amount: pay_amount,
            prescriptionId: prescriptionId
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
    console.log(couponDetails.discount_percentage)
    const total_DiscountAfterCouponApply = ((total_amount * couponDetails.discount_percentage) / 100);
    total_amountAfterCouponApply = (total_amount - ((total_amount * couponDetails.discount_percentage) / 100));
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/orders`, values)
            .then(res => {
                if (res.data !== null) {
                    success();
                    navigate('/order/bill',
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
    }
    const paymentTypeCheck = (event) => {
        alert("Plese select the payment method !")
    }
    return (
        <div style={{ backgroundColor: '#8a858521' }}>
            <div className="container orders-payment" >
                <div className="row ">
                    <div className='order_payment_page' style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="col-8 m-4 order-payment" >
                            <div className=" container m-2 p-2" style={{ display: 'flex', backgroundColor: '#fff' }}>
                                <>
                                    <div
                                        style={{ display: 'flex' }}>
                                        <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>1</p>
                                        <p>Mobile No :- </p>
                                    </div>
                                    <span style={{ marginLeft: '26%' }} > {user.phone}  </span>
                                </>
                            </div>
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                                <><div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>2</p>
                                    <p>Delevary To :</p>
                                </div>
                                    <p>{user.name}, {user.Village},{user.P_O},{user.City},{user.district},{user.State},{user.Pin} </p>
                                </>
                                <button className='btn btn-primary' onClick={openModal}>Change</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <ChoosePrimaryAddressByUser closeTheModal={closeModal} />
                                </Modal>                            </div>
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                                <><div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>3</p>
                                    <p>Order Summary : </p>
                                </div>
                                </>
                                <Link to='/cart'> <button className='btn btn-primary'><p>View</p></button></Link>
                            </div>
                            <div className=" container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                <div
                                    style={{ display: 'flex' }}>
                                    <p className='mx-2 p-1' style={{ backgroundColor: '#797a7b7a', borderRadius: '3px', color: 'blue' }}>4</p>
                                    <p>Payment Option <span className='text-danger'>*</span> : </p>
                                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                        <select
                                            required
                                            onChange={handleInput} name='payment_type'
                                            style={{ width: '100%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                                            <option selected >Select</option>
                                            <option value="cod">Cash On Delevary</option>
                                            <option value="cod">online Bankng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mt-2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    {values.payment_type ?

                                        <button type='submit' onClick={handleSubmit} className='btn btn-success '><p className='text-light'>Place Order</p> </button>
                                        :
                                        <button type='submit' onClick={paymentTypeCheck} className='btn btn-success '><p className='text-light'>Place Order</p> </button>
                                    }
                                </div>
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
                                <h5>PRICE DETAILS</h5>
                                <hr />
                                <div className="price" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>

                                    <p className=''>Price ({totalNumofitem} items)</p>
                                    <p className=''>₹ {totalActusalPrice}</p>
                                </div>
                                <div className="discount" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <p className=''>Discount  &nbsp;  &nbsp;  &nbsp;  &nbsp; </p>
                                    <p className=' text-success' > -₹{discount}</p>
                                </div>
                                <div className="discount" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <p className=''>GST(sgst+cgst)</p>
                                    <p className=' text-success' >₹{totalGst}</p>
                                </div>
                                <div className="price" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <p className=''>Delivery Charges </p>
                                    <p className=' text-success'>₹{delivaryCharge}</p>
                                </div>

                                <hr />
                                <div className="price" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <p className=''>Total Amount  </p>
                                    <p className='text-success'>₹{total_amount}</p>
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
                                    <button className='btn' onClick={applyCoupon} style={{ backgroundColor: '#07dbc1' }}> <p>Apply</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
