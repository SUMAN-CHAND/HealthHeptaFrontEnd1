import React, { useEffect, useState } from 'react'
import doctor3 from '../img/doctor3.webp';
import {
    Link, useLocation, useNavigate
} from "react-router-dom";
import axios from 'axios';
import AllDoctorCardForAD from './AllDoctorCardForAD';
import axiosClient from './axiosClient';

export default function BookAppointmentFrom() {

    // console.log(user.id)



    const location = useLocation();
    let stateData = location.state
    // console.log(location.state)
    var doctor_id = stateData.doctor_id;
    var appoint_date = stateData.appoint_date;
    var appoint_time = stateData.appoint_time;
    var clinic_id = stateData.clinic_id;
    var user_id = stateData.user_id;
    // var user_id =  user.id;
    // console.log(user_id)

    
    const [doctors, setDoctors] = useState([]);
    const [image, setImages] = useState([]);

    useEffect(() => {
        axiosClient.get(`/doctorsearch/${doctor_id}`).then((res) => {

            // Handle response
            if (res.data !== null) {
                setDoctors(res.data[0])
                setImages(res.data[1])

            }
            // console.log(response.data);
        })
            .catch(err => {
                // Handle errors
                console.error(err);
            });

    }, []);

    const [values, setValues] = useState({
        doctor_id: doctor_id,
        appoint_date: appoint_date,
        appoint_time: appoint_time,
        name: '',
        ph_number: '',
        clinic_id: clinic_id,
        user_id: user_id,
        type_of_visite:'',
    });


    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    // console.log(doctors)

    // console.log(values)
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if (user_id !== undefined) {


            // navigate('/');  
            event.preventDefault();
            axiosClient.post(`/doctorbook`, values)
                .then(res => {
                    if (res.data !== null) {
                        // Notify admins and super admins about the new order
                        // socket.emit('newOrder', 'New order placed!');

                        alert('Appoiment Success!!!');


                        navigate('/success-appointment',
                            {
                                state: {
                                    value: values
                                }
                            });
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


    // const [doctors, setDoctors] = useState([]);
    // const [selectedDoctor, setSelectedDoctor] = useState(null);
    // const [patientName, setPatientName] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');

    // useEffect(() => {
    //     axiosClient.get('/doctors')
    //         .then(response => setDoctors(response.data));
    // }, []);

    // const handleDoctorSelect = (doctor) => {
    //     setSelectedDoctor(doctor);
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     await axiosClient.post('/appointments', values);

    //     alert('Appointment booked successfully.');
    // };

    // const handleJoinVideoCall = (appointmentId) => {
    //     axiosClient.get(`/appointments/${appointmentId}/join`)
    //         .then(response => {
    //             window.location.href = response.data.videoCallUrl;
    //         });
    // };

    // const [user, setUser] = useState({});
    // useEffect(() => {
    //     axiosClient.get('/profile').then((response) => {
    //         setUser(response.data[0]);
    //     });
    // }, []);

    return (
        <div style={{ backgroundColor: 'rgb(193 193 206 / 36%)' }}>
            <div className="row doctor-appoiment" style={{ display: 'flex', padding: '2rem' }}>
                <div className=" col-7 doctor-appoiment-doctor-profile" style={{ backgroundColor: 'white', padding: '2rem', margin: '1rem', borderRadius: '5px' }}>

                    {doctors.map(doctor => (
                        <div className="doctor-profile" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={`http://${process.env.REACT_APP_HOST}:8081/${image[0].path}`} className="card-img-top" alt="..." style={{ width: '25%' }} />
                            <div className="deccription" style={{ paddingTop: '7vh', width: '100%' }}>
                                <h5>{doctor.doc_name}</h5>
                                <p>{doctor.doc_desc} </p>
                                <p>13 YEARS OF EXPERIENCE</p>
                                <div className='location px-2 mx-2' style={{ display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-3" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    <p className=''>{doctor.location}</p>
                                </div>
                            </div>
                            <div className="container " style={{ paddingTop: '7vh', width: '100%' }}>
                                <h5>{doctor.clinic}</h5>
                                <p>{doctor.clinic_desc}
                                </p>
                            </div>
                        </div>
                    ))}


                </div>
                <div className=' col-4 from doctor-appoiment-from' style={{ backgroundColor: 'white', padding: '2rem 0', borderRadius: '5px' }} >
                    <h2 className='text-primary'>||Book here||</h2>
                    <br />
                    <form action='submit' onSubmit={handleSubmit}>
                        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Name : </label>
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
                                <label className='p-1' htmlFor="type_of_visite">Type Of Visiting : </label><br></br>
                                {/* <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Your Type Of Visite'
                                    name='type_of_visite' onChange={handleInput} /><br /> */}
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <select
                                        onChange={handleInput}
                                        required className='m-2 p-1' type="text" style={{ width: '85%' }}
                                        placeholder='Enter  Your Type Of Visite'
                                        name='type_of_visite'
                                    >
                                        <option value="select">Select</option>
                                        <option value="offline">Offline</option>
                                        <option value="online">Online</option>
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
