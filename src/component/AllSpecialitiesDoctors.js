import React, { useEffect, useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import SpecialitiesDoctorsCard from './SpecialitiesDoctorsCard';
import axiosClient from './axiosClient';
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from 'react-helmet';
export default function AllSpecialitiesDoctors(props) {
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
  if (props.location === undefined) {
    useEffect(() => {
      axiosClient.get(`/specializes-doctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setDoctors(res.data[0]);
          setLoading(true);
        }
      })
        .catch(err => {
          // Handle errors
          console.error(err);
        });

    }, [])

  }
  return (
    <>
      <Helmet>
        <title>healthhepta.com</title>
        <meta name="description" content="Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
      <div>
        <div className="container" style={{ marginTop: '1vh' }}>
          <h3 className='py-1'>|| Find doctors in top specialities ||</h3>
          {loading ?
            <Carousel responsive={responsive} className='allSpecialitiesDoctorsCarousel'>
              {doctors.map((doctor, index) => (
                <div key={index}>

                  <SpecialitiesDoctorsCard specializes={doctor.specializes} />

                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
        </div>
      </div>
    </>
  )
}
