import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UploadImage from '../UploadImage';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import AddTimeTable from './AddTimeTable';
import axiosClient from '../axiosClient';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

let timeTable = [];

export default function AddNewDoctor() {
    // Main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.backgroundColor = 'rgb(76 76 76 / 19%)';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        document.body.style.backgroundColor = '#fff';
        setIsOpen(false);
    }

    const location = useLocation();

    useEffect(() => {
        if (location.state !== null) {
            timeTable.push(location.state);
            console.log(timeTable);
        }
    }, [location.state]);
    // This makes sure the effect runs only when location.state changes by using use effect please see what happend

    // })

    const uniqueTimes = [...new Set(timeTable.map(t => t.day_of_week))];

    console.log(uniqueTimes)
    console.log(timeTable);

    let res = timeTable.filter(item => !uniqueTimes.includes(item));
    console.log(res);

    const [values, setValues] = useState({
        doc_name: '',
        doc_desc: '',
        specializes: '',
        location: '',
        clinic: '',
        clinic_desc: '',
        doctor_imageId: null,
        Phone_number: '',
        type_of_visite: '',
    });

    // Callback function to update the productImageId when an image is uploaded
    const handleImageUpload = (imageId) => {
        setValues({ ...values, doctor_imageId: imageId });
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
            axiosClient.post(`/sub-admin/add-doctor`, values)
                .then(async (res) => {
                    if (res.data > 0) {
                        const insertId = res.data;
                        axiosClient.post(`/sub-admin/add-doctor/time-table`, [timeTable, insertId])
                            .then(async (response) => {
                                console.log(response)
                                if (response.data === 'success') {
                                    alert('Doctor Added Successfully!!');
                                    navigate('/sub-admin/home', { state: { loggedIn: true } });
                                    timeTable = [];
                                } else {
                                    // Handle logout failure
                                    console.error(response.data.message);
                                }
                            })
                            .catch((err) => console.log(err));

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
                <h2 className='p-2' style={{}}>Add New Doctor</h2>
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
                                <label className='p-1' htmlFor="doc_name">Full Name : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Doctor Full Name'
                                    name='doc_name' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="doc_desc">Description : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Doctor  Description'
                                    name='doc_desc' onChange={handleInput} /><br />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="specializes">Specializes : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Your specializes field'
                                    name='specializes' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="location">Location : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Location'
                                    name='location' onChange={handleInput} /><br />
                            </div>

                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="clinic">Clinic Name : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Clinic Name'
                                    name='clinic' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="clinic_desc">Clinic Description : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Clinic  Description'
                                    name='clinic_desc' onChange={handleInput} /><br />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="Phone_number">Phone Number : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Your Phone Number'
                                    name='Phone_number' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="type_of_visite">Type Of Visiting : </label><br></br>
                                {/* <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Your Type Of Visite'
                                    name='type_of_visite' onChange={handleInput} /><br /> */}
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <select
                                        onChange={handleInput}
                                        required className='m-2 p-1' type="text" style={{ width: '33vw' }}
                                        placeholder='Enter  Your Type Of Visite'
                                        name='type_of_visite'
                                    >
                                        <option value="select">Select</option>
                                        <option value="offline">Offline</option>
                                        <option value="online">Online</option>
                                        <option value="both">Both</option>
                                    </select> <br />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
                            {timeTable.length > 0 && (
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
                                                {timeTable.map((time, index) => (
                                                    <tr key={index}>
                                                        <th scope='row'>{index + 1}</th>
                                                        <td>{time.day_of_week}</td>
                                                        <td>{time.start_time}</td>
                                                        <td>{time.end_time}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            <Link className=" btn btn-warning" aria-current="page" onClick={openModal} style={{ width: '33%' }}>Add Time Table</Link>

                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <AddTimeTable closeTheModal={closeModal} />
                            </Modal>

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
