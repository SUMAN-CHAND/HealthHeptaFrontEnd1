import React from 'react'
import {
  Link
} from "react-router-dom";
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
  const id = props.id;
  return (
    <div className=" "  >
      <Link style={{ textDecoration: 'none' }}>
        <div className="container"  >
          <div className="card  ">
            <img src={`http://${process.env.REACT_APP_HOST}:8081/${props.img}`} className="card-img-top" alt="..." style={{ maxHeight: '13vh' }}  />
            <div className="card-body">
              <p className="card-title" style={{ fontWeight: '800' }}>{props.title}</p>
              <p className="card-text">{props.phone}</p>
              {/* <p className="card-text">{props.location}</p> */}
              <p className="card-text">PinCode :- {props.pin_code}</p>
              <Link to={`/medicineshop/products/${id}`} className="btn btn-primary" style={{ fontSize: '0.7rem' }} >{props.btntext}</Link>
              
            </div>
          </div>
        </div>
      </Link>
    </div>

  )
}
