import React from 'react'
import {
    Link
} from "react-router-dom";
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';
const customStyles = {
    content: {
        overflowY: 'hidden',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const cardStyles = {
    maxWidth: "18vw",
    height: '45vh',
};
export default function CardService(props) {
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
    const cardText = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    return (
        <>
            <Helmet>
                <title>healthhepta.com</title>
                <meta name="description" content="Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
            </Helmet>
            <div>
                <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div className="card card-service shadow" style={cardStyles}>
                        <img src={props.img} style={{ height: '25vh' }} className="card-img-top " alt="..." />
                        <h5 className="card-title mt-1">{props.title}</h5>
                        <div className="card-body pt-1" style={cardText}>
                            <p className="card-text">{props.text}</p>

                            {/* <Link className="btn btn-primary btn-text" onClick={openModal}><p>{props.btnText}</p></Link>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <props.component closeTheModal={closeModal} />
                            </Modal> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
