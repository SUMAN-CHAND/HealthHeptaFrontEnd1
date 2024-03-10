import React, { useEffect, useState } from 'react'
import axiosClient from './axiosClient';
const customStyle = {
    maxHeight: '60vh',
    maxWidth: '85vw',
    borderRadius: '5px',
    overflow: 'hidden',
    background: 'white',
    backgroundColor: 'white'
};
export default function ViewDoctorDetailsModal({ closeTheModal, doctor_id }) {
    const [doctors, setDoctors] = useState([]);
    const [image, setImage] = useState([]);
    const [doctorTimeTable, setDoctorTimeTable] = useState([]);
    useEffect(() => {
        axiosClient.get(`/viewdetails/doctor/${doctor_id}`)
            .then(res => {
                if (res.data) {
                    setDoctors(res.data[0]);
                    setImage(res.data[1]);
                    setDoctorTimeTable(res.data[2]);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="container " style={customStyle}>
                <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
                <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <div>
                        {doctors.map((doctor, index) => (
                            <div className="doctor-profile" style={{ display: 'flex' }}>
                                <div style={{ width: '35%' }}>
                                    <img src={`http://${process.env.REACT_APP_HOST}:8081/${image[0].path}`} className="card-img-top" alt="..." style={{ width: '75%' }} />
                                </div>
                                <div className='' style={{ width: "1px", backgroundColor: 'grey' }}>
                                </div>
                                <div className="deccription" style={{ margin: '0 1vw', padding: '0 1vw', display: 'flex' }}>
                                    <div style={{ display: 'flex', alignItems: 'self-start', flexDirection: 'column', marginRight: '2vw' }}>
                                        <h5>Doctor Name :- {doctor.doc_name}</h5>
                                        <p>Doctor Description :- {doctor.doc_desc} </p>
                                        <p className=''>Location :- {doctor.location}</p>
                                        <p>Doctor Clinic :- {doctor.clinic}</p>
                                        <p>Clinic Description :- {doctor.clinic_desc}</p>
                                        <p>Doctor Specializes :- {doctor.specializes}</p>
                                        <p>Doctor Phone Number :- {doctor.Phone_number}</p>
                                        <p>Doctor Visit Type :- {doctor.type_of_visite}</p>
                                    </div>
                                    <div className='timeTable' style={{ marginRight: '2vw' }}>
                                        <table className='table table-striped'>
                                            <thead className='thead-dark'>
                                                <tr>
                                                    <th scope='col'>Id</th>
                                                    <th scope='col'>Day</th>
                                                    <th scope='col'>Start Time</th>
                                                    <th scope='col'>End Time</th>
                                                </tr>
                                            </thead>
                                            {doctorTimeTable.map((doctort, index) => (
                                                <tbody style={{ verticalAlign: 'middle' }}>
                                                    <tr>
                                                        <th scope='row'>{index + 1}</th>
                                                        <td>{doctort.weekly_day}</td>
                                                        <td>{doctort.starting_time}</td>
                                                        <td>{doctort.ending_time}</td>
                                                    </tr>

                                                </tbody>
                                            ))}
                                        </table>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>

    )
}
