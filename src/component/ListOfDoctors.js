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
  // useEffect(() => {
  //   axiosClient.get(`/doctors`).then((res) => {
  //     // Handle response
  //     if (res.data !== null) {
  //       setDoctorsss(res.data[0]);
  //       setImagesss(res.data[1]);
  //     }
  //   })
  //     .catch(err => {
  //       // Handle errors
  //       console.error(err);
  //     });

  // }, [])

  let [loading, setLoading] = useState(false);
  let [noTestPresent, setNoTestPresent] = useState(false);
  
  let current_pin_code;
  current_pin_code = sessionStorage.getItem('current_pin_code');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        if (current_pin_code === null) {
          axiosClient.get(`/doctors`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setDoctorsss(res.data[0]);
              setImagesss(res.data[1]);
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
              setDoctorsss(res.data[0]);
              setImagesss(res.data[1]);
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
    <div className='list-doc-container' style={{ display: 'flex', width: '100vw' }}>
      {doctors !== undefined ? <>
        <div className='listof-doctors' style={{ margin: '3rem' }}>
          {doctors.map(doctor => (
            <div key={doctor.id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(doctor.doctor_imageId) === img.id ?
                    <>
                      <DoctorCardOfList imgpath={img.path} pin_code={doctor.pin_code} name={doctor.doc_name} desc={doctor.doc_desc} specializes={doctor.specializes} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic={doctor.clinic} clinic_descs={doctor.clinic_desc} />
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
                        <DoctorCardOfList imgpath={img.path} name={doctor.doc_name} desc={doctor.doc_desc} specializes={doctor.specializes} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic={doctor.clinic} clinic_descs={doctor.clinic_desc} />
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
      {noTestPresent ? <>
            <p>No  Doctor present  in this location</p>
          </> : <></>}
      <div className='listof-doctors-sug-container' style={{  }}>
        <h5 className='py-2'>|| Suggested Doctors ||</h5>
        <div className="container list-doctor-suggested" style={{ marginTop: '5vh' }}>
          {doctorsss.map(doctor => (
            <div key={doctor.id}>
              {imagess.map((img) => (
                <div key={img.id}>
                  {parseInt(doctor.doctor_imageId) === img.id ?
                    <>
                      <Doctors imgpath={img.path} name={doctor.doc_name} pin_code={doctor.pin_code} fees={doctor.fees} description={doctor.doc_desc} specializes={doctor.specializes} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
                      <p style={{ margin: '2vh' }}></p>
                    </>
                    : <>
                    </>}

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
