import React, { useState } from 'react'
import img from '../../img/loginpageimg.jpg'
import '../style.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import usePasswordToggle from '../usePasswordToggle';
export default function Delivery_Partner_SignUp() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const success = () => toast.success('Registraction Successfull', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    const danger = () => toast.error('Registraction Fail ! Phone Number Already Exist ', {
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
        name: '',
        ph_num: '',
        password: '',

    })
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/add-delivery-partner`, values)
            .then(res => {
                console.log(res)
                if (res.status=== 400) {
                    alert(res.statusText)
                }else if(res.status === 500){
                    alert(res.statusText)
                
                }else if(res.status === 409){
                    alert("Phone number is Already Exists!!")
                }
                else if (res.data !== null) {
                    success();
                    navigate('/delivery-partner/complete-profile',{
                        state: {
                            data: res.data,
                            value : values
                        }
                    });
                }
                else {
                    danger();
                }
            })
            .catch(err => 
                danger()
                );


    }
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    return (
        <div className='d-flex justify-content-center align-item-center p-3 m-3'>
            <div className="img  login-img" >
                <img src={img} style={{ width: '38vw' }} alt="...." />
            </div>
            <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ height: '110%' }}>
                <form action='submit' onSubmit={handleSubmit}>
                    <h5>Join <span className='text-info'>Healthhepta</span></h5>
                    <hr style={{ border: '3px solid black' }} />
                    <h5>Registration From <span className='text-info'></span></h5>
                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="name">Full Name <span className='text-danger'>*</span> : </label><br></br>
                        <input required className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Full Name'
                            name='name' onChange={handleInput} /><br />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='p-2' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-2' htmlFor="phonenumber">Phone Number : </label><br></br>
                        <input
                            className='m-2 p-1'
                            onChange={handleInput}
                            name='ph_num'
                            id="phone"
                            type="tel"
                            required
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="xxxxxxxxxx" style={{ width: '90%', border: '1px solid black' }} />
                        <span className="validity"></span>
                        <p style={{ fontWeight: '400', marginLeft: '2vw' }}>Format: 1234567890</p>
                    </div>
                    <div className='mb-3 p-1' style={{ textAlign: 'initial', fontWeight: '700',position:'relative' }} >
                        <label className='p-1' htmlFor="password">Create Password<span className='text-danger'>*</span> : </label>
                        <input required className='m-2  p-1' type={PasswordInputType}  style={{ width: '90%' }} placeholder='Create Password' name='password' onChange={handleInput} /> <br />
                        <br />
                        <span className="password-toogle-icon-signup">{ToggleIcon}</span>

                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <div className="form-check ">
                        <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            <p>You are agree to our <span className='text-primary'>terms & policies</span> </p>
                            {errors.check && <span className='text-danger'>{errors.check}</span>}
                        </label>
                    </div>
                    {/* <Link to='/login'> */}
                    <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Sign Up</button>
                    {/* </Link> */}
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
