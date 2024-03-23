import React, { useEffect, useState } from 'react'
import Doctors from './DoctorCard'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import axiosClient from './axiosClient';
import ClipLoader from 'react-spinners/ClipLoader';
import { Helmet } from 'react-helmet';
export default function AllDoctors(props) {
  //main for connecting backend with Session
  axiosClient.defaults.withCredentials = true;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1150 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1150, min: 700 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 700, min: 450 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2
    }
  };
  const [doctors, setDoctors] = useState([])
  const [image, setImages] = useState([])
  let [loading, setLoading] = useState(false);
  let [noTestPresent, setNoTestPresent] = useState(false);

  // if (props.location === undefined) {
  //   useEffect(() => {
  //     axiosClient.get(`/doctors`).then((res) => {
  //       // Handle response
  //       if (res.data !== null) {
  //         setDoctors(res.data[0]);
  //         setImages(res.data[1]);
  //         setLoading(true);
  //       }
  //     })
  //       .catch(err => {
  //         // Handle errors
  //         console.error(err);
  //       });

  //   }, [])
  // }

  let current_pin_code;
  current_pin_code = sessionStorage.getItem('current_pin_code');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        if (current_pin_code === null) {
          axiosClient.get(`/doctors`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setDoctors(res.data[0]);
              setImages(res.data[1]);
              setLoading(true);
            }
          })
            .catch(err => {
              // Handle errors
              console.error(err);
            });
        } else {
          axiosClient.get(`/doctors/${current_pin_code}`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setDoctors(res.data[0]);
              setImages(res.data[1]);
              setLoading(true);
              setNoTestPresent(false);
            } else {
              setNoTestPresent(true);
            }
          })
            .catch(err => {
              // Handle errors
              console.error(err);
            });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, [current_pin_code]);




  return (
    <>
      <Helmet>
        <title>healthhepta.com</title>
        <meta name="description" content="Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
      <div>
        <div className="container" style={{ marginTop: '1vh' }}>
          <h3 className='py-1'>|| Meet our Doctors ||</h3>
          {/* {doctors!== undefined ? <> */}
          {loading ?
            <Carousel responsive={responsive} className='allDoctorsCarousel'>
              {doctors && doctors.map(doctor => (
                <div key={doctor.id}>
                  {image.map((img) => (
                    <div key={img.id}>
                      {parseInt(doctor.doctor_imageId) === img.id ?
                        <>
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} fees={doctor.fees} />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          {noTestPresent ? <>
            <p>No  Doctor present  in this location</p>
          </> : <></>}
          {/* </> : <>

        </>} */}


        </div>
        <div className="container" style={{ marginTop: '1vh' }}>
          <h3 className='py-1'>||Online Doctor Counselling ||</h3>
          {/* {doctors!== undefined ? <> */}
          {loading ?
            <Carousel responsive={responsive} className='allDoctorsCarousel'>
              {doctors && doctors.filter(doctor => doctor.type_of_visite.toLowerCase() === 'online').map(doctor => (
                <div key={doctor.id}>
                  {image.map((img) => (
                    <div key={img.id}>
                      {parseInt(doctor.doctor_imageId) === img.id ?
                        <>
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} fees={doctor.fees} />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          {noTestPresent ? <>
            <p>No  Doctor present  in this location</p>
          </> : <></>}
          {/* </> : <>

        </>} */}


        </div>
      </div>
    </>
  )
}
