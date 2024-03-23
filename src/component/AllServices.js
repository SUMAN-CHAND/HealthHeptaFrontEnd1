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
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
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
    <>
      <Helmet>
        <title>healthhepta.com</title>
        <meta name="description" content="Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
      <div>
        <motion.div
           className="box container"
           animate={{
            x: [500,0],
            y: 0,
            scale: 1,
            rotate: 0,
           }}
           transition={{
             duration: 1,
             ease: "easeInOut",
            //  times: [0, 0.2, 0.5, 0.8, 1],
            //  repeat: onemptied,
            //  repeatDelay: 1
           }}
          >
          <h3 className=''>|| Affordable Healthcare Services For You ||</h3>
          <Carousel className='ourserviceCarousel' responsive={responsive} style={{ height: '53vh' }}>
            <div><CardService img={doctor} title="Visit a Doctor" text="Search the best doctors, specialities, clinic & hospital nearest to you." /></div>
            <div><CardService img={medicines} title="Medicines" text="No need to stand in Pharma line,Skip pharmacy queue.Just click here."/></div>
            <div><CardService img={lab} title="Lab Tests" text="Book your lab test with our healthcare platfrom."  /></div>
            <div><CardService img={clinic} title="Clinic" text="Book your near by clinic and save your time." /></div>
          </Carousel>
        </motion.div>
        {/* btnText="Find Doctor Near You" component={BookAppointment}  */}
        {/* btnText="Order Your Medicines" component={SearchMedicinesStoreByLocation}  */}
        {/* btnText="Book Your Lab Test" component={ModalSearchLabByLoaction} */}
        {/* btnText="Find Your Clinic" component={ModalSearchClinicByLoaction} */}
      </div>
    </>
  )
}
