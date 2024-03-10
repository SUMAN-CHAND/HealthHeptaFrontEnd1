import React, { useEffect, useState } from 'react'
import baby from '../img/babyproduct.webp';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import CategoriesCard from './CategoriesCard';
import axiosClient from './axiosClient';
import ClipLoader from 'react-spinners/ClipLoader';
import { Helmet } from 'react-helmet';
export default function AllCategoy() {
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
  const [catagorys, setCatagorys] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    axiosClient.get(`/catagorys`).then((res) => {
      // Handle response
      if (res.data !== null) {
        setCatagorys(res.data)
        setLoading(true);
      }
    })
      .catch(err => {
        // Handle errors
        console.error(err);
      });
  }, [])
  return (
    <>
    <Helmet>
        <title>healthhepta.com</title>
        <meta name="description" content=" Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
    <div>
      <div className="container" style={{ marginTop: '1vh' }}>
        <h3 className='py-1' key={1}>||Browse Medicines by Category||</h3>
        {loading ?
          <Carousel responsive={responsive} className='allCategoryCarousel'>
            {catagorys.map((catagory, index) => (
              <div key={index}>
                 <CategoriesCard img={baby} title={catagory.category} btntext="Shop Now" />
                
              </div>
            ))}
          </Carousel>
          : <ClipLoader color="blue" />}
      </div>
    </div>
    </>
  )
}
