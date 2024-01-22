import React, { useEffect, useState } from 'react'
import Doctors from './DoctorCard'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function AllDoctors(props) {
  //main for connecting backend with Session
  axios.defaults.withCredentials = true;
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
    useEffect(() => {
      axios.get(`http://${process.env.REACT_APP_HOST}:8081/doctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setDoctors(res.data[0]);
          setImages(res.data[1]);
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
  //     axios.get(`http://${process.env.REACT_APP_HOST}:8081/product/${props.location}`).then((res) => {

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
    <div>
      <div className="container" style={{ marginTop: '5vh' }}>
        <h3 className='py-2'>|| Meet our Doctors ||</h3>
        {/* {doctors!== undefined ? <> */}
          <Carousel responsive={responsive}>
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
        {/* </> : <>

        </>} */}


      </div>
      <div className="container" style={{ marginTop: '5vh' }}>
        <h3 className='py-2'>||Online Doctor Counselling ||</h3>
        {/* {doctors!== undefined ? <> */}
          <Carousel responsive={responsive}>
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
        {/* </> : <>

        </>} */}


      </div>
    </div>
  )
}
