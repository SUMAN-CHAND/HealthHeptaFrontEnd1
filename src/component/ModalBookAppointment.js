import React, { useState, useEffect } from 'react'
import doctorimg from '../img/doctor4.webp';
import {
  Link, useNavigate
} from "react-router-dom";
import axiosClient from './axiosClient';
const customStyle = {
  maxHeight: '60vh',
  maxWidth: '85vw',
  borderRadius: '5px',
  overflow: 'hidden',
  background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
  backgroundColor: 'rgb(41 116 132)'
};
export default function BookAppointment({ closeTheModal }) {
  const [locations, setLocation] = useState([])
  const [chooseLocation, setChooseLocation] = useState([])
  const [selectLocation, setSelectLocation] = useState()
  const [doctors, setDoctors] = useState([])
  const [chooseDoctor, setChooseDoctor] = useState([])
  useEffect(() => {
    axiosClient.get(`/locations`)
      .then(res => {
        setLocation(res.data);
        // setChooseLocation(res.data)
      })
  })
  const navigate = useNavigate();
  const [values, setValues] = useState({
    input: ''
  })
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }
  const searchMedicne = async () => {
    try {
      closeTheModal();
      console.log(values)
      const response = await axiosClient.post(`/doctorsearch`, values);
      if (response.data !== null) {
        navigate(`/listofdoctor`,
          {
            state: {
              data: response.data,
              location: selectLocation
            }
          })
      } else {
        // Handle logout failure
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  const handleClick = event => {
    setChooseDoctor([]);
  };
  return (
    <>
      <div className="searchDoctor " style={customStyle}>
        <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
        <div className="searchDoctor1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="search-d">
            <h2 className=' text-light' style={{ textAlign: 'center' }}>Search Doctor, Book an Appointment</h2>
            <p className=' text-light' style={{ textAlign: 'center', marginRight: '1rem' }}>Search the best doctors, clinic & hospital the city nearest to you.</p>
            <div className="search-d" style={{ display: 'flex', marginTop: '15%', justifyContent: 'center', alignItems: 'center' }}>
              <div className="dropdown  me-2 " style={{ marginLeft: '5vw' }}>
                <select value={selectLocation} onChange={e => setSelectLocation(e.target.value)} className="btn btn-secondary dropdown-location-modal-m" aria-expanded="false" style={{ color: "black", backgroundColor: "white", width: '20vw', fontSize: '1em' }}>
                  <option defaultValue={'choose your location..'} >choose your Pin Code..</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location.pin_code}>{location.pin_code}</option>
                  )
                  )}
                </select>
              </div>
              <div>
                <div className=" m-2 me-2" style={{ display: 'flex', justifyContent: 'start' }}>
                  <input className="form-control search-location-modal-m" name='input' onChange={handleInput} placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" style={{ width: '22vw', fontSize: '0.9em', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} />
                  <button onClick={searchMedicne} type="button" className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </button>
                </div>
                {chooseDoctor.length !== 0 && (
                  <div className="inputResult" onClick={handleClick}>
                    {chooseDoctor.map((doctor, index) => {
                      return <Link to={`/doctor/${doctor.id}`} onClick={closeTheModal} style={{ textDecoration: 'none', color: 'black' }}><p style={{ cursor: 'pointer', padding: '0px' }} key={index}>{doctor.doc_name}</p></Link>
                    }
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <img className='modal-img' style={{ maxHeight: '49vh', maxWidth: '33vw' }} src={doctorimg} alt="" />
        </div>
      </div>
    </>
  )
}
