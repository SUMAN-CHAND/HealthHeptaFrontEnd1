import React, { useState, useEffect } from 'react'
import {
    useParams, useNavigate
} from "react-router-dom";
import axiosClient from '../axiosClient';
const customStyle = {
    maxWidth: '85vw',
    minWidth: '50vw',
    borderRadius: '5px',
    overflow: 'hidden',
    background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
};
export default function AssignPinCodeToPartner() {
    const params = useParams();
    const b2c_partner_id = params.id;
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     axiosClient.get(`/image/${image_id}`)
    //         .then(res => {
    //             setImages(res.data);
    //         })
    // }, []);
    // console.log(b2c_partner_id)
    const [partners, setPartner] = useState([]);

    useEffect(() => {
        axiosClient.get(`/superadmin/partner/details/${b2c_partner_id}`)
            .then(response => {
                // Handle response
                console.log(response.data)
                setPartner(response.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    },[]);

    const navigate = useNavigate();
    
    const [locations, setLocation] = useState([])


    useEffect(() => {
        axiosClient.get(`/locations`)
            .then(res => {
                setLocation(res.data);
            })
    }, [])

    const [searchLocation, setSearchLocation] = useState([]);
    const [chooseLocation, setChooseLocation] = useState([])

    const [searchValue, setSearchValue] = useState({
        input: ''
    })
    const handleLocationFilter = (event) => {
        setSearchValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        const searchword = event.target.value.toLowerCase();

        const filtered = locations.filter((item) => {
            const pin_code = item.pin_code.toString().toLowerCase();
            const search = searchword.toLowerCase();
            return pin_code.includes(search);
        });
        if (searchword === "") {
            setSearchLocation([]);
        } else {
            setSearchLocation(filtered);
        }
    };

    const setLocationValueTOFilter = async (pin_code) => {
        setSearchValue({
            input: pin_code,
        });
        setChooseLocation(pin_code);
        console.log(pin_code)
        setSearchLocation([]);
    }

    const ClosePage = () => {
        console.log(chooseLocation)
        navigate('/superadmin', { state: { loggedIn: true } });
    }

    return (
        <>
            <div className="commission container " style={customStyle}>
                <button style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn' onClick={() => ClosePage()}>X</button>
                <h5>Healthhepta</h5>

                <div id='partner'>
                    <table className="table table-striped">
                        <thead className='thead-dark'>
                            <tr>
                                <th scope="col"> Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Aadhaar Card</th>
                                <th scope="col">Pan Card</th>
                                <th scope="col">Permission</th>
                                {/* <th scope="col">Action</th> */}
                            </tr>
                        </thead>
                        {/* {partners.length > 0 && */}
                            <tbody>
                                {partners.filter(partnerf => partnerf.permission === 'Approved').map((partner, index) => (
                                    <tr key={index}>
                                        <th scope="row">{partner.id}</th>
                                        <td>{partner.name}</td>
                                        <td>{partner.ph_num}</td>
                                        <td>{partner.aadhaar}</td>
                                        <td>{partner.pan}</td>
                                        <td style={{ cursor: 'pointer', color: 'blue' }} >{partner.permission}</td>
                                        <td>
                                            {/* <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(partner.AadhaarCardImageID)}>View Aadhaar Card</button>
                                            <button className="btn btn-info m-1 " onClick={() => ViewAadhaar(partner.PanCardImageID)}>View Pan Card</button> */}

                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        {/* } */}
                       
                    </table>
                </div>

                <div className="dropdown me-2 dropdown-location "  >
                    {/* <select value={selectLocation} onChange={e => setSelectLocation(e.target.value)} className="btn btn-secondary header-location-1 header-location-mobile" aria-expanded="false" >
                                <option defaultValue={'choose your location..'} >choose your Pin Code..</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location.pin_code}>{location.pin_code}</option>
                                )
                                )}
                            </select> */}
                    {/* onClick={() => setLocationValueTOFilter(location.pin_code)} */}
                    {/* <input className="form-control header-location-1 header-location-mobile" name='input' onChange={handleLocationFilter} placeholder="Search your pin code here" value={locationvalue.input}  /> */}
                   <h5>Assign Partner To Any Pin Code Here :- </h5>
                    <input className="form-control" name='input' onChange={handleLocationFilter} placeholder="Search Your Pin Code Here" value={searchValue.input} />

                    {searchLocation.length !== 0 && (
                        <div className="inputResult" >
                            {searchLocation.map((location, index) => {
                                return <span onClick={() => setLocationValueTOFilter(location.pin_code)} style={{ textDecoration: 'none', color: 'black' }}  ><div style={{ cursor: 'pointer', padding: '0px' }} key={index}  >{location.pin_code}</div></span>
                            }
                            )}
                        </div>
                    )}

                </div>

                <div>
                    <button onClick={() => ClosePage()} className="btn btn-danger m-3">Close</button>
                </div>
            </div>
        </>
    )
}
