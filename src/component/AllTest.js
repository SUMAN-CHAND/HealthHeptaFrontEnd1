import React, { useEffect, useState } from 'react'
import lab from '../img/labimg.webp';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import LabTestCard from './LabTestCard';
import axios from 'axios';
import axiosClient from './axiosClient';
import ClipLoader from 'react-spinners/ClipLoader';

export default function AllTest(props) {

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

  const [labTests, setLabTests] = useState([]);
  const [image, setImages] = useState([]);
  let [loading, setLoading] = useState(false);

  if (props.location === undefined) {
    useEffect(() => {
      axiosClient.get(`/laboratory/lab_tests`)
        .then(response => {
          // Handle response
          if (response.data !== null) {
            setLabTests(response.data[0]);
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
            setLabTests(response.data)
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
    <div>
      <div className="container" style={{ marginTop: '1vh' }}>
        <h3 className='py-1'>||Browse All Type Of Tests||</h3>
        {loading ?
        <Carousel responsive={responsive} className='allLabTestCarousel'>
          {labTests.map(labTest => (
            <div key={labTest.Test_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(labTest.test_imageId) === img.id ?
                    <>
                      <div><LabTestCard img={img.path} title={labTest.Test_Name} desc={labTest.Test_Desc} id={labTest.Test_id} location={labTest.Landmark} price={labTest.Price} btntext="Book Now" /> </div>
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
  )
}
