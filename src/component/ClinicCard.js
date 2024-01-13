import React from 'react'


import {
  Link
} from "react-router-dom";

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     padding:'3%',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor:'#4c4cce',
//     textAlign:'center',
//     borderRadius:'5%',
//   },
// };

export default function ClinicCard(props) {
//     const [modalIsOpen, setIsOpen] = React.useState(false);

//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       document.body.style.overflow = 'hidden';
//   }
  
//   function closeModal() {
//       document.body.style.overflow = 'unset';
//       setIsOpen(false);
//   }
  return (
    <div>
      <div>
      <Link style={{ textDecoration: 'none' }}>
        <div className="container" >
          <div className="card">
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.location}</p>
              <Link to='/particular-clinic' className="btn btn-primary" style={{ fontSize: '0.9rem' }} >{props.btntext}</Link>
              
            </div>
          </div>
        </div>
      </Link>
    </div>
    </div>
  )
}
