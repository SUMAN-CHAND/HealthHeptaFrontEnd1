import React, { useEffect, useState } from 'react'
import Doctors from './DoctorCard'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import ProductCard from './ProductCard';
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

  // console.log(props.location)
  if (props.location === undefined) {
    useEffect(() => {
      axiosClient.get(`/doctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setDoctors(res.data[0]);
          setImages(res.data[1]);
          setLoading(true);

        }
        // console.log(response.data);
      })
        .catch(err => {
          // Handle errors
          console.error(err);
        });

    }, [])

  }

  //  else {
  //   useEffect(() => {
  //     axiosClient.get(`/product/${props.location}`).then((res) => {

  //       // Handle response
  //       if (res.data !== null) {
  //         setDoctors(res.data)
  //       }
  //       // console.log(response.data);
  //     })
  //       .catch(err => {
  //         // Handle errors
  //         console.error(err);
  //       });

  //   }, [])
  // }



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
              {doctors.map(doctor => (
                <div key={doctor.id}>
                  {image.map((img) => (
                    <div key={img.id}>
                      {parseInt(doctor.doctor_imageId) === img.id ?
                        <>
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          {/* </> : <>

        </>} */}


        </div>
        <div className="container" style={{ marginTop: '1vh' }}>
          <h3 className='py-1'>||Online Doctor Counselling ||</h3>
          {/* {doctors!== undefined ? <> */}
          {loading ?
            <Carousel responsive={responsive} className='allDoctorsCarousel'>
              {doctors.filter(doctor => doctor.type_of_visite.toLowerCase() === 'online').map(doctor => (
                <div key={doctor.id}>
                  {image.map((img) => (
                    <div key={img.id}>
                      {parseInt(doctor.doctor_imageId) === img.id ?
                        <>
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          {/* </> : <>

        </>} */}


        </div>
      </div>
    </>
  )
}
