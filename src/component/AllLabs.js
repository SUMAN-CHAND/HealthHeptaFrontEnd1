import React, { useEffect, useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import labimg from '../img/lab.webp';
import axios from 'axios';
import LabCard from './LabCard';
import axiosClient from './axiosClient';
import ClipLoader from 'react-spinners/ClipLoader';
import { Helmet } from 'react-helmet';

export default function AllLabs(props) {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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


  const [labs, setLabs] = useState([])
  const [image, setImages] = useState([]);
  let [loading, setLoading] = useState(false);



  if (props.location === undefined) {
    useEffect(() => {
      axiosClient.get(`/laboratory/laboratorys`)
        .then(response => {
          // Handle response
          if (response.data !== null) {
            setLabs(response.data[0]);
            setImages(response.data[1])
            setLoading(true);


          }
          // console.log(response.data);
        })
        .catch(err => {
          // Handle errors
          console.error(err);
        });
    }, [])
  } else {
    useEffect(() => {
      axiosClient.get(`/madicine/medicineshops/${props.location}`)
        .then(response => {
          // Handle response
          if (response.data !== null) {
            setLabs(response.data)
            setImages(response.data[1])
            setLoading(true);

          }
          // console.log(response.data);
        })
        .catch(err => {
          // Handle errors
          console.error(err);
        });
    }, [])
  }

  return (
    <>
      <Helmet>
        <title>healthhepta.com</title>
        <meta name="description" content="Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
      <div>
        <div className="container" style={{ marginTop: '1vh' }}>
          <h3 className='py-1'>||Best Pathological Laboratory In Your Location ||</h3>
          {loading ?
            <Carousel responsive={responsive} className='allLabsCarousel'>

              {labs.map(lab => (
                <div key={lab.id}>
                  {image.map((img) => (
                    <div key={img.id}>
                      {parseInt(lab.SubAdminImageId) === img.id ?
                        <>
                          <LabCard id={lab.id} img={img.path} title={lab.name} phone={lab.phone} location={lab.landmark} openingtime={lab.OpeningTime} closetime={lab.CloseingTime} desc={lab.description} btntext="Book A Test Now" />
                          {/* < LabCard img={labimg} title="Ghose Laboratory" location="Kolkata" btntext="Order Now"/> */}

                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
        </div>
      </div>
    </>
  )
}
