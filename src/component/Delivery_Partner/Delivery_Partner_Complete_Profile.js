import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import UploadImage from '../UploadImage';
import axiosClient from '../axiosClient';
export default function Delivery_Partner_Complete_Profile() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const location = useLocation();
    const state = location.state;
    const data = location.state.data
    const value = location.state.value
    const [values, setValues] = useState({
        partner_id: data.insertId,
        fullname: value.name,
        ph_num: value.ph_num,
        aadhaar: '',
        pan: '',
        Village: '',
        P_O: '',
        City: '',
        district: '',
        state: '',
        pin: '',
        AadhaarCardImageID: null,
        PanCardImageID: null
    })
    const handleAadhaarImageUpload = (imageId) => {
        setValues({ ...values, AadhaarCardImageID: imageId });
    };
    const handlePanCardImageUpload = (imageId) => {
        setValues({ ...values, PanCardImageID: imageId });
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/delivery-partner/complete_profile`, values)
            .then(res => {
                // console.log(res)
                if (res.status === 200 && res.data === "") {
                    alert('Sign up  Successfully!!')
                    navigate('/delivery-partner/login');
                }
                else if (res.status === 200 && res.data !== null) {
                    alert('Partner Added Successfully')
                    navigate('/superadmin', { state: { loggedIn: true } });
                }
                else if (res.data === null) {
                    alert('Error')
                }
                else {
                    alert('Error')
                }
            })
            .catch(err => console.log(err));
    }

    const dateStyle = {
        width: "13.2rem",
        height: "2rem",
        fontSize: "1.1rem",
        width: '90%'
    };


    return (
        <div>
            <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='p-2' style={{}}>Complete Your Profile <span className='text-info'>{value.name} !!</span> </h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        {/* <h5> <span className='text-info'>Healthhepta</span></h5> */}

                        <div className='mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" className='person'>
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="product_name">Full Name<span className='text-danger'>*</span> : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Full Name'
                                    name='fullname' onChange={handleInput} value={value.name} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="phone">Phone No <span className='text-danger'>*</span> : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Phone No '
                                    name='phone' onChange={handleInput} value={value.ph_num} /><br />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            {/* <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="aadhaar">Aadhaar No <span className='text-danger'>*</span>: </label>
                                <input required className='m-2  p-1' type="number" style={{ width: '33vw' }} placeholder='Write Aadhaar No' name='aadhaar' onChange={handleInput} /> <br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="pan">Pan No <span className='text-danger'>*</span>: </label>
                                <input required className='m-2  p-1' type="text" style={{ width: '33vw' }} placeholder='Write Pan No ' name='pan' onChange={handleInput} /> <br />
                            </div> */}
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
                                    maxLength="12"
                                    pattern="[0-9]{4}[0-9]{4}[0-9]{4}" style={{ width: '90%', border: '1px solid black' }} />
                                <span className="validity"></span>

                            </div>
                            <div className='mb-2 p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="pan">Pan No <span className='text-danger'>*</span>: </label>
                                {/* <input required className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Write Pan No ' name='pan' onChange={handleInput} /> <br /> */}
                                <input type="text" className='m-2  p-1' value={values.pan} style={{ width: '90%' }} id="pan" name="pan" onChange={handleInput} maxLength="10" pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}" placeholder="Please enter valid PAN number. E.g. AAAAA9999A" required />
                                <span className="validity"></span>

                            </div>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <h5 className='m-2 p-3'>Add Parmanent Address :- </h5>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="Village">Village / Road name : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Village or Road Name'
                                        name='Village' onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="P_O">Post Office : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Post office'
                                        name='P_O' onChange={handleInput} /><br />
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="City">City : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Your City'
                                        name='City' onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="district">District : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  District'
                                        name='district' onChange={handleInput} /><br />
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="state">State: </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter State'
                                        name='state' onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="pin">Pin Code : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Pin code'
                                        name='pin' onChange={handleInput} /><br />
                                </div>
                            </div>
                            <div className='form-check ' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="image">Add Your Aadhaar Card Image </label>
                                <UploadImage onImageUpload={handleAadhaarImageUpload} />
                            </div>
                            <div className="form-check licence-add" style={{ textAlign: 'initial', fontWeight: '700' }}>
                                <label className='p-1' htmlFor="image">Add Your Pan Card Image</label>
                                <UploadImage onImageUpload={handlePanCardImageUpload} />
                            </div>
                        </div>

                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>Please confirm the data are  <span className='text-warning'>right</span> </p>
                            </label>
                        </div>
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '40%', color: 'white', cursor: 'pointer' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
