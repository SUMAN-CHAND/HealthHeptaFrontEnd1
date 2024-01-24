import React, { useEffect, useState } from 'react'
import {
    Link, useLocation
} from "react-router-dom";

import Modal from 'react-modal';
import SearchMedicinesStoreByLocation from './ModalSearchMedicinesStoreByLocation';
import ModalBookAppointment from './ModalBookAppointment';
import ModalSearchLabByLocation from './ModalSearchLabByLocation';
import ModalSearchClinicByLoaction from './ModalSearchClinicByLoaction';
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

export default function AppoitmentConfirmation() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        setIsOpen(false);
    }

    const location = useLocation();
    let stateData = location.state.value
    // console.log(stateData)

    var doctor_id = stateData.doctor_id;
    // var appoint_date = stateData.appoint_date;
    // var appoint_time = stateData.appoint_time;

    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        axiosClient.get(`/doctorsearch/${doctor_id}`).then((res) => {

            // Handle response
            if (res.data !== null) {
                setDoctor(res.data[0])
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
        <div>
            <div className="container " style={{ marginTop: '2vh', borderRadius: '5px' }}>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="5vh" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style={{ marginLeft: '68vw', marginTop: '5vh' }}>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Link>
                <div className='container p-2 Appointment-confirm' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 className='h-line'>||</h1><h1 style={{ color: 'black' }}> APPOINTMENT</h1><h1 style={{ color: 'rgb(34 220 220)' }}> &nbsp; CONFIRM</h1><h1 className='h-line'>||</h1>
                </div>
                {doctors.map(doctor => (
                    <div className='container p-5 ' >
                        <h5 className='m-3'>{stateData.name}, We have got you confirmed for your
                            appointment.</h5>
                        <h2 className='m-3'>{stateData.appoint_time} || {doctor.doc_name},{doctor.doc_desc}</h2>
                        <h5 className='m-3'>{stateData.appoint_date},<br />{doctor.clinic}, <br />{doctor.clinic_desc},<br />
                            {doctor.location}</h5>
                    </div>
                ))}
                <div className="button d-flex" style={{justifyContent:'center'}}>
                    <Link to='/'><button type="button" class="btn btn-success p-3 mx-3"><h5>DOWNLOAD APPOINTMENT</h5> </button>  </Link>
                    <div className="d-print-none ">
                        <div className="float-end">
                            <a href="javascript:window.print()" className="btn btn-success me-1  p-3 mx-3"><i className="fa fa-print">Print</i></a>
                            {/* <a href="#" className="btn btn-primary w-md"></a> */}
                        </div>
                    </div>
                </div>


            </div>

            <div className="container extarnal-Link my-5">
                <Link class="btn p-2 m-3" style={{ backgroundColor: 'rgb(7 219 193)' }} onClick={openModal}><h5>Book Another APPOINTMENT</h5> </Link>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalBookAppointment closeTheModal={closeModal} />

                </Modal>

                <Link class="btn p-2 m-3" style={{ backgroundColor: 'rgb(7 219 193)' }} onClick={openModal}><h5>Shop Medicine</h5> </Link>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <SearchMedicinesStoreByLocation closeTheModal={closeModal} />
                </Modal>

                <Link class="btn p-2 m-3" style={{ backgroundColor: 'rgb(7 219 193)' }} onClick={openModal}><h5>Book Lab Test</h5> </Link>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalSearchLabByLocation closeTheModal={closeModal} />

                </Modal>
                <Link class="btn p-2 m-3" style={{ backgroundColor: 'rgb(7 219 193)' }} onClick={openModal}><h5>Book Clinc Test</h5> </Link>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ModalSearchClinicByLoaction closeTheModal={closeModal} />
                </Modal>

            </div>

        </div>
    )
}
