import React, { useState } from 'react'
import img from '../img/loginpageimg.jpg'
import './style.css';
import validation from './SignUpValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;
    // const [role,setRole] = useState('')
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
//    const handleChange=(e)=>{
//     setRole(e.target.value)
//    }


    const [values, setValues] = useState({
        name: '',
        phone: '',
        password: ''
    })
    const [check, setCheck] = useState(false);
    // console.log(check)
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(validation(values, check));
        if (errors.name === "" && errors.phone === "" && errors.password === "" && errors.check === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    if (res.data !== null) {
                        success();
                        navigate('/login');
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
    }
    return (
        <div className='d-flex justify-content-center align-item-center p-3 m-3'>
            <div className="img  login-img" >
                <img src={img} style={{ width: '38vw' }} alt="...." />
            </div>
            <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ height: '110%' }}>
                <form action='submit' onSubmit={handleSubmit}>
                    <h5>Join <span className='text-info'>Healthhepta</span></h5>
                    
                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="name">Full Name : </label><br></br>
                        <input className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Full Name'
                            name='name' onChange={handleInput} /><br />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
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
                    <div className='mb-3 p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="password">Create Password : </label>
                        <input className='m-2  p-1' type="password" style={{ width: '90%' }} placeholder='Create Password' name='password' onChange={handleInput} />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <div className="form-check ">
                        <input className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            <p>You are agree to our <span className='text-primary'>terms & policies</span> </p>
                            {errors.check && <span className='text-danger'>{errors.check}</span>}
                        </label>
                    </div>
                    {/* <Link to='/login'> */}
                    <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white',cursor:'pointer' }}>Sign Up</button>
                    {/* </Link> */}
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
