import React, { useEffect, useState } from 'react'
import doctor3 from '../img/doctor3.webp';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import AllDoctorCardForAD from './AllDoctorCardForAD';
import axiosClient from './axiosClient';
import ViewDoctorDetailsModal from './ViewDoctorDetailsModal';

const customStyle = {
  maxWidth: '85vw',
  borderRadius: '5px',
  overflow: 'hidden',
  background: 'white',
  backgroundColor: 'white',
  padding: '2vw'

};


export default function Doctor() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    axiosClient.get(`/profile`).then((response) => {
      setUser(response.data[0]);
    });
  }, []);
  console.log(user.id)
  var user_id = user.id;
  const [doctors, setDoctor] = useState([]);
  const [doctorsTimes, setDoctorTime] = useState([]);
  const [image, setImages] = useState([]);

  const param = useParams();
  // console.log(param.id)
  let doctor_id = param.id;

  useEffect(() => {
    axiosClient.get(`/doctorsearch/${param.id}`).then((res) => {

      // Handle response
      if (res.data !== null) {
        setDoctor(res.data[0]);
        setImages(res.data[1]);
      }
      // console.log(response.data);
    })
      .catch(err => {
        // Handle errors
        console.error(err);
      });

  }, [])
  useEffect(() => {
    axiosClient.get(`/doctor/${param.id}`).then((res) => {

      // Handle response
      if (res.data !== null) {
        const date = Date();
        // console.log(date.slice(0,3) )
        // console.log(res.data)
        setDoctorTime(res.data)
      }
      // console.log(response.data);
    })
      .catch(err => {
        // Handle errors
        console.error(err);
      });

  }, [])
  const navigate = useNavigate();
  // console.log(doctors)
  // console.log(image[0].path)

  function calculateDatesForWeek(selectedWeek) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    // Adjust date to the first day of the selected week
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(1);
    firstDayOfWeek.setMonth(currentMonth);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() + (selectedWeek - 1) * 7);

    // Calculate the last day of the selected week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return {
      startDate: firstDayOfWeek,
      endDate: lastDayOfWeek
    };
  }

  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDates, setSelectedDates] = useState(null);

  useEffect(() => {
    const calculateAndSetDates = () => {
      const calculatedDates = calculateDatesForWeek(selectedWeek);
      setSelectedDates(calculatedDates);
    };

    calculateAndSetDates(); // Initial calculation
  }, [selectedWeek]);


  const BookDoctor = (appoint_date, appoint_time) => {
    
    navigate('/appoitment-from',
      {
        state: {
          doctor_id: doctor_id,
          appoint_date: appoint_date,
          appoint_time: appoint_time,
          clinic_id: doctors[0].clinic_id,
          user_id: user_id
        }
      })

  }

  const [doctorDetails, setDoctorDetails] = useState([]);
  const [doctorTimeTable, setDoctorTimeTable] = useState([]);
  // const [image, setImage] = useState([]);

  useEffect(() => {
    axiosClient.get(`/viewdetails/doctor/${doctor_id}`)
      .then(res => {
        if (res.data) {
          setDoctorDetails(res.data[0]);
          setDoctorTimeTable(res.data[2]);
          // setSelectedWeek(res.data[2].weekly_day);
          // setImage(res.data[1]);
          // console.log(res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })

  }, [])


  return (
    <>
      {/* <div className="header" style={{ height: '7vh', backgroundColor: 'rgb(42 165 181)' }}>
        <h5 className='text-light ' style={{ display: 'flex', paddingTop: '1rem', marginLeft: '3rem' }}>{doctors[0].doc_name}</h5>
      </div> */}
      <div className="row particular-doctor-page" style={{ margin: '0px', backgroundColor: 'rgb(193 193 206 / 36%)', overflow: 'scroll', height: '100vh' }}>
        <div className="col-8 particular-doctor" style={{ position: 'sticky', top: '0' }} >
          <div className="doctor container  shadow" style={{ margin: '3rem 2rem', backgroundColor: 'white', width: '90%', padding: '5px', borderRadius: '5px' }}>
            {doctors.map(doctor => (
              <div className="doctor-profile" style={{ display: 'flex', alignItems: 'center' }}>
                {/* <img src={doctor3} alt="....img" style={{ height: '20vh', width: '10vw' }} /> */}
                <img src={`http://${process.env.REACT_APP_HOST}:8081/${image[0].path}`} className="card-img-top" alt="..." style={{ width: '25%' }} />

                <div className="deccription" style={{ paddingTop: '7vh', width: '100%', display: 'flex', flexDirection: "column" }}>
                  <h5>{doctor.doc_name}</h5>
                  <p>{doctor.doc_desc} </p>
                  {/* <p>13 YEARS OF EXPERIENCE</p> */}
                  <div className='location px-2 mx-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-3" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <p className=''>{doctor.location}</p>
                  </div>
                </div>
                <div className="container ">
                  <h5>{doctor.clinic}</h5>
                  <p>{doctor.clinic_desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="time-for-appoitment" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="day" style={{ marginRight: '10vw', marginTop: '20px' }}>
                {/* <Carousel responsive={responsive}> */}
                {doctorsTimes.map(doctorsTime => (
                  <div className='m-1 text-primary fs-5' onClick={() => BookDoctor(doctorsTime.weekly_day, doctorsTime.starting_time)}><p className='btn btn-outline-primary '>{doctorsTime.weekly_day}</p></div>
                ))}
                {/* {selectedDates && (
                  <div>
                    <p>Selected Week: {selectedWeek}</p>
                    <p>Start Date: {selectedDates.startDate.toLocaleDateString()}</p>
                    <p>End Date: {selectedDates.endDate.toLocaleDateString()}</p>
                  </div> */}
                {/* )} */}
                {/* </Carousel> */}
              </div>
              <div className='doctor-time'>
                <div style={{ display: 'flex' }}>
                  <p className='mx-3 m-1'>Opening Time</p>
                  <p className='mx-3 m-1'>Ending Time</p>
                </div>
                {doctorsTimes.map(doctorsTime => (
                  <div className="after-noon" style={{ margin: '0rem 0' }}>
                    <Link ><button type="button" className="btn btn-outline-primary mx-3 m-1"><p> {doctorsTime.starting_time}</p></button></Link>
                    <Link ><button type="button" className="btn btn-outline-primary mx-3 m-1"><p>{doctorsTime.ending_time} </p></button></Link>
                  </div>
                ))}
              </div>
              {/* <div className="after-noon" style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                <p className=' fs-5 text-primary after-noon-time'> <p>After noon:</p>  </p>
                <Link to='/appoitment-from'><button type="button" className="btn btn-outline-primary mx-1"><p> 12:00pm</p></button></Link>
                <Link to='/appoitment-from'><button type="button" className="btn btn-outline-primary mx-1"><p>12:30pm </p></button></Link>
                <Link to='/appoitment-from'><button type="button" className="btn btn-outline-primary mx-1"><p>01:00pm </p></button></Link>
              </div> */}
            </div>
          </div>
          <div className='docter-ad shadow' style={{ margin: '3rem 2rem', backgroundColor: 'white', width: '90%', padding: '5px', borderRadius: '5px' }} >
            {/* <AllDoctorCardForAD/> */}
            <>
              <div className="container " style={customStyle}>
                {/* <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button> */}
                <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                  <div>
                    {doctorDetails.map((doctor, index) => (
                      <div className="doctor-profile" style={{ display: 'flex' }}>
                        {/* <div style={{ width: '45%' }}>
                                    <img src={`http://${process.env.REACT_APP_HOST}:8081/${image[0].path}`} className="card-img-top" alt="..." style={{ width: '75%' }} />
                                </div> */}
                        {/* <div className='' style={{ width: "1px", backgroundColor: 'grey' }}>
                                </div> */}
                        <div className="deccription" style={{ margin: '0 1vw', padding: '0 1vw', display: 'flex', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'self-start', flexDirection: 'column', marginRight: '2vw' }}>
                            <h5>Doctor Name :- {doctor.doc_name}</h5>
                            <p>Doctor Description :- {doctor.doc_desc} </p>
                            <p className=''>Location :- {doctor.location}</p>
                            <p>Doctor Clinic :- {doctor.clinic}</p>
                            <p>Clinic Description :- {doctor.clinic_desc}</p>
                            <p>Doctor Specializes :- {doctor.specializes}</p>
                            <p>Doctor Phone Number :- {doctor.Phone_number}</p>
                            <p>Doctor Visit Type :- {doctor.type_of_visite}</p>
                          </div>
                          <div className='timeTable' style={{ marginRight: '2vw' }}>
                            <table className='table table-striped'>
                              <thead className='thead-dark'>
                                <tr>
                                  <th scope='col'>Id</th>
                                  <th scope='col'>Day</th>
                                  <th scope='col'>Start Time</th>
                                  <th scope='col'>End Time</th>
                                </tr>
                              </thead>
                              {doctorTimeTable.map((doctort, index) => (
                                <tbody style={{ verticalAlign: 'middle' }}>
                                  <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{doctort.weekly_day}</td>
                                    <td>{doctort.starting_time}</td>
                                    <td>{doctort.ending_time}</td>
                                  </tr>

                                </tbody>
                              ))}
                            </table>
                          </div>

                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div >
            </>

          </div>
        </div>
        <div className="col-4 my-4 shadow list-of-doctor" style={{ backgroundColor: 'white', width: '32vw' }}>
          {/* <h2>Suggested Doctors For You</h2> */}
          <div>
            <AllDoctorCardForAD />
          </div>
        </div>
      </div>
    </>
  )
}
