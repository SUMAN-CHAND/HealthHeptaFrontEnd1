import React, { useState, useEffect } from 'react'


import {
    Link, useNavigate
} from "react-router-dom";
import axios from 'axios';

const customStyle = {
    maxHeight: '60vh',
    maxWidth: '85vw',
    borderRadius: '5px',
    overflow: 'hidden',
    //   background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
    //   backgroundColor: 'rgb(41 116 132)'

};



export default function AddTimeTable({ closeTheModal }) {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

    const [locations, setLocation] = useState([])
    const [chooseLocation, setChooseLocation] = useState([])
    const [selectLocation, setSelectLocation] = useState()
    const [doctors, setDoctors] = useState([])
    const [chooseDoctor, setChooseDoctor] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {

                setSelectLocation(res.data[2])
            })
    });


    const navigate = useNavigate();
    const [values, setValues] = useState({

        day_of_week: '',
        start_time: '',
        end_time: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }

    const saveTimeTable = async () => {
        try {
            closeTheModal();
            console.log(values)
            // const response = await axios.post('http://localhost:8081/sub-admin/add-doctor/time-table', values);
            // if (response.data !== null) {
                navigate(`/sub-admin/home/add-new-doctor`,
                    {
                        state: {
                            day_of_week:values.day_of_week[0],
                            start_time:values.start_time[0],
                            end_time:values.end_time[0]
                        }
                    })
                //    console.log(response.data)
            // } else {
            //     // Handle logout failure
            //     console.error(response.data.message);
            // }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    const handleClick = event => {
        setChooseDoctor([]);
    };


    return (
        <>
            <div className="timetable " style={customStyle}>
                <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
                <div className="timetable shadow" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkseagreen', borderRadius: '5px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="day_of_week">Opening Days : </label><br></br>

                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <select
                                    onChange={handleInput}
                                    required className='m-2 p-1' type="text" style={{ width: '33vw' }}
                                    placeholder='Enter  Opening Days'
                                    name='day_of_week'
                                >
                                    <option value="select">Select</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                                </select> <br />
                            </div>

                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="start_time">Opening Time : </label><br></br>
                            <input required className='m-2 p-1' type="time" style={{ width: '33vw' }} placeholder='Enter Opening Time'
                                name='start_time' onChange={handleInput} /><br />
                        </div>
                    </div>

                    <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='p-1' htmlFor="end_time">Closing Time: </label><br></br>
                        <input required className='m-2 p-1' type="time" style={{ width: '33vw' }} placeholder='Enter  Closing Time'
                            name='end_time' onChange={handleInput} /><br />
                    </div>
                    <div className=' p-1 my-2' style={{ textAlign: 'initial', fontWeight: '700' }} >
                        <label className='btn btn-primary' onClick={saveTimeTable} >Save</label><br></br>
                    </div>
                </div>
            </div>
        </>
    )
}
