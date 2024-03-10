import React, { useState, useEffect } from 'react';
import CartItemCard from './CartItemCard'
import { useNavigate } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import axiosClient from './axiosClient';
import ProductCard from './ProductCard';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import ChoosePrimaryAddressByUser from './ChoosePrimaryAddressByUser';
import UploadPrescription from './UploadPrescription';
export default function OrderPage() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1150 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 1150, min: 700 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 700, min: 450 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 2
        }
    };
    const [products, setProducts] = useState([])
    const [productsImage, setProductsImage] = useState([])
    const [isDrug, setIsDrug] = useState(false)
    const [user, setUser] = useState({});
    const [userAddress, setUserAddress] = useState({});
    const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);
    const [values, setValues] = useState({
        prescriptionId: null,
    })
    useEffect(() => {
        axiosClient.get(`/cart`).then((res) => {
            if (res.data !== null) {
                setProducts(res.data[0])
                setProductsImage(res.data[1])
            } else {
                console.log("no product present")
            }

        })
    }, [])
    useEffect(() => {
        axiosClient.get(`/profile`).then((response) => {
            setUser(response.data[0]);
            setUserAddress(response.data[1])
        });
    }, []);

    useEffect(() => {
        axiosClient.get(`/cart/drug`)
            .then(response => {
                // Handle response
                if (response.data[0].no > 0) {
                    setIsDrug(true)
                }

            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, [])
    let totalPrice = 0;
    let totalActusalPrice = 0;
    let TotalCgst = 0;
    let TotalSgst = 0;
    let totalNumofitem;
    if (products) {
        totalNumofitem = products.length;

    }
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
    let totalGst = TotalCgst + TotalSgst;
    const [coupon, setCoupon] = useState();
    const navigate = useNavigate();
    const Amount = totalActusalPrice - totalPrice + totalGst;
    // console.log(Amount)
    const [value, setValue] = useState({
        amount: Amount
    });
    const handleImageUpload = (imageId) => {
        setValues({ ...values, prescriptionId: imageId });
        setPrescriptionUploaded(true)
    };
    let PlaceOrderHandle = (e) => {
        if (isDrug) {
            console.log(prescriptionUploaded)
            if (prescriptionUploaded) {

                navigate('/orders',
                    {
                        state: {
                            totalActusalPrice: totalActusalPrice,
                            totalPrice: totalPrice,
                            totalNumofitem: totalNumofitem,
                            totalGst: totalGst,
                            amount: Amount,
                            prescriptionId: values.prescriptionId
                        }
                    })

            }
            else {
                alert("You have to add your Prescription Upload!!");
            }
        } else {
            navigate('/orders',
                {
                    state: {
                        totalActusalPrice: totalActusalPrice,
                        totalPrice: totalPrice,
                        totalNumofitem: totalNumofitem,
                        totalGst: totalGst,
                        amount: Amount
                    }
                })

        }
    }
    let NoProductPresent = (e) => {

        const response = window.confirm("Cart is epmty !! Please add some Products !!");
        if (response) {
            navigate('/')
        }

    }

    // setValue({
    //     totalActusalPrice: totalActusalPrice,
    //     totalPrice: totalPrice
    // })
    const [suggestedProducts, setSuggestedProducts] = useState([]);
    const [suggestedProductsimage, setSuggestedProductsImages] = useState([]);
    const [suggestedAllProducts, setSuggestedAllProducts] = useState([]);
    const [suggestedAllProductsImg, setSuggestedAllProductsImages] = useState([]);


    try {
        // if (user.City === undefined) {
        useEffect(() => {
            axiosClient.get(`/product/suggestedProducts`).then((res) => {
                // Handle response
                if (res.data !== null) {
                    setSuggestedProducts(res.data[0])
                    setSuggestedProductsImages(res.data[1])
                }
                // console.log(res.data);
            })
                .catch(err => {
                    // Handle errors
                    console.error(err);
                });

        }, [])
        // } else {
        useEffect(() => {
            axiosClient.get(`/product`).then((res) => {

                // Handle response
                if (res.data !== null) {
                    setSuggestedAllProducts(res.data[0]);
                    setSuggestedAllProductsImages(res.data[1])

                }
                // console.log(res.data);
            })
                .catch(err => {
                    // Handle errors
                    console.error(err);
                });

        }, [])
        // }
    } catch (error) {
        console.log(error)
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);

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
    const customStyles = {
        content: {
            overflowY: 'hidden',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
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
                                <button className='btn btn-primary' onClick={openModal}>Change</button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <ChoosePrimaryAddressByUser closeTheModal={closeModal} />
                                </Modal>
                            </div>
                            <div className="cart-item container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                {products !== undefined ? <>
                                    {products.map(product => (
                                        <div key={product.product_id}>
                                            {productsImage.map((img) => (
                                                <div key={img.id}>
                                                    {parseInt(product.productImageId) === img.id ?
                                                        <>
                                                            <CartItemCard imgpath={img.path} product_name={product.product_name} description={product.description} product_price={product.product_price} product_id={product.product_id} discount={product.discount} quantity={product.quantity} />

                                                        </>
                                                        : <></>}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </> : <>
                                    <p>No Product in Cart</p>
                                </>}
                            </div>
                            {isDrug ?
                                <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                    <h5>Add Your Prescription </h5>
                                    <div className="btn shadow  m-2" style={{ border: '2px solid #e2e2e2' }}>
                                        <UploadPrescription onImageUpload={handleImageUpload} />
                                    </div>
                                </div>
                                :
                                ''
                            }
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
                                    <p className=' text-success mx-5' > -₹{totalPrice}</p>
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
                                    <p className='mx-5 text-success'>₹{totalActusalPrice - totalPrice + delivaryCharge + totalGst}</p>
                                </div>
                                <>
                                    {products ?
                                        <button onClick={(e) => PlaceOrderHandle(e)} className='btn my-2' style={{ backgroundColor: 'orange', cursor: 'pointer' }}>Place Order</button> :

                                        <button onClick={(e) => NoProductPresent(e)} className='btn my-2' style={{ backgroundColor: 'orange', cursor: 'pointer' }}>Place Order</button>
                                    }
                                </>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' container m-2 p-2 more-product' style={{ backgroundColor: '#fff' }}>
                    <h5>|| Add More Peoduct ||</h5>
                    {suggestedProducts ? <>
                        <Carousel responsive={responsive}>
                            {suggestedProducts.filter(product => product.category.toLowerCase() === 'madicine').map(fproduct => (
                                <div key={fproduct.product_id}>
                                    {suggestedProductsimage.map((img) => (
                                        <div key={img.id}>
                                            {parseInt(fproduct.productImageId) === img.id ?
                                                <>
                                                    <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                                                </>
                                                : <></>}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </Carousel>

                    </> : <>
                        <Carousel responsive={responsive}>
                            {suggestedAllProducts.map(fproduct => (
                                <div key={fproduct.product_id}>
                                    {suggestedAllProductsImg.map((img) => (
                                        <div key={img.id}>
                                            {parseInt(fproduct.productImageId) === img.id ?
                                                <>
                                                    <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                                                </>
                                                : <></>}

                                            {/* <p>{img.name}</p> */}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </Carousel>
                    </>}
                </div>
            </div>
        </div >
    )
}
