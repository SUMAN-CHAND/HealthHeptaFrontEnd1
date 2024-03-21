import React, { useEffect, useState } from 'react'
import {
    useNavigate, useParams
} from "react-router-dom";
import AllDoctorCardForAD from './AllDoctorCardForAD';
import axiosClient from './axiosClient';
export default function BookLabTest() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const param = useParams();
    const id = param.id;
    const [user, setUser] = useState({});
    useEffect(() => {
        axiosClient.get(`/profile`).then((response) => {
            setUser(response.data[0]);
        });
    }, []);
    var user_id = user.id;
    const [LabTests, setLabTests] = useState([]);
    const [image, setImages] = useState([]);
    const [clinic_id, setClinicId] = useState();
    const [total_amount, setTotal_amount] = useState();
    useEffect(() => {
        axiosClient.get(`/book/lab-test/${id}`).then((res) => {
            // Handle response
            if (res.data !== null) {
                setLabTests(res.data[0])
                setImages(res.data[1])
                setClinicId(res.data[0][0].Clinic_id);
                setTotal_amount(res.data[0][0].Price);
            }
        })
            .catch(err => {
                // Handle errors
                console.error(err);
            });

    }, []);
    const [values, setValues] = useState({
        Test_id: id,
        appoint_date: '',
        appoint_time: '',
        name: '',
        ph_number: '',
        clinic_id: clinic_id,
        user_id: user_id,
        gender: '',
        sample_collection: '',
        appoint_date: '',
        appoint_time: '',
        payment: '',
        total_amount: total_amount,
    });
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if (user_id !== undefined) {
            event.preventDefault();
            axiosClient.post(`/labbook`, [values, clinic_id, user_id, total_amount])
                .then(res => {
                    if (res.data !== null) {
                        if (values.payment[0] === 'cod') {
                            alert('Lab Booking Successfull!!!');
                            navigate('/');
                        } else {
                            navigate('/book/lab-test/payment', {
                                state: {
                                    data: values
                                }
                            });
                        }
                    }
                    else if (res.data === null) {
                        alert('Appoiment Failed');
                    }
                    else {
                        alert('Appoiment Failed');
                    }
                })
                .catch(err => console.log(err));
        } else {
            alert('Please Log In !! ')
            navigate('/login')
        }
    }
    return (
        <div style={{ backgroundColor: 'rgb(193 193 206 / 36%)' }}>
            <div className="row doctor-appoiment" style={{ display: 'flex', padding: '2rem' }}>
                <div className=" col-7 doctor-appoiment-doctor-profile" style={{ backgroundColor: 'white', padding: '2rem', margin: '1rem', borderRadius: '5px' }}>
                    {LabTests.map(LabTest => (
                        <div className="doctor-profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={`http://${process.env.REACT_APP_HOST}:8081/${image[0].path}`} className="card-img-top" alt="..." style={{ width: '25%' }} />
                            <div className="deccription" style={{ paddingTop: '7vh', width: '100%' }}>
                                <h5>{LabTest.Test_Name}</h5>
                                <p>{LabTest.Test_Desc} </p>
                                <div className='location px-2 mx-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-3" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <p className=''>{LabTest.Landmark}</p>

                                </div>
                                <p className="card-text text-success">Price:- <span className='text-success'>₹{LabTest.Price}</span></p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className=' col-4 from doctor-appoiment-from' style={{ backgroundColor: 'white', padding: '2rem 0', borderRadius: '5px' }} >
                    <h2 className='text-primary'>||Book here||</h2>
                    <br />
                    <form action='submit' onSubmit={handleSubmit}>
                        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Patitent Name : </label>
                            <input type="text" name='name' onChange={handleInput} className="form-control " id="name" aria-describedby="name" style={{ border: '2px solid black', width: '85%', marginLeft: '5%' }} />
                        </div>
                        <div className='p-2' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-2' htmlFor="phonenumber">Phone Number : </label>
                            <input
                                className='p-2'
                                onChange={handleInput}
                                name='ph_number'
                                id="phone"
                                type="tel"
                                required
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="xxxxxxxxxx" style={{ border: '2px solid black', width: '85%', marginLeft: '5%' }} />
                            <span className="validity mx-2"></span>
                            <p style={{ fontWeight: '400', marginLeft: '2vw' }}>Format: 1234567890</p>
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="type_of_visite">Gender : </label><br></br>

                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <select
                                    onChange={handleInput}
                                    required className=' p-1' type="text" style={{ width: '85%', border: '2px solid black', marginLeft: '5%', borderRadius: '5px' }}
                                    placeholder='Enter  Your Type Of Visite'
                                    name='gender'
                                >
                                    <option value="select" selected>Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select> <br />
                            </div>
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="type_of_visite">Sample Collection : </label><br></br>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <select
                                    onChange={handleInput}
                                    required className=' p-1' type="text" style={{ width: '85%', border: '2px solid black', marginLeft: '5%', borderRadius: '5px' }}
                                    placeholder='Enter  Your Type Of Visite'
                                    name='sample_collection'

                                >
                                    <option value="select" selected>Select</option>
                                    <option value="Home">Home</option>
                                    <option value="Lab">Lab</option>
                                </select> <br />
                            </div>
                        </div>
                        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Please Select Date : </label>
                            <input type="date" name='appoint_date' onChange={handleInput} className="form-control " id="name" aria-describedby="name" style={{ border: '2px solid black', width: '85%', marginLeft: '5%', borderRadius: '5px' }} />
                        </div><div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Please Select Time : </label>
                            <input type="time" name='appoint_time' onChange={handleInput} className="form-control " id="name" aria-describedby="name" style={{ border: '2px solid black', width: '85%', marginLeft: '5%', borderRadius: '5px' }} />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="type_of_visite">Payment Mood : </label><br></br>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <select
                                    onChange={handleInput}
                                    required className=' p-1' type="text" style={{ width: '85%', border: '2px solid black', marginLeft: '5%', borderRadius: '5px' }}
                                    placeholder='Enter  Your Type Of Visite'
                                    name='payment'
                                >
                                    <option value="select" selected>Select</option>
                                    <option value="online_banking">Online Banking</option>
                                    <option value="cod">COD</option>
                                </select> <br />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mx-3">Submit</button>
                        <button type="reset" className="btn btn-warning mx-3">Clear</button>
                    </form>
                </div>
            </div>
            <div style={{ backgroundColor: '#0000ff1c' }}>
                <AllDoctorCardForAD />
            </div>
        </div>
    )
}
