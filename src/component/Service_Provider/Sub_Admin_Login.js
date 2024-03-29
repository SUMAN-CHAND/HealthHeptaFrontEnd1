import React, { Suspense, lazy, useState } from 'react'
import img from '../../img/loginpageimg.jpg'
import '../style.css';
import validation from '../LoginValidaation';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
// import ChooseRoleModal from './ChooseRoleModal';
import axiosClient from '../axiosClient';
import usePasswordToggle from '../usePasswordToggle';
import HashLoader from 'react-spinners/HashLoader';
const ChooseRoleModal = lazy(() => import('./ChooseRoleModal'));



export default function Sub_Admin_Login() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    // const [loggedIn, setLoggedIn] = useState(true);
    // loggedIn
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
            const user = axiosClient.post(`/sub-admin/login`, values)
                .then(res => {
                    if (res.data === null) {
                        danger();
                    }
                    else if (res.data === 'Not_Approve') {
                        alert("Your Profile Not Verified by Admin || Please Wait for 24 hr Or Connect with Healthhepta.com ")
                    }
                    else if (res.data[0] !== null) {
                        // localStorage.setItem('user-info', JSON.stringify(user));
                        // setLoggedIn(true)               
                        success();
                        navigate('/b2b-home', { state: { loggedIn: res.data[1] } });
                        sessionStorage.setItem("user_id", res.data[0].id);
                        sessionStorage.setItem("LogedIn", res.data[1]);


                    }
                })
                .catch(err => console.log(err));
            console.log(user)
        }
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
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    return (
        <div id='sub_admin_login_mob' className='d-flex justify-content-center align-item-center  p-3 m-3'>

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
                    {/* <Link to='/sub-admin/signup'>
                        <button className='  btn-default border p-2 mb-3 btnonhover' style={{ borderRadius: '5px', width: '90%' }}>Create Account</button>
                    </Link> */}
                    <>
                        {/* <Link className="btn-default border p-2 mb-3 btnonhover" onClick={openModal}><p>Create Account</p></Link> */}
                        <button className='  btn-default border p-2 mb-3 btnonhover' style={{ borderRadius: '5px', width: '90%' }} onClick={openModal}>Create Account</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <div className='dis-flex'> <Suspense fallback={<HashLoader color="#36d7b7" />}> <ChooseRoleModal closeTheModal={closeModal} /></Suspense> </div>
                        </Modal>

                    </>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
