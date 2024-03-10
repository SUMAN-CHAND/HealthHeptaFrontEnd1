import React, { useEffect, useState } from 'react'
import Doctors from './DoctorCard'
import "react-multi-carousel/lib/styles.css";
import DoctorCardForAD from './DoctorCardForAD';
import axiosClient from './axiosClient';
export default function AllDoctorCardForAD(props) {
  //main for connecting backend with Session
  axiosClient.defaults.withCredentials = true;
  const responsive = {
    superLargeDesktop: {
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
  const [suggestedDoctors, setSuggestedDoctors] = useState([]);
  const [suggestedDoctorsImage, setSuggestedDoctorsImage] = useState([]);
  try {
    useEffect(() => {
      axiosClient.get(`/doctors/suggestedDoctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setSuggestedDoctors(res.data[0])
          setSuggestedDoctorsImage(res.data[1])
        }
      })
        .catch(err => {
          console.error(err);
        });

    }, [])
    useEffect(() => {
      axiosClient.get(`/doctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setDoctors(res.data[0]);
          setImages(res.data[1]);
          console.log(doctors)
        }
      })
        .catch(err => {
          // Handle errors
          console.error(err);
        });

    }, [])
    // }
  } catch (error) {
    console.log(error)
  }
  return (
    <div>
      <div className="container" style={{ marginTop: '5vh' }}>
        <h5 className='py-2'>|| Suggested Best Doctor For You ||</h5>
        {suggestedDoctors ? <>
          {/* <Carousel responsive={responsive}> */}
          {suggestedDoctors.map(doctor => (
            <div key={doctor.product_id}>
              {suggestedDoctorsImage.map((img) => (
                <div key={img.id}>
                  {parseInt(doctor.doctor_imageId) === img.id ?
                    <>
                      <DoctorCardForAD imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clinics={doctor.clinic} id={doctor.id} clinic_descs={doctor.clinic_desc} specializes={doctor.specializes} />
                    </>
                    : <></>}
                </div>
              ))}
            </div>
          ))}

        </> : <>
          {doctors.map(doctor => (
            <div key={doctor.id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(doctor.doctor_imageId) === img.id ?
                    <>
                      <DoctorCardForAD imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clinics={doctor.clinic} id={doctor.id} clinic_descs={doctor.clinic_desc} specializes={doctor.specializes} />
                    </>
                    : <>
                    </>}

                </div>
              ))}
            </div>
          ))}
        </>}
      </div>
    </div>
  )
}
