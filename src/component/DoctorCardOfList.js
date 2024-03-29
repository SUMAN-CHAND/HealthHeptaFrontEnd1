import React from 'react'
import {
    Link
} from "react-router-dom";
import ViewDoctorDetailsModal from './ViewDoctorDetailsModal';
import Modal from 'react-modal';
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
export default function DoctorCardOfList(props) {
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
    return (
        <div className='doctor-c-l' >
            <div className="row">
                <div className="col-12" >
                    <div className="doctor  container shadow" style={{ display: 'flex', margin: '1rem', backgroundColor: '#dffffb', padding: '1rem' }}>

                        <div className="deccription" style={{ display: 'flex' }} >
                            <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.imgpath}`} className="card-img-top" alt="..." style={{ maxWidth: '12vw' }} />
                            <div>
                                <p className='fs-5'>{props.name} </p>
                                <p className=''>Specializes:- {props.specializes}</p>
                                <p className=''> Description:- {props.desc}</p>
                                {/* <p>13 YEARS OF EXPERIENCE</p> */}
                                <div className='location doctor-location' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill mx-3" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    {/* <p>{props.location}</p> */}
                                    <p>{props.pin_code}</p>
                                </div>
                            </div>
                            <div className="doctor-c-d" style={{ height: '20vh',width:'50%' }}>
                                <h5>{props.clinic}</h5>
                                <p>{props.clinic_desc}
                                </p>
                                {/* <Link to={`/doctor/${props.id}`} className="btn m-1 text-light" style={{ fontSize: '0.9rem', width: '100%', backgroundColor: 'blue' }}>View Details</Link> */}
                                <div className="btn m-1 text-light doctor-card-button" style={{ fontSize: '0.9rem', backgroundColor: 'blue' }} onClick={openModal}>

                                    <p>View Details</p>
                                </div>

                                <Modal
                                    isOpen={modalIsOpen}
                                    onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >

                                    <ViewDoctorDetailsModal closeTheModal={closeModal} doctor_id={props.id} />
                                </Modal>
                                <Link to={`/doctor/${props.id}`} className="btn m-1  doctor-card-button" style={{ fontSize: '0.9rem', backgroundColor: '#07dbc1' }}> <p>Book Now</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
