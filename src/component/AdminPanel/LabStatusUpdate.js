import React, { useEffect, useState } from 'react'

import {
    Link, useNavigate, useParams
} from "react-router-dom";
import { FaRegEdit } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import axiosClient from '../axiosClient';

const customStyles = {
    maxHeight: '80vh',
    maxWidth: '85vw',
    minWidth: '65vw',
    borderRadius: '5px',
    overflow: 'hidden',
    // background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
    // backgroundColor: 'rgb(41 116 132)'
}


export default function LabStatusUpdate() {
    const [labBooking, setLabbokking] = useState([]);
    const param = useParams();
    var id = param.id;
    

   

    const [values, setValues] = useState({
        labbooking_id: id,
        labstatus: '',

    })

    useEffect(() => {
        axiosClient.get(`/superadmin/lab/test/${id}`)
            .then(res => {
                if (res.data !== null) {
                    setLabbokking(res.data[0]);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/superadmin/update/labbokking/status`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Lab Test  status updated Successfully!!')
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
    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        paddingTop: '1vh',
        flexDirection: 'column',
        overflowX: 'auto',
        overflowY: 'auto',
        height: '69vh'
    }


    return (
        <>
            <div style={customStyles}>

                <div>
                    <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Update Lab Booking Details||</h2>
                        <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                            <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                                <h5> <span className='text-info'>Healthhepta</span></h5>
                                

                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="order_id">Lab Booking Id : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter labbooking id'
                                        name='id' value={id} onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="labstatus">Lab Booking Status: </label>
                                    <br />
                                    <select
                                        className='m-2 p-1'
                                        required
                                        onChange={handleInput} name='labstatus'
                                        style={{ width: '90%', cursor: 'pointer' }}>
                                        <option value="select">{labBooking.LabTestStatus}</option>
                                        <option value="accepted">Accepted</option>
                                        <option value="completed">Completed</option>
                                    </select><br />
                                </div>
                                <div className="form-check ">
                                    <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        <p>You are sure to update the  <span className='text-warning'>status</span> </p>
                                    </label>
                                </div>
                                <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
