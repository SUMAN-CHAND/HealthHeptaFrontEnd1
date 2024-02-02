import React, { useEffect, useState } from 'react'
import baby from '../img/babyproduct.webp';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import CategoriesCard from './CategoriesCard';
import axiosClient from './axiosClient';
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
      breakpoint: { max:450 , min: 0 },
      items: 2
    }
  };
  const [catagorys, setCatagorys] = useState([])

  useEffect(() => {
    axiosClient.get(`/catagorys`).then((res) => {
      // Handle response
      if (res.data !== null) {
        setCatagorys(res.data)
        // setImages(res.data[1])
      }
      // console.log(response.data);
    })
      .catch(err => {
        // Handle errors
        console.error(err);
      });

  }, [])
      
  return (
    <div>
      <div className="container"style={{marginTop:'3vh'}}>
        <h3 className='py-2'>||Browse Medicines by Category||</h3>
            
            <Carousel responsive={responsive}>
            {catagorys.map(catagory => (
            <div >
              {/* {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <> */}
                      {/* <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} /> */}
                      <CategoriesCard  img={baby} title={catagory.category} btntext="Shop Now"/> 
                    {/* </>
                    : <></>}

                </div>
              ))} */}
            </div>
          ))}
            </Carousel>
        </div>

    </div>
  )
}
