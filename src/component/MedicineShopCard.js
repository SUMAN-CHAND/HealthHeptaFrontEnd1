import React from 'react'
import {
  Link
} from "react-router-dom";
import Modal from 'react-modal';
import UploadPrescription from './UploadPrescription';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '3%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#4c4cce',
    textAlign: 'center',
    borderRadius: '5%',
  },
};

export default function MedicineShopCard(props) {
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

    <div className=" "  >
      <Link style={{ textDecoration: 'none' }}>
        <div className="container"  >
          <div className="card  ">
            {/* <img src={props.img} className="card-img-top" alt="..." /> */}
            <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.img}`} className="card-img-top" alt="..." style={{ maxHeight: '13vh' }}  />
            <div className="card-body">
              <p className="card-title" style={{ fontWeight: '800' }}>{props.title}</p>
              <p className="card-text">{props.phone}</p>
              <p className="card-text">{props.location}</p>
              <Link className="btn btn-primary" style={{ fontSize: '0.9rem' }} onClick={openModal}>{props.btntext}</Link>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <UploadPrescription closeTheModal={closeModal} />
              </Modal>
            </div>
          </div>
        </div>
      </Link>
    </div>

  )
}
