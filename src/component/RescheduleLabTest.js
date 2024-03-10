import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from './axiosClient';
export default function RescheduleLabTest() {
    var appoint_date = '';
    var appoint_time = '';
    const [values, setValues] = useState({
        appoint_date: appoint_date,
        appoint_time: appoint_time,

    });
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const param = useParams();
    const appoiment_id = param.appoiment_id;
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/reschedule/lab/${appoiment_id}`, values)
            .then(res => {
                if (res.data !== null) {
                    alert('Requesting For Reschedule Success!!!');
                    navigate('/profile', { state: { loggedIn: true } },
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
        <div style={{ backgroundColor: '#80808024' }}>
            <div className=' col-4 from doctor-appoiment-from shadow' style={{ backgroundColor: 'white', padding: '2rem 0', borderRadius: '5px', margin: 'auto', marginTop: '3vh' }} >
                <h2 className='text-primary'>||Reschedule Appoiment||</h2>
                <br />
                <form action='submit' onSubmit={handleSubmit}>
                    <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label for="name" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Enter Date : </label>
                        <input type="date" name='appoint_date' onChange={handleInput} className="form-control " id="name" aria-describedby="name" style={{ border: '2px solid black', width: '85%', marginLeft: '10%' }} />
                    </div>
                    <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                        <label for="phone" className="form-label   m-2" style={{ textAlign: 'left', fontWeight: '700' }}>Enter Time :</label>
                        <input type="time" name='appoint_time' onChange={handleInput} className="form-control" id="phone" aria-describedby="phone" style={{ border: '2px solid black', width: '85%', marginLeft: '10%' }} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-3">Submit</button>
                    <button type="reset" className="btn btn-warning mx-3">Clear</button>
                </form>
            </div>
        </div>
    )
}
