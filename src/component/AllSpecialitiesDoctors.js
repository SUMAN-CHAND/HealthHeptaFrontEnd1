import React, { useEffect, useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import SpecialitiesDoctorsCard from './SpecialitiesDoctorsCard';
import axios from 'axios';

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
  // console.log(props.location)
  if (props.location === undefined) {
    // specializes-doctors
    useEffect(() => {
      axios.get(`http://${process.env.REACT_APP_HOST}:8081/specializes-doctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setDoctors(res.data[0]);
          // setImages(res.data[1]);
        }
        // console.log(response.data);
      })
        .catch(err => {
          // Handle errors
          console.error(err);
        });

    }, [])

  }



  return (
    <div>
      <div className="container" style={{ marginTop: '5vh' }}>
        <h3 className='py-2'>|| Find doctors in top specialities ||</h3>

        <Carousel responsive={responsive}>
          {doctors.map(doctor => (
            <div key={doctor.id}>

              <SpecialitiesDoctorsCard specializes={doctor.specializes}  />

            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
