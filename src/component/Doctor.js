import React, { useEffect, useState } from 'react'
import doctor3 from '../img/doctor3.webp';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import AllDoctorCardForAD from './AllDoctorCardForAD';



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
        axios.get('http://localhost:8081/profile').then((response) => {
            setUser(response.data[0]);
        });
    }, []);
    console.log(user.id)
    var user_id =  user.id;
  const [doctors, setDoctor] = useState([]);
  const [doctorsTimes, setDoctorTime] = useState([]);
  const [image, setImages] = useState([]);

  const param = useParams();
  console.log(param.id)
  let doctor_id = param.id;

  useEffect(() => {
    axios.get(`http://localhost:8081/doctorsearch/${param.id}`).then((res) => {

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
    axios.get(`http://localhost:8081/doctor/${param.id}`).then((res) => {

      // Handle response
      if (res.data !== null) {
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
  console.log(doctors)
  // console.log(image[0].path)

  const BookDoctor = (appoint_date,appoint_time) => {
    navigate('/appoitment-from',
    {
        state: {
          doctor_id: doctor_id,
          appoint_date: appoint_date,
          appoint_time: appoint_time,
          clinic_id : doctors[0].clinic_id,
          user_id:user_id
        }
    })

  }
  


  return (
    <>
      <div className="header" style={{ height: '7vh', backgroundColor: 'rgb(42 165 181)' }}>
        {/* <h5 className='text-light ' style={{ display: 'flex', paddingTop: '1rem', marginLeft: '3rem' }}>DR. ABHIRUP BANDOPADHYAY</h5> */}
      </div>
      <div className="row particular-doctor-page" style={{ margin: '0px', backgroundColor: 'rgb(193 193 206 / 36%)' }}>
        <div className="col-8 particular-doctor" >
          <div className="doctor container  shadow" style={{ margin: '3rem 2rem', backgroundColor: 'white', width: '90%', padding: '5px' }}>
            {doctors.map(doctor => (
              <div className="doctor-profile" style={{ display: 'flex', alignItems: 'center' }}>
                {/* <img src={doctor3} alt="....img" style={{ height: '20vh', width: '10vw' }} /> */}
                <img src={`http://localhost:8081/${image[0].path}`} className="card-img-top" alt="..." style={{  width: '25%' }}  />

                <div className="deccription" style={{ paddingTop: '7vh',width:'100%' ,display:'flex',flexDirection:"column" }}>
                  <h5>{doctor.doc_name}</h5>
                  <p>{doctor.doc_desc} </p>
                  {/* <p>13 YEARS OF EXPERIENCE</p> */}
                  <div className='location px-2 mx-2' style={{ display: 'flex',justifyContent:'center',alignItems:'center' }}>
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
              <div className="day" style={{ marginRight: '10vw',marginTop:'20px' }}>
                {/* <Carousel responsive={responsive}> */}
                {doctorsTimes.map(doctorsTime => (
                  <div className='m-1 text-primary fs-5' onClick={() => BookDoctor(doctorsTime.weekly_day,doctorsTime.starting_time)}><p className='btn btn-outline-primary '>{doctorsTime.weekly_day}</p></div>
                ))}
                {/* </Carousel> */}
              </div>
              <div className='doctor-time'>
                <div style={{ display: 'flex' }}>
                  <p className='mx-3 m-1'>Opening Time</p>
                  <p className='mx-3 m-1'>Ending Time</p>
                </div>
                {doctorsTimes.map(doctorsTime => (
                  <div className="after-noon" style={{ margin: '0rem 0' }}>
                    <Link ><button type="button" class="btn btn-outline-primary mx-3 m-1"><p> {doctorsTime.starting_time}</p></button></Link>
                    <Link ><button type="button" class="btn btn-outline-primary mx-3 m-1"><p>{doctorsTime.ending_time} </p></button></Link>
                  </div>
                ))}
              </div>
              {/* <div className="after-noon" style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
                <p className=' fs-5 text-primary after-noon-time'> <p>After noon:</p>  </p>
                <Link to='/appoitment-from'><button type="button" class="btn btn-outline-primary mx-1"><p> 12:00pm</p></button></Link>
                <Link to='/appoitment-from'><button type="button" class="btn btn-outline-primary mx-1"><p>12:30pm </p></button></Link>
                <Link to='/appoitment-from'><button type="button" class="btn btn-outline-primary mx-1"><p>01:00pm </p></button></Link>
              </div> */}
            </div>
          </div>
          <div className='docter-ad' >
            <AllDoctorCardForAD/>
          </div>
        </div>
        <div className="col-4 my-4 shadow list-of-doctor" style={{ backgroundColor: 'white', width: '30vw' }}>
          <h2>Suggested Doctors For You</h2>
          <div>
            <AllDoctorCardForAD/>
          </div>
        </div>
      </div>
    </>
  )
}
