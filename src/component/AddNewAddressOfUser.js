import React, { useState } from 'react'
import axiosClient from './axiosClient';
import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup';


export default function AddUserNewAddress({closeTheModal}) {

    
    const success = () => toast.success('Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });;
    const danger = () => toast.error('Error ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const [values, setValues] = useState({
        Village: '',
        P_O: '',
        City: '',
        district: '',
        State: '',
        Pin: '',
    })

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const onAPostSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/profile/address`, values)
            .then(res => {
                if (res.data !== null) {
                    // console.log(values)
                    closeTheModal();
                    success();
                }
                else if (res.data === null) {
                    danger();
                }
                else {
                    danger();
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div style={{ width: '60vw' }}>
            <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
                <form onSubmit={onAPostSubmit} style={{ width: '90%', borderRadius: '5px' }} className='shadow p-2 m-2'>
                    <div className='m-2' style={{ display: 'flex' ,alignItems:'center',justifyContent:'space-between'}}>
                        <p style={{ marginBottom: 'inherit',marginLeft:'5%' }}>Village :- </p>
                        <input required style={{ width: '70%' }} type="text" name="Village" id="vill" onChange={handleInput} placeholder="Enter Your Village" />
                    </div>
                    <div className='m-2' style={{ display: 'flex' ,alignItems:'center',justifyContent:'space-between'}}>
                        <p style={{ marginBottom: 'inherit', marginLeft:'5%' }}>P-O :- </p>
                        <input required style={{ width: '70%' }} type="text" name="P_O" id="po" onChange={handleInput} placeholder=" Enter your postoffice"/>
                    </div>
                    <div className='m-2' style={{ display: 'flex' ,alignItems:'center',justifyContent:'space-between'}}>
                        <p style={{ marginBottom: 'inherit', marginLeft:'5%' }}>City :- </p>
                        <input required style={{ width: '70%' }} type="text" name="City" id="city" onChange={handleInput} placeholder="Enter Your city" />
                    </div>
                    <div className='m-2' style={{ display: 'flex' ,alignItems:'center',justifyContent:'space-between'}}>
                        <p style={{ marginBottom: 'inherit', marginLeft:'5%' }}>District :- </p>
                        <input required style={{ width: '70%' }} type="text" name="district" id="district" onChange={handleInput} placeholder="Enter Your district"  />
                    </div>
                    <div className='m-2' style={{ display: 'flex' ,alignItems:'center',justifyContent:'space-between'}}>
                        <p style={{ marginBottom: 'inherit', marginLeft:'5%' }}>State :- </p>
                        <input required style={{ width: '70%' }} type="text" name="State" id="state" onChange={handleInput} placeholder="Enter your state" />
                    </div>
                    <div className='m-2' style={{ display: 'flex' ,alignItems:'center',justifyContent:'space-between'}}>
                        <p style={{ marginBottom: 'inherit', marginLeft:'5%' }}>Pin No :- </p>
                        <input required style={{ width: '70%' }} type="number" name="Pin" id="pin" onChange={handleInput} placeholder= "Enter your pin code" />
                    </div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',margin:'5px'}}>
                    <button className='btn btn-info' type='submit' >Save</button>
                    <button className='btn btn-warning' type='reset' >Clear</button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}
