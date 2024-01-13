import React, { useState, useEffect } from 'react'

import {
    Link, useNavigate
} from "react-router-dom";

const customStyle = {
    maxHeight: '60vh',
    maxWidth: '85vw',
    borderRadius: '5px',
    overflow: 'hidden',
    background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
    backgroundColor: 'rgb(41 116 132)'
};


export default function ChooseRoleModal({ closeTheModal }) {
    const navigate = useNavigate();
    // const [values, setValues] = useState({
    //     role: ''
    // });

    // const handleChange = (event) => {
    //     setValues({ ...values, [event.target.name]: event.target.value });
    //     console.log(values)
    //     HandleSubmit();
    // }
    // const [values, setValues] = useState({
    //     role: ''
    // });

    // const handleChange = (event) => {
    //     setValues({ role: event.target.value});
    //     console.log(values)
    //     // Now you're correctly updating the 'values' object
    //     // HandleSubmit();
    // }

    // function HandleSubmit() {
    //     closeTheModal();
    //     navigate('/sub-admin/signup', {
    //         state: {
    //             role: values.role
    //         }
    //     });
    // }

    // const navigate = useNavigate();
    // const [role, setRole] = useState('');

    const [values, setValues] = useState({
        role: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        console.log(value)
        handleSubmit(value);
    };

    const handleSubmit = (value) => {
        closeTheModal();
        navigate('/sub-admin/signup', {
            state: {
                role: value,
            },
        });
    };



    return (
        <>

            <div className="clinic  " style={customStyle}>
                <button onClick={closeTheModal} style={{ marginLeft: '90%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
                <div className=" shadow m-3 p-3" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', fontWeight: '700', color: 'white', backgroundColor: '#1c98b3', borderRadius: '5px' }}>
                    <div className="form-check m-2 p-2">
                        {/* <input className="form-check-input mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" value='doctor' id="flexRadioDefault1" onChange={handleChange} /> */}
                        <input
                            type="radio"
                            name="role"
                            value="doctor"
                            onChange={handleChange}
                        />
                        <label className="label" htmlFor="doctor">
                            Are You a Doctor
                        </label>
                    </div>
                    <div className="form-check m-2 p-2">
                        {/* <input className="form-check-input  mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" value='Medicine Shop' id="flexRadioDefault2" onChange={handleChange} /> */}
                        <input
                            type="radio"
                            name="role"
                            value="Medicine Shop"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Are You a Medicine Sealer
                        </label>
                    </div>
                    <div className="form-check m-2 p-2">
                        {/* <input className="form-check-input  mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" value='lab' id="flexRadioDefault2" onChange={handleChange} /> */}
                        <input
                            type="radio"
                            name="role"
                            value="Laboratory"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Are You a Laboratory Owner
                        </label>
                    </div>
                    <div className="form-check m-2 p-2">
                        {/* <input className="form-check-input  mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" id="flexRadioDefault2" value='clinic' onChange={handleChange} /> */}
                        <input
                            type="radio"
                            name="role"
                            value="clinic"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Are You a Clinic Owner
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}
