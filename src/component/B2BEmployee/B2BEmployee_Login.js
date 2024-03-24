import React, { useState } from 'react'
import img from '../../img/loginpageimg.jpg'
import '../style.css';
import { Link } from 'react-router-dom';
import validation from '../LoginValidaation';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../axiosClient';
import usePasswordToggle from '../usePasswordToggle';

export default function B2BEmployee_Login() {
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
    const danger = () => toast.error('Login Fail ! Employee ID  Or Email dose not match ', {
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
        id: '',
        email: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState([])
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        const user = axiosClient.post(`/b2b/employee/login`, values)
            .then(res => {
                if (res.data === null) {
                    console.log(res.data)
                    danger();
                }
                else if (res.data === 'Not_Approve') {
                    alert("Your Profile Not Verified by Admin || Please Wait for 24 hr Or Connect with Healthhepta.com ")
                }
                else if (res.data[0] !== null) {
                    success();
                    navigate('/b2b/emp/home', { state: { loggedIn: res.data[1] } });
                }
            })
            .catch(err => console.log(err));
        console.log(user)

    }
    return (
        <div className='d-flex justify-content-center align-items-center p-3 m-3'>

            <div className="img login-img" >
                <img src={img} style={{ width: '38vw' }} alt="...." />
            </div>
            <div className='bg-white m-3  pl-2 rounded w-30 shadow' style={{ height: '120%',padding:'5vh 0' }}>
                <form action='submit' onSubmit={handleSubmit}>
                    <h5>Log in to <span className='text-info'>Healthhepta</span></h5>
                    <div className='p-2' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-2' htmlFor="id">Employee Id : </label><br></br>
                        <input
                            className='m-2 p-1'
                            onChange={handleInput}
                            name='id'
                            id="id"
                            type="tel"
                            required  placeholder="xxxxxxxxxx" style={{ width: '90%', border: '1px solid black' }} />
                        {/* <span className="validity"></span> */}
                    </div>
                    <div className='mb-3 p-2' style={{ textAlign: 'initial', fontWeight: '700', position: 'relative' }} >
                        <label className='p-2' htmlFor="email">Email : </label>
                        <input required className='m-2  p-1' type='email' style={{ width: '90%' }} name='email' placeholder='Enter Email' onChange={handleInput} />
                        {/* <br />
                        <span className="password-toogle-icon">{ToggleIcon}</span> */}

                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                    </div>
                    <button type='submit' className='btn' style={{ width: '90%', color: 'white', backgroundColor: '#6775ec' }}>Log In</button>
                    <p >You are agree to our <span className='text-primary'>terms & policies</span> </p>
                    <p className='px-2'>Do not have any account please  <span className='text-primary'>create an Account</span> </p>
                    <>
                        <Link to='/b2b/emp/signup'> <button className='  btn-default border p-2 mb-3 btnonhover' style={{ borderRadius: '5px', width: '90%' }}>Create Account</button></Link>
                    </>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
