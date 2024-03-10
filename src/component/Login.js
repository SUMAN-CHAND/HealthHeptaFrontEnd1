import React, { useState } from 'react'
import img from '../img/loginpageimg.jpg'
import './style.css';
import { Link } from 'react-router-dom';
import validation from './LoginValidaation';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from './axiosClient';
import { Helmet } from 'react-helmet';
import usePasswordToggle from './usePasswordToggle';
export default function Login() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const success = () => toast.success('Login Successfull', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    const danger = () => toast.error('Login Fail ! Phone Number Or Password dose not match ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [values, setValues] = useState({
        phone: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const redirectUrl = sessionStorage.getItem('redirectUrl');
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.phone === "" && errors.password === "") {
            const user = axiosClient.post(`/login`, values)
                .then(res => {
                    if (res.data === null) {
                        console.log(res.data)
                        danger();
                    }
                    else if (res.data[0] !== null || res.data[0] !== undefined) {
                        if (redirectUrl) {
                            sessionStorage.setItem("user_id", res.data[0].id);
                            sessionStorage.setItem("LogedIn", res.data[1]);
                            navigate(redirectUrl);
                            sessionStorage.removeItem('redirectUrl');
                        }
                        else {
                            success();
                            navigate('/', { state: { loggedIn: res.data[1] } });
                            sessionStorage.setItem("user_id", res.data[0].id);
                            sessionStorage.setItem("LogedIn", res.data[1]);

                        }
                    }
                })
                .catch(err => {
                    console.log(err)
                    console.error("Error occurred during login request:", err);
                    danger(); // Display error message for network/server errors
                });
        }
    }
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    return (
        <>
            <Helmet>
                <title>healthhepta.com</title>
                <meta name="description" content=" Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
            </Helmet>
            <div className='d-flex justify-content-center align-item-center p-3 m-3'>

                <div className="img login-img" >
                    <img src={img} style={{ width: '38vw' }} alt="...." />
                </div>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit}>
                        <h5>Log in to <span className='text-info'>Healthhepta</span></h5>
                        <Link to='/sub-admin/login' target='_Block'><p style={{ textAlign: 'right', paddingRight: '2vw', marginTop: '2vh' }}>Are you a Service Provider?</p></Link>
                        <Link to='/partner/login'><p style={{ textAlign: 'right', paddingRight: '2vw', marginTop: '2vh' }}>Are you a Partner?</p></Link>

                        <div className='p-2' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-2' htmlFor="phonenumber">Phone Number : </label><br></br>
                            <input
                                className='m-2 p-1'
                                onChange={handleInput}
                                name='phone'
                                id="phone"
                                type="tel"
                                required
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="xxxxxxxxxx" style={{ width: '90%', border: '1px solid black' }} />
                            <span className="validity"></span>
                            <p style={{ fontWeight: '400', marginLeft: '2vw' }}>Format: 1234567890</p>
                        </div>

                        <div className='mb-3 p-2' style={{ textAlign: 'initial', fontWeight: '700', position: 'relative' }} >
                            <label className='p-2' htmlFor="password">Password : </label>
                            <input className='m-2  p-1' type={PasswordInputType} style={{ width: '90%' }} name='password' placeholder='Enter Password' onChange={handleInput} />
                            <br />
                            <span className="password-toogle-icon">{ToggleIcon}</span>
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                        </div>
                        <button type='submit' className='btn' style={{ width: '90%', color: 'white', backgroundColor: '#6775ec' }}>Log In</button>
                        <p >You are agree to our <span className='text-primary'>terms & policies</span> </p>
                        <p className='px-2'>Do not have any account please  <span className='text-primary'>create an Account</span> </p>
                        <Link to='/signup'>
                            <button className='  btn-default border p-2 mb-3 btnonhover' style={{ borderRadius: '5px', width: '90%' }}>Create Account</button>
                        </Link>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
