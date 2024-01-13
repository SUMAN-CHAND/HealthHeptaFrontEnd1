import React from 'react'
import CardService from './CardService'
import doctor from '../img/doctor1.avif';
import medicines from '../img/Medicines.avif';
import lab from '../img/lab.webp';
import clinic from '../img/Clinic.webp';
import SearchMedicinesStoreByLocation from './ModalSearchMedicinesStoreByLocation';
import BookAppointment from './ModalBookAppointment';
import ModalSearchLabByLoaction from './ModalSearchLabByLocation';
import ModalSearchClinicByLoaction from './ModalSearchClinicByLoaction';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';

export default function AllServices() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1150 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1150, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 560 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 2
    }
  };

  return (
    <div>
      <div className="container">
        <h3 className='py-2'>|| Our Services ||</h3>
        {/* <div className="container servicess" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
          <Carousel responsive={responsive}>
            {/* <div className='servicess-sm' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
              <div><CardService img={doctor} title="Visit a Doctor" text="Search the best doctors, specialities, clinic & hospital nearest to you." btnText="Book Your Appointment" component={BookAppointment} /></div>
              <div><CardService img={medicines} title="Medicines" text="Search the best doctors, specialities, clinic & hospital nearest to you." btnText="Order Your Medicines" component={SearchMedicinesStoreByLocation} /></div>
            {/* </div> */}
            {/* <div className='servicess-sm' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
            <div><CardService img={lab} title="Lab Tests" text="Search the best doctors, specialities, clinic & hospital nearest to you." btnText="Book Your Lab Test" component={ModalSearchLabByLoaction} /></div>
            <div><CardService img={clinic} title="Clinic" text="Search the best doctors, specialities, clinic & hospital nearest to you." btnText="Visit Our Clinic Now" component={ModalSearchClinicByLoaction} /></div>
            {/* </div> */}
          </Carousel>
        {/* </div> */}
      </div>
    </div>
  )
}
