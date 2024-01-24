import axios from 'axios';
import React, {useState } from 'react';
import {useNavigate } from 'react-router-dom';
import UploadImage from '../UploadImage';
import axiosClient from '../axiosClient';


export default function AddNewLaboratoryTest() {
    // Main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
 
   
    const [values, setValues] = useState({
        Test_Name: '',
        Test_Desc: '',
        price:'',
        test_imageId: null
    });

    // Callback function to update the productImageId when an image is uploaded
    const handleImageUpload = (imageId) => {
        setValues({ ...values, test_imageId: imageId });
    };

    const [check, setCheck] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {


            //    console.log(response.data)
            axiosClient.post(`/sub-admin/add-new-laboratory-test`, values)
                .then(async (res) => {
                    if (res.data > 0) {
                    //    console.log(res.data)
                    alert('Laboratory Test Added Successfully!!');
                                    navigate('/sub-admin/home', { state: { loggedIn: true } });
                    } else if (res.data === null) {
                        alert('Error');
                    } else {
                        alert('Error');
                    }
                })
                .catch((err) => console.log(err));


        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const dateStyle = {
        width: '13.2rem',
        height: '2rem',
        fontSize: '1.1rem',
        width: '90%',
    };

    // const addTimeToTimeTable = (newTimeTable) => {
    //     setTimeTable([...timeTable, newTimeTable]); // Update state with new data
    //     closeModal(); // Close modal after adding data
    // };
    return (
        <div>
            <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='p-2' style={{}}>Add New Laboratory Test</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        {/* <h5> <span className='text-info'>Healthhepta</span></h5> */}

                        <div className='mb-3' style={{ display: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='bi bi-person person'>
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="doc_name">Test Name : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Test Full Name'
                                    name='Test_Name' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="doc_desc">Test Description : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Test  Description'
                                    name='Test_Desc' onChange={handleInput} /><br />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="doc_name">Price : </label><br></br>
                                <input required className='m-2 p-1' type="number" style={{ width: '33vw' }} placeholder='Enter Price of the Test'
                                    name='price' onChange={handleInput} /><br />
                            </div>
                           
                        </div>
                 
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_category">Add Your Image </label>
                            {/* <input className='m-2  p-1' type="file" style={{ width: '90%' }} placeholder='Enter Product image'
                                name='img' onChange={handleInput} /><br /> */}
                            <UploadImage onImageUpload={handleImageUpload} />
                        </div>

                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>Please confirm the data are  <span className='text-warning'>right</span> </p>

                            </label>
                        </div>
                        {/* <Link to='/login'> */}
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '40%', color: 'white', cursor: 'pointer' }}>Submit</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
