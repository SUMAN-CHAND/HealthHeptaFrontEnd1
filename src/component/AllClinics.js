import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import clinic from '../img/modalclinicimg.png';
import ClinicCard from './ClinicCard';
import { useLocation } from 'react-router-dom';
export default function AllClinics() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1150 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1150, min: 1024 },
      items: 5
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
  const location = useLocation();
  const statedata = location.state;
  return (
    <div>
        <div className="container"style={{marginTop:'3vh'}}>
        <h1 className='py-3'>||Best Medicines Seller In Your Location ||</h1>
            <Carousel responsive={responsive}>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
                <div><ClinicCard img={clinic} title="Applo Clinic" location="Kolkata" btntext="Book Now"/> </div>
            </Carousel>
        </div>
    </div>
  )
}
