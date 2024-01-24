import React, { useState } from 'react'
import doctor3 from '../img/eyedoctor.webp';
import BookAppointment from './ModalBookAppointment';
import {
  Link, useNavigate
} from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';
import axiosClient from './axiosClient';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function SpecialitiesDoctorsCard(props) {
  const [selectLocation, setSelectLocation] = useState()


  const navigate = useNavigate();


  const searchDoctor = async () => {
    const data = { specializes: props.specializes };
    // searchDoctor(data);
    try {
      // console.log(data)
      axiosClient.post(`/doctorspecializes`, data)
        .then(res => {
          if (res.data !== null) {
            navigate(`/listofdoctor`,
              {
                state: {
                  data: res.data,
                  location: selectLocation
                }
              })
          }
          else if (res.data === null) {
            console.error(res.data.message);
          }
          else {
            console.error(res.data.message);
          }
        })
        .catch(err => console.log(err));


    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


  return (
    <div>
      <Link style={{ textDecoration: 'none' }}>
        <div className="container" >
          <div className="card">
            <img src={doctor3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">{props.specializes}</h6>
              {/* <p className="card-text">{props.location}</p> */}
              <button className="btn btn-primary" style={{ fontSize: '0.9rem' }} onClick={(event) => searchDoctor()}> <p>View Doctor's</p> </button>

            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
