import React, { useState } from 'react'
import img from '../../img/loginpageimg.jpg'
import '../style.css';
import validation from '../LoginValidaation';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../axiosClient';
import usePasswordToggle from '../usePasswordToggle';
export default function AdminLogin() {
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
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if (errors.phone === "" && errors.password === "") {
            axiosClient.post(`/superadmin/login`, values)
                .then(res => {
                    if (res.data === null) {
                        alert('No data found')
                        danger();
                    }
                    else if (res.data[0] !== null) {
                        success();
                        navigate('/superadmin', { state: { loggedIn: res.data[1] } });
                        sessionStorage.setItem("user_id", res.data[0].id);
                        sessionStorage.setItem("LogedIn", res.data[1]);
                    }
                    else {
                        danger();
                    }
                })
                .catch(err => console.log(err));
        }
    }
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    return (
        <div className='d-flex justify-content-center align-item-center p-3 m-3'>

            <div className="img login-img" >
                <img src={img} style={{ width: '38vw' }} alt="...." />
            </div>
            <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ height: '110%' }}>
                <form action='submit' onSubmit={handleSubmit}>
                    <h5>Log in to <span className='text-info'>Healthhepta</span></h5>
                    
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
                    <div className='mb-3 p-2' style={{ textAlign: 'initial', fontWeight: '700' ,position:'relative'}} >
                        <label className='p-2' htmlFor="password">Password : </label>
                        <input className='m-2  p-1' type={PasswordInputType}  style={{ width: '90%' }} name='password' placeholder='Enter Password' onChange={handleInput} />
                        <br />
                        <span className="password-toogle-icon">{ToggleIcon}</span>

                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn' style={{ width: '90%', color: 'white', backgroundColor: '#6775ec' }}>Log In</button>
                    <p style={{paddingBottom:'2vh'}}>You are agree to our <span className='text-primary'>terms & policies</span> </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
