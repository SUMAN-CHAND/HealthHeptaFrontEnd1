import React, { useState } from 'react'

import {
    Link, useNavigate
} from "react-router-dom";




export default function ChooseRoleModal({ closeTheModal }) {
    const navigate = useNavigate();
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

            <div className="clinic choose-role-div" >
                <button onClick={closeTheModal} style={{ marginLeft: '85%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
                <div className=" shadow m-3 p-3" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', fontWeight: '700', color: 'white', backgroundColor: '#1c98b3', borderRadius: '5px' }}>
                    <div id='mob-chooserole-lable' className="form-check mob-chooserole-lable m-2 p-2">
                        {/* <input className="form-check-input mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" value='doctor' id="flexRadioDefault1" onChange={handleChange} /> */}
                        <label className="label"  htmlFor="doctor" style={{display:'flex'}}>
                        <input
                            type="radio"
                            name="role"
                            id="doctor"
                            value="doctor"
                            onChange={handleChange}
                        />
                           <p style={{marginLeft:'1rem'}}>Are You a Doctor</p>
                            
                        </label>
                    </div>
                    <div id='mob-chooserole-lable' className="form-check mob-chooserole-lable  m-2 p-2">
                        {/* <input className="form-check-input  mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" value='Medicine Shop' id="flexRadioDefault2" onChange={handleChange} /> */}
                        <label className="form-check-label" htmlFor="Medicine Shop" style={{display:'flex'}}>
                        <input
                            type="radio"
                            name="role"
                            id='Medicine Shop'
                            value="Medicine Shop"
                            onChange={handleChange}
                        />
                          <p style={{marginLeft: '1rem'}}> Are You a Medicine Sealer</p> 
                        </label>
                    </div>
                    <div id='mob-chooserole-lable' className="form-check mob-chooserole-lable  m-2 p-2">
                        {/* <input className="form-check-input  mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" value='lab' id="flexRadioDefault2" onChange={handleChange} /> */}
                        <label className="form-check-label" htmlFor="laboratory" style={{display:'flex'}}>
                        <input
                            type="radio"
                            name="role"
                            id='laboratory'
                            value="Laboratory"
                            onChange={handleChange}
                        />
                           <p style={{marginLeft: '1rem'}}>Are You a Laboratory Owner</p> 
                        </label>
                    </div>
                    <div id='mob-chooserole-lable' className="form-check mob-chooserole-lable  m-2 p-2">
                        {/* <input className="form-check-input  mx-2" style={{ marginLeft: '2vw' }} type="radio" name="role" id="flexRadioDefault2" value='clinic' onChange={handleChange} /> */}
                        <label className="form-check-label" htmlFor="clinic" style={{display:'flex'}}>
                        <input
                            type="radio"
                            name="role"
                            id='clinic'
                            value="clinic"
                            onChange={handleChange}
                        />
                           <p style={{marginLeft: '1rem'}}>Are You a Clinic Owner</p> 
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}
