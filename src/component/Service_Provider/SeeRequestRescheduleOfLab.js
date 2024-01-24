import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';

export default function SeeRequestRescheduleOfLab() {



    // var appoint_date = '';
    // var appoint_time = '';

    // const [values, setValues] = useState({
    //     appoint_date: appoint_date,
    //     appoint_time: appoint_time,
        
    // });
    // const handleInput = (event) => {
    //     setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // }
    
    const param = useParams();
    const appoiment_id = param.appoiment_id;

    const [appoiment,setAppoiments] = useState({});

    const navigate  = useNavigate();
useEffect(() =>{
    axiosClient.get(`/sub-admin/reschedule/lab/see/${appoiment_id}`)
                .then(res => {
                    if (res.data !== null) {
                        // Notify admins and super admins about the new order
                        // socket.emit('newOrder', 'New order placed!')
                        setAppoiments(res.data[0]);
                    }
                    
                    
                })
                .catch(err => console.log(err));
},[])
// console.log(appoiment)
const  appoint_date = appoiment.appoint_date_re;
const  appoint_time = appoiment.appoint_time_re;
console.log(appoint_date)
console.log(appoint_time)
const values = {
     appoint_date :appoint_date,
     appoint_time :appoint_time
}
console.log(values)

// setValues({appoint_date : appoint_date,appoint_time:appoint_time})

    const handleSubmit = (event) => {
        console.log(values)
 
            event.preventDefault();
            axiosClient.post(`/sub-admin/reschedule/lab/see/${appoiment_id}`,values)
                .then(res => {
                    if (res.data !== null) {
                        // Notify admins and super admins about the new order
                        // socket.emit('newOrder', 'New order placed!');

                        alert('Requesting For Reschedule Success!!!');


                        navigate('/sub-admin/home',{ state: { loggedIn: true } },
                           );
                    }
                    else if (res.data === null) {
                        alert('Appoiment Failed');
                    }
                    else {
                        alert('Appoiment Failed');
                    }
                })
                .catch(err => console.log(err));
         
    }

    return (
        <div style={{backgroundColor:'#80808024'}}>
            <div className=' col-4 from doctor-appoiment-from shadow' style={{ backgroundColor: 'white', padding: '2rem 0', borderRadius: '5px', margin:'auto',marginTop:'3vh' }} >
                <h2 className='text-primary'>||Reschedule Appoiment Requests||</h2>
                <br />
                <form action='submit' onSubmit={handleSubmit} >
                    
                    <div className="mb-3" style={{ display: 'flex' }}>
                        <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Suggested Date : </label>
                        <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>{appoiment.appoint_date_re} </label>
                        {/* <input type="date" name='appoint_date'  className="form-control " id="name" aria-describedby="name" style={{ border: '2px solid black', width: '85%', marginLeft: '10%' }} value={appoiment.appoint_date_re}/> */}
                    </div>
                    <div className="mb-3" style={{ display: 'flex' }}>
                        <label for="phone" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Suggested Time :</label>
                        <label for="phone" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>{appoiment.appoint_time_re}</label>
                        {/* <input type="time" name='appoint_time'  className="form-control" id="phone" aria-describedby="phone" style={{ border: '2px solid black', width: '85%', marginLeft: '10%' }} value={appoiment.appoint_time_re} /> */}
                    </div>
                    <button type="submit" className="btn btn-primary mx-3">Approve</button>
                    <button type="reset" className="btn btn-warning mx-3">Reject</button>
                </form>
            </div>

        </div>
    )
}
