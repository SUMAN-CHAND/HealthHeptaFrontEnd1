import React, { useState, useEffect } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
// import { Carousel } from "react-bootstrap";
import ProductCard from './ProductCard'
import axios from 'axios';
import axiosClient from './axiosClient';
import { useParams } from 'react-router-dom';

export default function OfferProductPage(props) {
  //main for connecting backend with Session
  axiosClient.defaults.withCredentials = true;

  const param = useParams();
  console.log(param)
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
  const [products, setProducts] = useState([])
  const [image, setImages] = useState([])
  // console.log(props.location)
  if (props.location === undefined) {
    useEffect(() => {
      axiosClient.get(`/product`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setProducts(res.data[0])
          setImages(res.data[1])
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
      axiosClient.get(`/product/${props.location}`).then((res) => {

        // Handle response
        if (res.data !== null) {
          setProducts(res.data)
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
      <div className="container" style={{ marginTop: '3vh', marginBottom: '1vh' }}>
        <h3 className='py-1'>|| {param.id}% off Products ||</h3>

        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.category.toLowerCase() === 'madicine').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <p style={{ margin: '5px' }}></p>
        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.category.toLowerCase() === 'madicine').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        {/* <div><PopularProductCard/> </div> */}
      </div>
      <div className="container" style={{ marginTop: '3vh', marginBottom: '1vh' }}>
        <h3 className='py-1'>|| Otc Products ||</h3>

        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.DrugOrNot.toLowerCase() === 'otc').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <p style={{ margin: '5px' }}></p>
        {/* <Carousel responsive={responsive}>
          {products.filter(product => product.DrugOrNot.toLowerCase() === 'otc').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                </div>
              ))}
            </div>
          ))}
        </Carousel> */}
        {/* <div><PopularProductCard/> </div> */}
      </div>
      <div className="container" style={{ marginTop: '1vh', marginBottom: '1vh' }}>
        <h5 className='py-1'>|| Allopathy Products ||</h5>

        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.typeOfMedicine.toLowerCase() === 'allopathy').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <p style={{ margin: '5px' }}></p>
        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.typeOfMedicine.toLowerCase() === 'allopathy').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        {/* <div><PopularProductCard/> </div> */}
      </div>
      <div className="container" style={{ marginTop: '1vh', marginBottom: '1vh' }}>
        <h5 className='py-1'>|| Homeopathy Products ||</h5>

        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.typeOfMedicine.toLowerCase() === 'homeopathy').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        <p style={{ margin: '5px' }}></p>
        <Carousel responsive={responsive} className='productCarousel'>
          {products.filter(product => product.typeOfMedicine.toLowerCase() === 'homeopathy').map(fproduct => (
            <div key={fproduct.product_id}>
              {image.map((img) => (
                <div key={img.id}>
                  {parseInt(fproduct.productImageId) === img.id ?
                    <>
                      <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                    </>
                    : <></>}

                  {/* <p>{img.name}</p> */}
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        {/* <div><PopularProductCard/> </div> */}
      </div>
    </div>
  )
}
