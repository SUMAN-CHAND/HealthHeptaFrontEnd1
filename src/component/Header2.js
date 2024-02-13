import React from 'react'
import {
    Link
} from "react-router-dom";
import Modal from 'react-modal';
import SearchMedicinesStoreByLocation from './ModalSearchMedicinesStoreByLocation';
import ModalBookAppointment from './ModalBookAppointment';
import ModalSearchLabByLocation from './ModalSearchLabByLocation';
import ModalSearchClinicByLoaction from './ModalSearchClinicByLoaction';
import doctorImage from '../img/docto image.jpg'
import medicinesImage from '../img/medicineImageHeader2.png'
import labTestImage from '../img/labImageHeader2.png'
import clinicImage from '../img/ClinicImageHeader2.png'
import './style.css';
import { CiMedicalCross } from "react-icons/ci";
import { BiTestTube } from "react-icons/bi";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { BiSolidOffer } from "react-icons/bi";
import { IoMedkitOutline } from 'react-icons/io5';
import ModalPharmacySearch from './ModalPharmacySearch';





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

const fontStyle = {
    fontSize: 'calc(1vw + 0.5rem)',
    display: 'flex',
    alignItems: 'center'
}
export default function Header2() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.backgroundColor = 'rgb(76 76 76 / 19%)'
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        document.body.style.backgroundColor = '#fff'
        setIsOpen(false);
    }
    return (
        <div className='Header2' >
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#232f3e" }}>
                <div className="container-fluid Header-2" style={{ justifyContent: 'space-evenly' }}>

                    <div className="nav-item2 text-white mx-1 Header2-search " style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search my-3 mx-1 " viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <img src={doctorImage} alt="" />
                        <Link className="nav-link active text-white h2-t " style={fontStyle} aria-current="page" onClick={openModal}>Search Doctor</Link>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <ModalBookAppointment closeTheModal={closeModal} />

                        </Modal>
                    </div>
                    <div className="nav-item text-white Header2-search">
                        <img src={medicinesImage} alt="" />
                        <Link className="nav-link active text-white h2-t  " style={fontStyle} aria-current="page" onClick={openModal}>
                            <CiMedicalCross className='mx-1' />
                            Medicines </Link>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <SearchMedicinesStoreByLocation closeTheModal={closeModal} />
                        </Modal>
                    </div>
                    <div className="nav-item text-white Header2-search">
                        <img src={medicinesImage} alt="" />
                        <Link className="nav-link active text-white h2-t  " style={fontStyle} aria-current="page" onClick={openModal}>
                            <IoMedkitOutline  className='mx-1' />
                            Pharmacy </Link>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <ModalPharmacySearch closeTheModal={closeModal} />
                        </Modal>
                    </div>
                    <div className="nav-item text-white mx-1 Header2-search ">
                        <img src={labTestImage} alt="img...." />
                        <Link className="nav-link active text-white h2-t " style={fontStyle} aria-current="page" onClick={openModal} >
                            <BiTestTube className='mx-1' />
                            Lab Tests</Link>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <ModalSearchLabByLocation closeTheModal={closeModal} />

                        </Modal>
                    </div>
                    <div className="nav-item text-white mx-1 Header2-search">
                        <img src={clinicImage} alt="" />
                        <Link className="nav-link active text-white h2-t " style={fontStyle} aria-current="page" onClick={openModal}>
                            <LiaClinicMedicalSolid className='mx-1' />
                            Clinic</Link>
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
                    <div className="nav-item2 text-white mx-1 Header2-search offers-header2" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <img src={medicinesImage} alt="" />
                        <Link className="nav-link active text-white h2-t " style={fontStyle} aria-current="page" onClick={openModal}>
                            <BiSolidOffer className='mx-1' />
                            Offers</Link>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >

                            <SearchMedicinesStoreByLocation closeTheModal={closeModal} />
                        </Modal>
                    </div>

                </div>
            </nav>
        </div>
    )
}
