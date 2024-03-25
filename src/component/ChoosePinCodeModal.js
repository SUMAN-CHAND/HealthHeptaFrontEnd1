import React, { useState, useEffect } from 'react';
import axiosClient from './axiosClient';
import { FaLocationDot } from "react-icons/fa6";
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';


export default function ChoosePinCodeModal({ onHide }) {
    // const [pincode, setPincode] = useState('');
    // const [data, setData] = useState([]); // State to hold fetched data
    // const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    // const handlePincodeChange = (event) => {
    //     setPincode(event.target.value);
    // };

    // const fetchLocations = async () => {
    //     setIsLoading(true); // Set loading indicator to true
    //     if (!pincode) return; // Early return if no pincode entered

    //     try {
    //         const response = await fetch(`/all/pincodes?pincode=${pincode}`);
    //         const fetchedData = await response.json();
    //         setData(fetchedData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Handle errors appropriately, e.g., display an error message to the user
    //     } finally {
    //         setIsLoading(false); // Set loading indicator to false regardless of success or error
    //     }
    // };

    // useEffect(() => {
    //     fetchLocations();
    // }, [pincode]); // Re-fetch data on pincode change

    // const renderLocations = () => {
    //     if (isLoading) return <p>Loading...</p>; // Loading message while fetching

    //     if (!data.length) return <p>No data found for this pincode.</p>; // No data message


    //     return (
    //         <div>
    //             <h2>Pharmacies:</h2>
    //             <ul>
    //                 {data.pharmacies.map((pharmacy) => (
    //                     <li key={pharmacy.id}>{pharmacy.name} ({pharmacy.address})</li>
    //                 ))}
    //             </ul>

    //             <h2>Clinics:</h2>
    //             <ul>
    //                 {data.clinics.map((clinic) => (
    //                     <li key={clinic.id}>{clinic.name} ({clinic.address})</li>
    //                 ))}
    //             </ul>

    //             <h2>Labs:</h2>
    //             <ul>
    //                 {data.labs.map((lab) => (
    //                     <li key={lab.id}>{lab.name} ({lab.address})</li>
    //                 ))}
    //             </ul>

    //             <h2>Doctors:</h2>
    //             <ul>
    //                 {data.doctors.map((doctor) => (
    //                     <li key={doctor.id}>
    //                         {doctor.name} - {doctor.specialization}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    // };

    const [chooseLocation, setChooseLocation] = useState([])
    const [selectLocation, setSelectLocation] = useState()
    const [locations, setLocation] = useState([])

    useEffect(() => {
        axiosClient.get(`/served/locations`)
            .then(res => {
                setLocation(res.data);
            })
    }, [])

    const [searchLocation, setSearchLocation] = useState([]);
    const [Loading, setLoading] = useState(false);

    const [searchValue, setSearchValue] = useState({
        input: ''
    })

    const [pin, setPin] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [res, setRes] = useState('');
    // useEffect(() => {
    //     if (searchValue.input.length === 6) {
    //         getDetails();
    //     }
    // }, [searchValue.input])

    // const getDetails = async () => {
    //     axios.get(`https://api.postalpincode.in/pincode/${searchValue.input}`).then((res) => {
    //         setRes(res.data);
    //         setState(res.data[0].PostOffice[0].State);
    //         setCity(res.data[0].PostOffice[0].Name);
    //         console.log(res.data)
    //     }).catch((e) => {
    //         console.log(e);
    //     })


    // }
    const [loading, setloading] = useState(false);



    const handleLocationFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
        // setLoading(true)
        const searchword = event.target.value.toLowerCase();
        // console.log(searchword)
        // console.log(locations)
        if (searchword.length > 0) {
            const filtered = locations.filter((item) => {
                const pin_code = item.pin_code.toString().toLowerCase();
                const search = searchword.toLowerCase();
                return pin_code.includes(search);
            });
            // if (searchword === "") {
            //     setLoading(false)
            //     setSearchLocation([]);
            //     setloading(false)

            // } else {
                // console.log(filtered)
                // console.log(searchValue.input)
                setloading(true)
                if (filtered.length>0) {

                    axios.get(`https://api.postalpincode.in/pincode/${filtered[0].pin_code}`).then((res) => {
                        setRes(res.data);
                        // setState(res.data[0].PostOffice[0].State);
                        // setCity(res.data[0].PostOffice[0].Name);
                        if(res.data[0].PostOffice !== null){
                            setSearchLocation(res.data[0].PostOffice)
                            setloading(false)
                            // console.log(res.data[0].PostOffice)
                        }else{
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

                    setLoading(true)
                    setloading(false)
                    setSearchLocation([]);

                }
                // console.log(filtered)
                // setSearchLocation(filtered);
            // }
        } else {
            // setLoading(false)
            setLoading(false)
            setSearchLocation([]);
            setloading(false)
        }

    };

    const setLocationValueTOFilter = async (pin_code) => {
        setSearchValue({
            input: pin_code,
        });
        setChooseLocation(pin_code);
        sessionStorage.setItem("current_pin_code", pin_code);
        onHide();
        setSearchLocation([]);
        window.location.reload();
    }


    return (
        <div id='pincode_choose' className="" style={{ width: '90%' }}>
            <input className="form-control" style={{ height: '50px' }} name='input' onChange={handleLocationFilter} placeholder="Pin Code" value={searchValue.input} />

            {searchLocation.length !== 0 ? <>
                <div className="inputResultofmodal" >
                    {searchLocation.map((location, index) => {
                        return <span onClick={() => setLocationValueTOFilter(location.Pincode)} style={{ textDecoration: 'none', color: 'black' }}  >
                            <div style={{ cursor: 'pointer', padding: '15px', margin: '5px', color: 'black', border: '2px solid #fff0d7', display: 'flex', alignItems: 'center' }} key={index}  ><FaLocationDot /> {location.Pincode},{location.Name},{location.State}</div>
                        </span>
                    }
                    )}
                </div>
            </> : <>
                {/* <p style={{ padding: '15px' }}>No data found for this pincode!!</p> */}
            </>}
            {loading && <ClipLoader color="blue" />}
            {Loading ? <>
                <p style={{ padding: '15px' }}>No data found for this pincode!!</p>
            </> : <>
                <p style={{ padding: '15px' }}>Please type your full Pin Code(6 digit) here!!</p>

            </>
            }


            {/* <h1>Find Nearby Services</h1> */}
            {/* <input
   type="text"
   placeholder="Enter Pincode"
   value={pincode}
   onChange={handlePincodeChange}
 />
 <button onClick={fetchLocations}>Search</button>
 {renderLocations()} */}
        </div>
    );
}


