import React, { useState, useEffect } from 'react';
import CartItemCard from '../CartItemCard'
import { useNavigate } from 'react-router-dom'
import PopularProductCard from '../PopularProductCard'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import axiosClient from '../axiosClient';
import Modal from 'react-modal';
import ChoosePrimaryAddressByUser from '../ChoosePrimaryAddressByUser';
import { FaPlus } from 'react-icons/fa6';
export default function B2BCartPage() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const responsive = {
        superLargeDesktop: {
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
    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        paddingTop: '1vh',
        flexDirection: 'column',
        overflowX: 'auto'
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

    const [products, setProducts] = useState([])
    const [productsImage, setProductsImage] = useState([])
    const [isDrug, setIsDrug] = useState(false)
    const [user, setUser] = useState({});
    const [userRole, setuserRole] = useState();
    const [userAddress, setUserAddress] = useState({});
    const [subadminId, setSubAdminId] = useState();
    const [searchUser, setSearchUser] = useState([])
    const [subadmin, setSubAdmin] = useState([])

    useEffect(() => {
        axiosClient.get(`/b2b/cart`).then((res) => {

            if (res.data !== null) {
                setProducts(res.data[0])
                setProductsImage(res.data[1])
            } else {
                console.log("no product present")
            }

        })
    }, [])

    useEffect(() => {
        axiosClient.get(`/b2b/cart/profile`).then((response) => {
            setUser(response.data[0]);
            setUserAddress(response.data[1]);
            setuserRole(response.data[2]);
        });
    }, [0]);

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
    let totalNumofitem = 0;
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
    // console.log(totalGst)
    const [coupon, setCoupon] = useState();
    const navigate = useNavigate();
    const Amount = totalActusalPrice - totalPrice + totalGst;
    // console.log(Amount)
    const [value, setValue] = useState({
        amount: Amount
    });
    useEffect(() => {
        // console.log(value)
        axiosClient.post(`/cart/get-coupons`, value)
            .then(res => {
                // console.log(res.data)
                if (res.data !== null) {
                    setCoupon(res.data);
                } else {
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
                    totalGst: totalGst,
                    amount: Amount
                }
            })
    }

    axiosClient.get(`/superadmin/service-provider`)
        .then(response => {
            // Handle response
            setSubAdmin(response.data)
        })
        .catch(err => {
            // Handle errors
            console.error(err);
        });



    const [searchValue, setSearchValue] = useState({
        input: ''
    })

    const handleUserFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();
        const filtered = subadmin.filter((item) => {
            const name = item.name.toString().toLowerCase();
            const search = searchword.toLowerCase();
            return name.includes(search);
        });
        if (searchword === "") {
            setSearchUser([]);
        } else {
            setSearchUser(filtered);
        }
    };

    const AddSubAdmin = (id) => {
        const sub_admin_id = id;
        axiosClient.post(`/b2b/add/subadmin/${sub_admin_id}`)
            .then(res => {
                if (res.data !== null) {
                    // navigate('/b2b/cart');
                    alert('Sub Admin Added Successfully!!')
                }
                else if (res.data === null) {
                }

            })
            .catch(err => console.log(err));
        // console.log(sub_admin_id);
    }


    const delivaryCharge = 25;
    return (
        <div style={{ backgroundColor: '#8a858521' }}>
            <div className="container orders" >
                <div className="row ">
                    <div className='cartPage' style={{ display: 'flex' }}>
                        <div className="col-8 m-4 order"  >

                            <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                <h4>Cart Product</h4>
                            </div>
                            <div className=" container m-2 p-2" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
                                <>
                                    <p>Delevary To : </p>
                                    {userRole === 'b2b_employee' ? <>
                                        {user}
                                    </> : <>
                                        <p>{user && user.name}, {user && user.Village},{user && user.P_O},{user && user.City},{user && user.district},{user && user.State},{user && user.Pin} </p>
                                    </>}
                                </>

                                {/* <button className='btn btn-primary'>Change</button> */}
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
                                {/* {products && products.map((product, index) => (
                                    <div key={index}>
                                        <CartItemCard product_name={product.product_name} product_price={product.product_price} product_id={product.product_id} discount={product.discount} quantity={product.quantity} />
                                    </div>

                                ))} */}
                                {products && products.map(product => (
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
                            </div>

                            {userRole === 'b2b_employee' ?
                                <div className="container m-2 p-2" style={{ backgroundColor: '#fff' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                        <p className='p-1 m-1'>Search Sub Admin by Name</p>
                                        <input className="form-control" name='input' onChange={handleUserFilter} placeholder="Search Sub Admin by Name" value={searchValue.input} style={{ fontSize: '0.9em', width: '95%', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px', margin: '8px 12px 17px 12px' }} />
                                    </div>
                                    {searchUser.length !== 0 && (
                                        <div className="container text-dark" style={renDataStyle}>
                                            <table className="table table-striped">
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Phone No</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {searchUser.map((user, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{user.id}</th>
                                                            <td>{user.name}</td>
                                                            <td>{user.phone}</td>
                                                            <td>{user.role}</td>
                                                            {/* <td> <div className="btn btn-danger">Delete</div> <div className="btn btn-warning">Update</div> </td> */}
                                                            <td onClick={() => AddSubAdmin(user.id)}> <FaPlus style={{ color: 'blue', width: '25px', height: '25px' }} /></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
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

                                    <p style={{ marginRight: '40px' }}>Price ({totalNumofitem} items)</p>
                                    <p className='text-success' style={{ marginRight: '10px' }}>₹ {totalActusalPrice}</p>


                                </div>
                                <div className="discount" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ marginRight: '40px' }}>Discount  &nbsp;  &nbsp;  &nbsp;  &nbsp; </p>
                                    <p className=' text-success ' style={{ marginRight: '10px' }} > -₹{totalPrice}</p>
                                </div>
                                <div className="discount" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ marginRight: '40px' }}>GST(sgst+cgst)</p>
                                    <p className=' text-success ' style={{ marginRight: '10px' }}>₹{totalGst}</p>
                                </div>
                                <div className="price" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ marginRight: '40px' }}>Delivery Charges </p>
                                    <p className=' text-success' style={{ marginRight: '10px' }}>₹{delivaryCharge}</p>
                                </div>

                                <hr />
                                <div className="price" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ marginRight: '40px' }}>Total Amount  </p>
                                    <p className='text-success' style={{ marginRight: '10px' }}>₹{totalActusalPrice - totalPrice + delivaryCharge + totalGst}</p>
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
