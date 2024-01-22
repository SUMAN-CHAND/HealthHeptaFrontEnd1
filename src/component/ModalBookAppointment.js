import React ,{useState,useEffect}from 'react'
import doctorimg from '../img/doctor4.webp';


import {
  Link, useNavigate
} from "react-router-dom";
import axios from 'axios';

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
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/`)
      .then(res => {

        setSelectLocation(res.data[2])
      })
  });

  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/locations`)
      .then(res => {
        setLocation(res.data);
        // setChooseLocation(res.data)
      })
  })
  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_HOST}:8081/doctorsearch`)
      .then(res => {
        setDoctors(res.data);
        // setChooseLocation(res.data)
      })
  }, [])


  // const handleFilter = (event) => {
  //   const searchword = event.target.value.toLowerCase();
  //   const newFilter = locations.filter((value) => {
  //     return value.name.toLowerCase().includes(searchword);
  //   });
  //   if (searchword === "") {
  //     setChooseLocation([]);
  //   } else {
  //     setChooseLocation(newFilter);
  //   }
  // };
  // var value;
  // if (selectLocation !== undefined) {
  //   value = `/medicines/${selectLocation}`;
  // } else {
  //   value = `/medicines`
  // }
  // useEffect(() => {
  //   axios.get('http://${process.env.REACT_APP_HOST}:8081/search')
  //     .then(res => {
  //       setProducts(res.data);
  //       // setChooseLocation(res.data)
  //     })
  // }, [])
  const navigate = useNavigate();
  const [values, setValues] = useState({
    input: ''
  })
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    // console.log('click'+values)
  }
  // const handleFilter = (event) => {
  //   setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  //   const searchword = event.target.value.toLowerCase();
  //   const newFilter = doctors.filter((value) => {
  //     return value.doc_name.toLowerCase().includes(searchword);
  //   });
  //   if (searchword === "") {
  //     setChooseDoctor([]);
  //   } else {
  //     setChooseDoctor(newFilter);
  //   }
  // };
  const searchMedicne = async () => {
    try {
      closeTheModal();
      console.log(values)
      const response = await axios.post(`http://${process.env.REACT_APP_HOST}:8081/doctorsearch`, values);
      if (response.data !== null) {
        navigate(`/listofdoctor`,
          {
            state: {
              data: response.data,
              location: selectLocation
            }
          })
          //  console.log(response.data)
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
            <div className="search-d" style={{ display: 'flex', marginTop: '15%', justifyContent: 'center' }}>
              <div className="dropdown  me-2 " style={{ marginLeft: '5vw' }}>
              <select value={selectLocation} onChange={e => setSelectLocation(e.target.value)} className="btn btn-secondary" aria-expanded="false" style={{ color: "black", backgroundColor: "white", width: '20vw', fontSize: '1em' }}>
                  {locations.map((location, index) => (
                    <option key={index} value={location.name}>{location.name}</option>
                  )
                  )}
                </select>
              </div>
              {/* <div>
                <div className=" m-2 me-2" style={{ display: 'flex', justifyContent: 'start' }}>
                  <input className="form-control modal-serach" type="search" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" aria-label="Search" style={{ width: "25vw", borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} />
                  <Link to='/listofdoctor'>
                    <button onClick={closeTheModal} type="button" className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div> */}
              <div>
                <div className=" m-2 me-2" style={{ display: 'flex', justifyContent: 'start' }}>
                  {/* <input className="form-control" name='input' onClick={handleInput}  placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" style={{ width: '22vw', fontSize: '0.9em', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} /> */}
                  <input className="form-control" name='input' onChange={handleInput} placeholder="Search Medicine Etc" style={{ width: '22vw', fontSize: '0.9em', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} />
                  {/* <Link to='/listofdoctor'> */}
                  <button onClick={searchMedicne} type="button" className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </button>
                  {/* </Link> */}
                </div>
                {chooseDoctor.length !== 0 && (
                  <div className="inputResult" onClick={handleClick}>
                    {chooseDoctor.map((doctor, index) => {
                      // {`/doctor/${product.id}`}
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
