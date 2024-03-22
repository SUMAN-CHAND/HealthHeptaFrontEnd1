import React, { useState, useEffect } from 'react';
import axiosClient from './axiosClient';
import { FaLocationDot } from "react-icons/fa6";


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

    const [searchValue, setSearchValue] = useState({
        input: ''
    })
    const handleLocationFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();
        // console.log(searchword)
        // console.log(locations)
        const filtered = locations.filter((item) => {
            const pin_code = item.pin_code.toString().toLowerCase();
            const search = searchword.toLowerCase();
            return pin_code.includes(search);
        });
        if (searchword === "") {
            setSearchLocation([]);
        } else {
            // console.log(filtered)
            setSearchLocation(filtered);
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
    }


    return (
        <div className="" style={{ width: '90%' }}>
            <input className="form-control" style={{height:'50px'}} name='input' onChange={handleLocationFilter} placeholder="Pin Code" value={searchValue.input} />

            {searchLocation.length !== 0 ? <>
                <div className="inputResult" >
                    {searchLocation.map((location, index) => {
                        return <span onClick={() => setLocationValueTOFilter(location.pin_code)} style={{ textDecoration: 'none', color: 'black' }}  >
                            <div style={{ cursor: 'pointer', padding: '15px', margin: '5px', color: 'black', border: '2px solid #fff0d7', display: 'flex', alignItems: 'center' }} key={index}  ><FaLocationDot /> {location.pin_code},{location.City},{location.state}</div>
                        </span>
                    }
                    )}
                </div>
            </> : <><p style={{ padding: '15px'}}>No data found for this pincode!!</p></>}


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


