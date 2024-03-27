import React, { useState } from 'react'
import img from '../../img/loginpageimg.jpg'
import '../style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';
import Modal from 'react-modal';
import UploadImage from '../UploadImage';

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

export default function B2BEmployeeSignUp() {
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
    const danger = () => toast.error('Registraction Fail  Phone Number Already Exist ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

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

    const [values, setValues] = useState({
        name: '',
        ph_num: '',
        email: '',
        aadhaar: '',
        pan: '',
        employee_type:'',
        AadhaarCardImageID: null,
        PanCardImageID: null

    })
    const [check, setCheck] = useState(false);
    // console.log(check)
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }

    // Callback function to set the productImageId when an image is uploaded
    const handleAadhaarImageUpload = (imageId) => {
        setValues({ ...values, AadhaarCardImageID: imageId });
    };
    const handlePanCardImageUpload = (imageId) => {
        setValues({ ...values, PanCardImageID: imageId });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/add/b2b-employee`, values)
            .then(res => {
                // console.log(res)
                if (res.data === null) {
                    danger();
                }
                else if (res.data !== null) {
                    // console.log(res.data)
                    success();
                    alert('Sign Up  Successfully!!');
                    navigate('/b2b/emp/login');
                }
                else {
                    danger();
                }
            })
            .catch(err => console.log(err));
    }

    const [panNo, setPanNo] = useState('');

  const handleChange = (event) => {
    setPanNo(event.target.value.toUpperCase());
  };

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
                    <p>-- Add new b2b employee -- <span className='text-info'></span></p>
                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="name">Full Name <span className='text-danger'>*</span> : </label><br></br>
                        <input required className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Full Name'
                            name='name' onChange={handleInput} /><br />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="phonenumber">Phone Number<span className='text-danger'>*</span> : </label>
                        {/* <input required className='m-2  p-1' type="phonenumber" style={{ width: '90%' }} placeholder='Enter Phone Number'
                            name='ph_num' onChange={handleInput} /><br />
                        {errors.ph_num && <span className='text-danger'>{errors.ph_num}</span>} */}
                        <input
                            className='m-2 p-1'
                            onChange={handleInput}
                            name='ph_num'
                            id="ph_num"
                            type="tel"
                            required
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="xxxxxxxxxx" style={{ width: '90%', border: '1px solid black' }} />
                        <span className="validity"></span>

                    </div>
                    <div className='mb-3 p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="email">Enter your Email<span className='text-danger'>*</span> : </label>
                        <input required className='m-2  p-1' type="email" style={{ width: '90%' }} placeholder='Enter Your Email' name='email' onChange={handleInput} /> <br />
                        {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
                    </div>


                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> */}
                    <div className='mb-2 p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="aadhaar">Aadhaar No <span className='text-danger'>*</span>: </label>
                        {/* <input required className='m-2  p-1' type="number" style={{ width: '90%' }} placeholder='Write Aadhaar No' name='aadhaar' onChange={handleInput} /> <br /> */}

                        <input
                            className='m-2 p-1'
                            onChange={handleInput}
                            id="aadhaar"
                            placeholder='Write Aadhaar No'
                            name='aadhaar'
                            type="tel"
                            required
                            pattern="[0-9]{4}[0-9]{4}[0-9]{4}" style={{ width: '90%', border: '1px solid black' }} />
                        <span className="validity"></span>

                    </div>
                    <div className='mb-2 p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="pan">Pan No <span className='text-danger'>*</span>: </label>
                        {/* <input required className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Write Pan No ' name='pan' onChange={handleInput} /> <br /> */}
                        <input type="text" className='m-2  p-1'  value={values.pan} style={{ width: '90%' }} id="pan" name="pan" onChange={handleInput}   pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}" placeholder="Please enter valid PAN number. E.g. AAAAA9999A" required />
                        <span className="validity"></span>

                    </div>

                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <p style={{ marginLeft: '10px' }}>Select Your Role :</p>
                        <select
                            onChange={handleInput} name='employee_type'
                            style={{ width: '80%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                            <option value="select">Select</option>
                            <option value="b2b">B2B</option>
                            <option value="b2c">B2C</option>
                        </select>
                    </div>

                    {/* </div> */}
                    <div className='form-check ' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="image">Add Your Aadhaar Card Image </label>
                        {/* <input className='m-2  p-1' type="file" style={{ width: '90%' }} placeholder='Enter Product image'
                                name='img' onChange={handleInput} /><br /> */}
                        <UploadImage onImageUpload={handleAadhaarImageUpload} />
                    </div>
                    <div className="form-check licence-add" style={{ textAlign: 'initial', fontWeight: '700' }}>
                        <label className='p-1' htmlFor="image">Add Your Pan Card Image</label>
                        {/* <span className='mx-3'><input type="file" name="licence" id="licence" /></span> */}
                        {/* <UploadImage/> */}
                        <UploadImage onImageUpload={handlePanCardImageUpload} />

                    </div>
                    <div className="form-check ">
                        <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            <p>You are agree to our <span className='text-primary'>terms & policies</span> </p>
                            {errors.check && <span className='text-danger'>{errors.check}</span>}
                        </label>
                    </div>
                    <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Submit</button>
                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                {/* <ViewDoctorDetailsModal closeTheModal={closeModal} doctor_id={props.id} /> */}
                <div>
                    Hi
                </div>
            </Modal>
            <ToastContainer />
        </div>
    )
}
