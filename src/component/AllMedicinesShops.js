import React, { useEffect, useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import MedicineShopCard from './MedicineShopCard';
import medicineshop from '../img/medicinesShop.webp';
import axios from 'axios';

export default function AllMedicinesShops(props) {

  const [madicalPage, setMadicalPage] = useState([])
  const [image, setImages] = useState([]);

  // if (props.location !== undefined) {
  // }
  // console.log(props.location)
  if (props.location === undefined) {
    useEffect(() => {
      axios.get('http://localhost:8081/madicine/medicineshops')
        .then(response => {
          // Handle response
          if (response.data !== null) {
            setMadicalPage(response.data[0]);
            setImages(response.data[1])

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
      axios.get(`http://localhost:8081/madicine/medicineshops/${props.location}`)
        .then(response => {
          // Handle response
          if (response.data !== null) {
            setMadicalPage(response.data)
          }
          // console.log(response.data);
        })
        .catch(err => {
          // Handle errors
          console.error(err);
        });
    }, [])
  }
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
      breakpoint: { max:450 , min: 0 },
      items: 2
    }
  };

  return (
    <div>
      <div className="container" style={{ marginTop: '3vh' }}>
        <h3 className='py-2'>||Best Medicines Seller In Your Location ||</h3>
        <Carousel responsive={responsive}>
          {/* {madicalPage.map(madical => (
            <div key={madical.id} >
              <MedicineShopCard img={medicineshop} title={madical.name} phone={madical.phone} location={madical.City} btntext="Order Now" />
            </div>
          ))} */}
          {madicalPage.map(madical => (
          <div key={madical.id}>
            {image.map((img) => (
              <div key={img.id}>
                {parseInt(madical.SubAdminImageId) === img.id ?
                  <>
                    <MedicineShopCard img={img.path} title={madical.name} phone={madical.phone} location={madical.City} btntext="Order Now" />
                  </>
                  : <>
                  </>}

              </div>
            ))}
          </div>
        ))}
        </Carousel>
      </div>
    </div>
  )
}
