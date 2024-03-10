import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';

export default function DoctorTimeTable() {
    const param = useParams();
    const doctor_id = param.doctor_id;

    const [TimeTable, setTimeTable] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        axiosClient.get(`/sub-admin/home/timetable/doctor/${doctor_id}`)
            .then(res => {
                if (res.data !== null) {
                    // Notify admins and super admins about the new order
                    // socket.emit('newOrder', 'New order placed!')
                    setTimeTable(res.data);
                }


            })
            .catch(err => console.log(err));
    }, [])
    // console.log(appoiment)
    const CloseMethod = (e) => {
        e.preventDefault();
        console.log("object")
        navigate('/sub-admin/home', { state: { loggedIn: true } },
        );

    }

    // setValues({appoint_date : appoint_date,appoint_time:appoint_time})


    return (
        <div style={{ backgroundColor: '#80808024' }}>
            <div className=' col-4 from doctor-appoiment-from shadow' style={{ backgroundColor: 'white', padding: '2rem 0', borderRadius: '5px', margin: 'auto', marginTop: '3vh', width: '80vw' }} >
                <h2 className='text-primary'>||Doctor Time Table||</h2>
                <br />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column', width: '80vw' }}>
                    {TimeTable.length > 0 && (
                        <div className='p-1'>

                            <div className='timeTable' style={{ width: '50vw' }}>
                                <table className='table table-striped'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope='col'>Id</th>
                                            <th scope='col'>Day</th>
                                            <th scope='col'>Start Time</th>
                                            <th scope='col'>End Time</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ verticalAlign: 'middle' }}>
                                        {TimeTable.map((time, index) => (
                                            <tr key={index}>
                                                <th scope='row'>{index + 1}</th>
                                                <td>{time.weekly_day}</td>
                                                <td>{time.starting_time}</td>
                                                <td>{time.ending_time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    <Link className=" btn btn-danger" aria-current="page" onClick={(e) => CloseMethod(e)} style={{ width: '33%' }}>Close </Link>
                </div>
            </div>

        </div>
    )
}
