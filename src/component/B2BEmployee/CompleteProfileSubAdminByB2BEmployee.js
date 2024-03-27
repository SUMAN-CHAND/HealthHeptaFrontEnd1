import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import UploadImage from '../UploadImage';
import axiosClient from '../axiosClient';
import axios from 'axios';
import { FaLocationDot } from 'react-icons/fa6';
import ClipLoader from 'react-spinners/ClipLoader';

let nextId = 0;

export default function CompleteProfileSubAdminByB2BEmployee() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;

    const location = useLocation();
    const state = location.state;
    // console.log(state)
    const data = location.state.data;
    const value = location.state.value;
    const role = value.role[0];
    console.log(data,value)
    const [values, setValues] = useState({
        subadmin_id: data.insertId,
        fullname: value.name,
        phone: value.phone,
        landmark: '',
        role: value.role,
        description: '',
        Reg_id: '',
        OpeningTime: '',
        CloseingTime: '',
        owner_name: '',
        owner_phonenumber: '',
        Village: '',
        P_O: '',
        City: '',
        district: '',
        state: '',
        pin: '',
        SubAdminImageId: null,
        LicenceImageId: null,
        allPinCodes: [],
    })

    // const [pinCodes, setPinCodes] = useState({
    //     pin_codes:'',
    // })

    // const [values, setValues] = useState({
    //     // ...other product data fields
    //     productImageId: null, // Initialize as null
    // });

    // Callback function to set the productImageId when an image is uploaded
    const handleLicenceImageIdUpload = (imageId) => {
        setValues({ ...values, LicenceImageId: imageId });
    };
    const handleImageUpload = (imageId) => {
        setValues({ ...values, SubAdminImageId: imageId });
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }



    const [pin_code, setPinCode] = useState('');
    const [allPinCodes, setAllPinCodes] = useState([]);
    // console.log(allPinCodes)

    // const handlePinCodeInput = (event) => {
    //     setPinCodes(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    //     // setRole(event.target.value)
    // }


    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        if (values.OpeningTime[0] === values.CloseingTime[0]) {
            alert("Opening Time and Closeing Time Can not be same!!!");
        } else {
            event.preventDefault();
            axiosClient.post(`/sub_admin/complete_profile`, [values, allPinCodes])
                .then(res => {
                    if (res.data === 'success') {
                        alert('Sign up  Successfully!!');
                        navigate('/sub-admin/login');
                    } else if (res.data === 'success by b2b_employee') {
                        alert('Sub Admin Added  Successfully!!');
                        navigate('/b2b/emp/home', { state: { loggedIn: res.data[1] } });
                    }
                    else if (res.data === 'success by admin') {
                        alert('Sub Admin Added  Successfully!!');
                        navigate('/superadmin', { state: { loggedIn: res.data[1] } });

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
    }

    const dateStyle = {
        width: "13.2rem",
        height: "2rem",
        fontSize: "1.1rem",
        width: '90%'
    };

    const [chooseLocation, setChooseLocation] = useState([])
    const [selectLocation, setSelectLocation] = useState()
    const [locations, setLocation] = useState([])



    const [searchLocation, setSearchLocation] = useState([]);
    const [Loading, setLoading] = useState(false);

    const [searchValue, setSearchValue] = useState({
        input: ''
    })

    const [pin, setPin] = useState('');
    const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    const [res, setRes] = useState('');

    const [loading, setloading] = useState(false);

    const handleLocationFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
        const searchword = event.target.value.toLowerCase();
        if (searchword.length === 6) {
            setloading(true)
            axios.get(`https://api.postalpincode.in/pincode/${searchword}`).then((res) => {
                setRes(res.data);
                // setState(res.data[0].PostOffice[0].State);
                // setCity(res.data[0].PostOffice[0].Name);
                if (res.data[0].PostOffice !== null) {
                    setSearchLocation(res.data[0].PostOffice)
                    setloading(false)
                    // console.log(res.data[0].PostOffice)
                } else {
                    setSearchLocation([]);
                    setLoading(true)
                    setloading(false)
                }
            }).catch((e) => {
                console.log(e);
                setLoading(true)
                setSearchLocation([]);

            })
        } else {
            setLoading(false)
            setSearchLocation([]);
            setloading(false)
        }

    };

    const setLocationValueTOFilter = async (location) => {
        setValues({
            P_O: location.Name,
            district: location.District,
            state: location.Pincode,
            pin: location.Pincode,
        });
        setSearchValue({
            input: location.PinCode,
        });
        setChooseLocation(location.PinCode);
        setSearchLocation([]);
        console.log(location);
        console.log(values)
    }


    return (
        <div>
            <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='p-2' style={{}}>Complete Your Profile <span className='text-info'>{value.name} !!</span> </h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        {/* <h5> <span className='text-info'>Healthhepta</span></h5> */}

                        <div className='mb-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className='bi bi-person person'>
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                        </div>
                        <div className='complete_profile_divs'>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="product_name">Full {role === "Medicine Shop" ? <>Pharmacy Shop</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory</> : <></>}{role === 'clinic' ? <>Clinic</> : <></>} Name :<span className='text-danger'>*</span> : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Full Name'
                                    name='fullname' onChange={handleInput} value={value.name} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="phone">Phone No <span className='text-danger'>*</span> : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Phone No '
                                    name='phone' onChange={handleInput} value={value.phone} /><br />
                            </div>
                        </div>
                        <div className='complete_profile_divs'>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="landmark">Landmark <span className='text-danger'>*</span> : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter landmark'
                                    name='landmark' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="role">Role<span className='text-danger'>*</span> : </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Your Role'
                                    name='role' onChange={handleInput} value={role.toUpperCase()} /><br />
                            </div>
                        </div>
                        <div className='complete_profile_divs'>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="description">Description <span className='text-danger'>*</span>: </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Describe Your self'
                                    name='description' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="Reg_id">Registraction Id <span className='text-danger'>*</span>: </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Your Registraction Id'
                                    name='Reg_id' onChange={handleInput} /><br />
                            </div>
                        </div>
                        <div className='complete_profile_divs'>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="OpeningTime">Opening Time <span className='text-danger'>*</span>: </label><br></br>
                                <input required className='m-2 p-1' type="time" style={{ width: '33vw' }} placeholder='Enter Opening Time'
                                    name='OpeningTime' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="CloseingTime">Closing Time <span className='text-danger'>*</span>: </label><br></br>
                                <input required className='m-2 p-1' type="time" style={{ width: '33vw' }} placeholder='Enter  Description'
                                    name='CloseingTime' onChange={handleInput} /><br />
                            </div>
                        </div>
                        <div className='complete_profile_divs'>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="owner_name"> {role === "Medicine Shop" ? <>Pharmacy Shop Owner</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory Owner</> : <></>}{role === 'clinic' ? <>Clinic Owner</> : <></>} Name <span className='text-danger'>*</span>: </label><br></br>
                                <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Owner Name'
                                    name='owner_name' onChange={handleInput} /><br />
                            </div>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="owner_phonenumber">{role === "Medicine Shop" ? <>Pharmacy Shop Owner</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory Owner</> : <></>}{role === 'clinic' ? <>Clinic Owner</> : <></>}  Phone Number <span className='text-danger'>*</span>: </label><br></br>
                                {/* <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter  Owner phone number'
                                    name='owner_phonenumber' onChange={handleInput} /><br /> */}
                                <input
                                    className='m-2 p-1'
                                    onChange={handleInput}
                                    name='owner_phonenumber'
                                    id="phone"
                                    type="tel"
                                    required
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="Enter  Owner phone number" style={{ width: '33vw', border: '1px solid gray', borderRadius: '1px' }} />
                                <span className="validity"></span>
                            </div>
                        </div>

                        <div style={{ textAlign: 'left', fontWeight: '700' }}>
                            <label className='m-2 p-3'>Add {role === "Medicine Shop" ? <>Pharmacy Shop</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory</> : <></>}{role === 'clinic' ? <>Clinic</> : <></>} Full Address :- </label>
                            <div className='complete_profile_divs'>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="Village">Village / Road name : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Village or Road Name'
                                        name='Village' onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="P_O">Post Office : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} value={location.Name} placeholder='Enter  Post office'
                                        name='P_O' onChange={handleInput} /><br />
                                </div>
                            </div>
                            <div className='complete_profile_divs'>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="City">City : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Your City'
                                        name='City' onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="district">District : </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} value={location.District} placeholder='Enter  District'
                                        name='district' onChange={handleInput} /><br />
                                </div>
                            </div>
                            <div className='complete_profile_divs'>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="state">State: </label><br></br>
                                    <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} value={location.State} placeholder='Enter State'
                                        name='state' onChange={handleInput} /><br />
                                </div>
                                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                    <label className='p-1' htmlFor="pin">Pin Code : </label><br></br>
                                    <input required className='m-2 p-1' type="number" style={{ width: '33vw' }} placeholder='Enter  Pin code'
                                        name='pin' onChange={handleInput} /><br />
                                </div>

                                {/* <div id='pincode_choose' className="" style={{ width: '90%' }}>
                                    <input className="form-control" style={{ height: '50px' }} name='input' onChange={handleLocationFilter} placeholder="Pin Code" value={searchValue.input} />

                                    {searchLocation.length !== 0 ? <>
                                        <div className="inputResultofmodal" >
                                            {searchLocation.map((location, index) => {
                                                return <span onClick={() => setLocationValueTOFilter(location)} style={{ textDecoration: 'none', color: 'black' }}  >
                                                    <div style={{ cursor: 'pointer', padding: '15px', margin: '5px', color: 'black', border: '2px solid #fff0d7', display: 'flex', alignItems: 'center' }} key={index}  ><FaLocationDot /> {location.Pincode},{location.Name},{location.State}</div>
                                                </span>
                                            }
                                            )}
                                        </div>
                                    </> : <>
                                    </>}
                                    {loading && <ClipLoader color="blue" />}
                                    {Loading ? <>
                                        <p style={{ padding: '15px' }}>No data found for this pincode!!</p>
                                    </> : <>
                                        <p style={{ padding: '15px' }}>Please type your full Pin Code(6 digit) here!!</p>

                                    </>
                                    }
                                </div> */}

                            </div>
                        </div>
                        <div className='complete_profile_divs'>
                            <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="owner_name"> {role === "Medicine Shop" ? <>Enter Served PinCodes</> : <></>}  <span className='text-danger'>*</span>: </label><br></br>
                                {/* <input required className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Owner Name'
                                    name='pin_codes' onChange={handlePinCodeInput} /><br /> */}
                                {/* <h1>Inspiring sculptors:</h1> */}

                                <input
                                    value={pin_code}
                                    onChange={e => setPinCode(e.target.value)}
                                    className='m-2 p-1' type="text" style={{ width: '33vw' }} placeholder='Enter Served PinCodes'
                                    pattern="[0-9]{3}[0-9]{3}"
                                />
                                {/* <span className="validity"></span> */}

                                <button type='button' onClick={() => {
                                    allPinCodes.push({
                                        id: nextId++,
                                        pin_code: pin_code,
                                    });
                                    setPinCode('')
                                }} className='btn btn-primary'>Add</button>
                                <ul>
                                    {allPinCodes.map(pin_codes => (
                                        <li key={pin_codes.id}>Pin Code: {pin_codes.pin_code}</li>
                                    ))}
                                </ul>
                                {/* <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                                <label className='p-1' htmlFor="owner_phonenumber">{role === "Medicine Shop" ? <>Pharmacy Shop Owner</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory Owner</> : <></>}{role === 'clinic' ? <>Clinic Owner</> : <></>}  Phone Number <span className='text-danger'>*</span>: </label><br></br>
                              
                                <input
                                    className='m-2 p-1'
                                    onChange={handleInput}
                                    name='owner_phonenumber'
                                    id="phone"
                                    type="tel"
                                    required
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="Enter  Owner phone number" style={{ width: '33vw', border: '1px solid gray', borderRadius: '4px' }} />
                                <span className="validity"></span>
                                <p style={{ fontWeight: '400', marginLeft: '2vw' }}>Format: 1234567890</p>
                            </div> */}
                            </div>
                        </div>

                        <div className='form-check ' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="image">Add {role === "Medicine Shop" ? <>Pharmacy Shop</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory</> : <></>}{role === 'clinic' ? <>Clinic</> : <></>}  Image </label>
                            {/* <input className='m-2  p-1' type="file" style={{ width: '90%' }} placeholder='Enter Product image'
                                name='img' onChange={handleInput} /><br /> */}
                            <UploadImage onImageUpload={handleImageUpload} />
                        </div>
                        <div className="form-check licence-add" style={{ textAlign: 'initial', fontWeight: '700' }}>
                            <label className='p-1' htmlFor="image">Add {role === "Medicine Shop" ? <>Pharmacy Shop</> : <></>} {role === 'doctor' ? <>Doctor</> : <></>}{role === "Laboratory" ? <>Laboratory</> : <></>}{role === 'clinic' ? <>Clinic</> : <></>} Licence</label>
                            {/* <span className='mx-3'><input type="file" name="licence" id="licence" /></span> */}
                            {/* <UploadImage/> */}
                            <UploadImage onImageUpload={handleLicenceImageIdUpload} />

                        </div>

                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} />
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
