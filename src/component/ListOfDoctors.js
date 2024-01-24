import React, { useEffect, useState } from 'react'
import DoctorCardOfList from './DoctorCardOfList'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AllDoctors from './AllDoctors';
import Doctors from './DoctorCard';
import axiosClient from './axiosClient';

export default function ListOfDoctors() {

  let data = [];
  const location = useLocation();
  data = location.state;
  console.log(data.data[0])
  const [doctors, setDoctors] = useState(data.data[0]);
  const [image, setImages] = useState(data.data[1]);

  const [doctorsss, setDoctorsss] = useState([])
  const [imagess, setImagesss] = useState([])

  useEffect(() => {
    axiosClient.get(`/doctors`).then((res) => {
      // Handle response
      if (res.data !== null) {
        setDoctorsss(res.data[0]);
        setImagesss(res.data[1]);
      }
      // console.log(response.data);
    })
      .catch(err => {
        // Handle errors
        console.error(err);
      });

  }, [])

  // console.log(doctors)
  return (
    <div style={{ display: 'flex', width: '100vw' }}>
      {doctors !== undefined ? <>
        <div className='listof-doctors' style={{ margin: '3rem', width: '60vw' }}>

          {doctors.map(doctor => (
            <div key={doctor.id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(doctor.doctor_imageId) === img.id ?
                    <>
                      <DoctorCardOfList imgpath={img.path} name={doctor.doc_name} desc={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic={doctor.clinic} clinic_descs={doctor.clinic_desc} />
                    </>
                    : <>
                    </>}

                </div>
              ))}
            </div>
          ))}
        </div>
      </> : <>
        <div>


          <p className='py-2 text-warning'> No Doctor found of your search result </p>
          <p className='py-2'> Here is some suggested Doctors </p>

          <div className='listof-doctors' style={{ margin: '3rem', width: '60vw' }}>

            {doctorsss.map(doctor => (
              <div key={doctor.id}>
                {imagess.map((img) => (
                  <div key={img.id}>
                    {parseInt(doctor.doctor_imageId) === img.id ?
                      <>
                        <DoctorCardOfList imgpath={img.path} name={doctor.doc_name} desc={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic={doctor.clinic} clinic_descs={doctor.clinic_desc} />
                      </>
                      : <>
                      </>}

                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </>
      }

      <div style={{ width: '40vw' }}>
        <h3 className='py-2'>|| Suggested Doctors ||</h3>
        <div className="container" style={{ marginTop: '5vh', width: '14vw' }}>
          {/* <Carousel responsive={responsive}> */}
          {doctorsss.map(doctor => (
            <div key={doctor.id}>
              {imagess.map((img) => (
                <div key={img.id}>
                  {parseInt(doctor.doctor_imageId) === img.id ?
                    <>
                      <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
                      <p style={{ margin: '2vh' }}></p>
                    </>
                    : <>
                    </>}

                </div>
              ))}
            </div>
          ))}
          {/* </Carousel> */}

        </div>
      </div>

    </div>
  )
}


{/* {doctors.map(doctor => (
          <div key={doctor.id}>
            <DoctorCardOfList id={doctor.id} name={doctor.doc_name} desc={doctor.doc_desc} location={doctor.location} clinic={doctor.clinic} clinic_desc={doctor.clinic_desc} />
          </div>
        ))} */}