import React, { useState, useEffect } from 'react'
import logo from '../../img/logo.jpeg';
import {
    Link, useParams
} from "react-router-dom";
import '../style.css'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
export default function B2BHeader() {
    const navigate = useNavigate();
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;

    const [numOfItem, setnumOfItem] = useState(0)
    const [loggedIn, setLoggedIn] = useState(0);
    const [userRole, setUserRole] = useState();
    const [locations, setLocation] = useState([])
    const [products, setProducts] = useState([])
    const [chooseLocation, setChooseLocation] = useState([])
    const [chooseProduct, setChooseProduct] = useState([])
    const [selectLocation, setSelectLocation] = useState()
    const [userLocation, setUserLocation] = useState()
    const [active, setActive] = useState(false);
    useEffect(() => {
        axiosClient.get(`/sub_admin/profile-details`)
            .then(res => {
                if (res.data.length > 3) {
                    setnumOfItem(res.data[0]);
                    setLoggedIn(res.data[1]);
                    // console.log(loggedIn);
                    setUserLocation(res.data[2]);
                    setUserRole(res.data[3]);
                } else if (res.data.length === 3) {
                    setnumOfItem(res.data[0]);
                    setLoggedIn(res.data[1]);
                    setUserRole(res.data[2]);

                }

            })
    }, []);
    useEffect(() => {
        if (userLocation !== 0 || userLocation !== undefined) {
            setSelectLocation(userLocation)
        }

    }, [userLocation])
    useEffect(() => {
        axiosClient.get(`/locations`)
            .then(res => {
                setLocation(res.data);
                // setChooseLocation(res.data)
            })
    }, [])
    useEffect(() => {
        axiosClient.get(`/b2b/search`)
            .then(res => {
                setProducts(res.data);
                // setChooseLocation(res.data)
            })
    }, [])


    if (loggedIn > 0) {
        var login = true;
    }

    const handleLogout = async () => {
        try {
            const response = await axiosClient.post(`/profile`);
            if (response.data.success) {
                setLoggedIn(0);
                sessionStorage.removeItem('LogedIn');
                sessionStorage.removeItem('user_id');
                navigate('/sub-admin/login');
            } else {
                // Handle logout failure
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const param = useParams();
    if (param.selectLocation !== undefined) {
        console.log(param.selectLocation)
    } else {
        // console.log(param)
    }
    const [values, setValues] = useState({
        input: ''
    })
    const setValueTOFilter = async (name) => {
        setValues({
            input: name
        })
    }
    const handleFilter = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();
        const newFilter = products.filter((value) => {
            return value.name.toLowerCase().includes(searchword);
        });
        if (searchword === "") {
            setChooseProduct([]);
        } else {
            setChooseProduct(newFilter);
        }
    };

    const [searchLocation, setSearchLocation] = useState([]);
    
    const [searchValue, setSearchValue] = useState({
        input: ''
      })
      const handleLocationFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();
    
        const filtered = locations.filter((item) => {
          const pin_code = item.pin_code.toString().toLowerCase();
          const search = searchword.toLowerCase();
          return pin_code.includes(search);
        });
        if (searchword === "") {
            setSearchLocation([]);
        } else {
            setSearchLocation(filtered);
        }
      };

      const setLocationValueTOFilter = async (pin_code) => {
        setSearchValue({
            input: pin_code,
        });
        setChooseLocation(pin_code);
        setSearchLocation([]);
    }

    const searchMedicine = async () => {
        try {
            const response = await axiosClient.post(`/b2b/search`, values);
            if (response.data !== null) {
                navigate(`/b2b/medicines/${values.input}`,
                    {
                        state: {
                            data: response.data[0],
                            image: response.data[1],
                            location: selectLocation
                        }
                    })
                setValues({
                    input: ''
                });
                setChooseProduct([]);
                //    console.log(response.data)
            } else {
                // Handle logout failure
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    const handleClick = event => {
        setChooseProduct([]);
    };
    const handleClickProfile = () => {
        if (userRole == 'b2b_employee') {
            navigate('/b2b/emp/home', { state: { loggedIn: true } });
        } else {
            navigate('/sub-admin/home', { state: { loggedIn: true } });
        }
    };
    return (
        <>
            {active ? <>
                <div className="HamburgerMenu" style={{ width: '50vw' }}>
                    <h5>Hi User</h5>
                    <ul>
                        <li><Link to='/profile' className='text-light li'>Profile</Link></li>
                        <li>Doctors</li>
                        <li>Medicine Shops</li>
                        <li>Lab Tests</li>
                        <li>Clinics</li>
                        <li>Log Out</li>
                    </ul>
                    <span onClick={() => setActive(!active)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="5vh" fill="white" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>
                </div>
            </> : <>
            </>
            }

            <div className='Header' >
                <nav className="navbar navbar-expand-md">
                    <div className="right">
                        <div className="navbar-brand" style={{ margin: '0 2vw', display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="Logo" className="d-inline-block align-text-top logo-image" width="50vw" height="50vh" style={{ borderRadius: "50%" }} />
                            <div className="container-fluid line-header" onClick={() => setActive(!active)} >
                                {active ? <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7vw" height="5vh" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </> : <>

                                    <span className="navbar-toggler-icon line-icon-header"></span>
                                </>
                                }
                            </div>
                            <div>
                                <h5 className='text-light mx-1 logo-text' style={{ fontWeight: '700' }} >Healthhepta.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid left header-left" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
                        <div className="dropdown me-2 dropdown-location "  >
                            {/* <select value={selectLocation} onChange={e => setSelectLocation(e.target.value)} className="btn btn-secondary header-location-1 header-location-mobile" aria-expanded="false" >
                                <option defaultValue={'choose your location..'} >choose your Pin Code..</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location.pin_code}>{location.pin_code}</option>
                                )
                                )}
                            </select> */}
                            <input className="form-control" name='input' onChange={handleLocationFilter} placeholder="Search Your Pin Code Here" value={searchValue.input} />

                            {searchLocation.length !== 0 && (
                                <div className="inputResult" >
                                    {searchLocation.map((location, index) => {
                                        return <span onClick={() => setLocationValueTOFilter(location.pin_code)} style={{ textDecoration: 'none', color: 'black' }}  ><div style={{ cursor: 'pointer', padding: '0px' }} key={index}  >{location.pin_code}</div></span>
                                    }
                                    )}
                                </div>
                            )}


                        </div>
                        <div className="search  me-2 search-location" >
                            <div style={{ display: 'flex' }}>
                                <input className="form-control" name='input' onChange={handleFilter} placeholder="Search Medicine Etc" value={values.input} style={{ width: '22vw', fontSize: '0.9em', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} />
                                <button type="button" onClick={searchMedicine} className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                    </svg>
                                </button>
                            </div>
                            {chooseProduct.length !== 0 && (
                                <div className="inputResult" onClick={handleClick}>
                                    {chooseProduct.map((product, index) => {
                                        return <p onClick={() => setValueTOFilter(product.name)} style={{ textDecoration: 'none', color: 'black' }}><p style={{ cursor: 'pointer', padding: '0px' }} key={index}>{product.name}</p></p>
                                    }
                                    )}
                                </div>
                            )}
                        </div>

                        <div className='login-order' style={{ alignItems: "center" }}>
                            <Link to='/b2b/cart' style={{ textDecoration: 'none' }} >
                                <div className="cart " style={{ display: 'flex', justifyContent: 'start', marginLeft: "auto", textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="5vh" fill="currentColor" className="bi bi-cart p-0 drop-dwon-profile" viewBox="0 0 16 16" >
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    <p className='px-2 cartItemNo' style={{ color: 'white', marginLeft: '-10px', marginRight: '10px', backgroundColor: 'orange', borderRadius: '5px' }}>{numOfItem}</p>
                                </div>
                            </Link>
                            {login ?
                                <div className="buttom profile-icon mx-3">
                                    <div className="dropdown">
                                        <span className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: '0px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person shadow drop-dwon-profile " style={{ backgroundColor: '' }} viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li><span onClick={handleClickProfile} className="dropdown-item" style={{ cursor: 'pointer' }}>Profile</span></li>
                                            <li><Link className="dropdown-item" onClick={handleLogout} >Log out</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <div>
                                    <Link to='/sub-admin/login'>
                                        <div className="buttom mx-3 login-text">
                                            <p style={{ margin: '0px' }} className="btn btn-primary"> <p style={{ margin: '0px' }}>Login</p> </p>
                                        </div>
                                    </Link>
                                </div>

                            }
                        </div>
                    </div>
                    <div className="search  me-2 mx-2 location-search-under" >
                        <div style={{ display: 'flex' }}>
                            <input className="form-control" name='input' onChange={handleFilter} placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" style={{ width: '75vw', fontSize: '0.9em', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} />
                            <button type="button" onClick={searchMedicine} className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
                            </button>
                        </div>
                        {chooseProduct.length !== 0 && (
                            <div className="inputResult" onClick={handleClick}>
                                {chooseProduct.map((product, index) => {
                                    return <p onClick={() => setValueTOFilter(product.name)} style={{ textDecoration: 'none', color: 'black' }}><p style={{ cursor: 'pointer', padding: '0px' }} key={index}>{product.name}</p></p>
                                }
                                )}
                            </div>
                        )}
                    </div>
                </nav>
                <div className="dropdown me-2 dropdown-location-under "  >
                    <select value={selectLocation} onChange={e => setSelectLocation(e.target.value)} className="btn btn-secondary header-location-mobile" aria-expanded="false">
                        <option defaultValue={'choose your location..'} ><p>choose your Pin Code..</p></option>
                        {locations.map((location, index) => (
                            <option key={index} value={location.pin_code}><p>{location.pin_code}</p></option>
                        )
                        )}
                    </select>
                </div>
            </div>

        </>
    )
}
