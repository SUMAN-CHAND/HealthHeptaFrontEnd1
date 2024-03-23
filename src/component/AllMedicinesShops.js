import React, { useEffect, useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import MedicineShopCard from './MedicineShopCard';
import medicineshop from '../img/medicinesShop.webp';
import axiosClient from './axiosClient';
import ClipLoader from 'react-spinners/ClipLoader';
import { Helmet } from 'react-helmet';
export default function AllMedicinesShops(props) {
  const [madicalPage, setMadicalPage] = useState([])
  const [image, setImages] = useState([]);
  let [loading, setLoading] = useState(false);
  let [noTestPresent, setNoTestPresent] = useState(false);

  // if (props.location === undefined) {
  //   useEffect(() => {
  // axiosClient.get(`/madicine/medicineshops`)
  //   .then(response => {
  //     // Handle response
  //     if (response.data !== null) {
  //       setMadicalPage(response.data[0]);
  //       setImages(response.data[1]);
  //       setLoading(true);
  //     }
  //   })
  //   .catch(err => {
  //     // Handle errors
  //     console.error(err);
  //   });
  //   }, [])
  // } else {
  //   useEffect(() => {
  //     axiosClient.get(`/madicine/medicineshops/${props.location}`)
  //       .then(response => {
  //         // Handle response
  //         if (response.data !== null) {
  //           setMadicalPage(response.data[0]);
  //           setImages(response.data[1]);
  //           setLoading(true);

  //         }
  //         // console.log(response.data);
  //       })
  //       .catch(err => {
  //         // Handle errors
  //         console.error(err);
  //       });
  //   }, [])
  // }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1150 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1150, min: 700 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 700, min: 450 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2
    }
  };


  let current_pin_code;
  current_pin_code = sessionStorage.getItem('current_pin_code');

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        if (current_pin_code === null) {
          axiosClient.get(`/madicine/medicineshops`)
            .then(response => {
              // Handle response
              if (response.data !== null) {
                setMadicalPage(response.data[0]);
                setImages(response.data[1]);
                setLoading(true);
              }
            })
            .catch(err => {
              // Handle errors
              console.error(err);
            });
        } else {
          axiosClient.get(`/madicine/medicineshops/${current_pin_code}`)
        .then(response => {
          // Handle response
          // console.log(response.data)
          if (response.data !== null ) {
            setMadicalPage(response.data[0]);
            setImages(response.data[1]);
            setLoading(true);
            setNoTestPresent(false);
          }else{
            setNoTestPresent(true);
          }
        })
        .catch(err => {
          // Handle errors
          console.error(err);
        });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLabs();
  }, [current_pin_code]);




  return (
    <>
      <Helmet>
        <title>healthhepta.com</title>
        <meta name="description" content=" Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
      <div>
        <div className="container" >
          <h3 className='py-1'>||Best Medicines Seller In Your Location ||</h3>
          {loading ?
            <Carousel responsive={responsive} className='allMedicinesShopsCarousel'>
              {madicalPage && madicalPage.map(madical => (
                <div key={madical.id}>
                  {image.map((img) => (
                    <div key={img.id}>
                      {parseInt(madical.SubAdminImageId) === img.id ?
                        <>
                          <MedicineShopCard id={madical.id} img={img.path} title={madical.name} phone={madical.phone} location={madical.City} btntext="View Products" />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
            {noTestPresent?<>
              <p>No  Pharmacy Shop  present  in this location</p>
            </>:<></>}
        </div>
      </div>
    </>
  )
}
