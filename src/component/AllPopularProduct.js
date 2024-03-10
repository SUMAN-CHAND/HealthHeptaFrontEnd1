import React, { useState, useEffect } from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard'
import axiosClient from './axiosClient';
import ClipLoader from 'react-spinners/ClipLoader';
import { Helmet } from 'react-helmet';
export default function AllPopularProduct(props) {
  //main for connecting backend with Session
  axiosClient.defaults.withCredentials = true;
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
  let [loading, setLoading] = useState(false);
  if (props.location === undefined) {
    useEffect(() => {
      axiosClient.get(`/product`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setProducts(res.data[0])
          setImages(res.data[1])
          setLoading(true);

        }
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
          setLoading(true);

        }
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
        <meta name="description" content=" Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
      </Helmet>
      <div>
        <div className="container" style={{ marginTop: '3vh', marginBottom: '1vh' }}>
          <h3 className='py-1'>|| Popular Products ||</h3>
          {loading ?
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
            : <ClipLoader color="blue" />}
          <p style={{ margin: '5px' }}></p>
          {loading ?
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
            : <ClipLoader color="blue" />}
          {/* <div><PopularProductCard/> </div> */}
        </div>
        <div className="container" style={{ marginTop: '3vh', marginBottom: '1vh' }}>
          <h3 className='py-1'>|| Otc Products ||</h3>
          {loading ?
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
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          <p style={{ margin: '5px' }}></p>
         </div>
        <div className="container" style={{ marginTop: '1vh', marginBottom: '1vh' }}>
          <h5 className='py-1'>|| Allopathy Products ||</h5>
          {loading ?
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
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          <p style={{ margin: '5px' }}></p>
          {loading ?
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
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
        </div>
        <div className="container" style={{ marginTop: '1vh', marginBottom: '1vh' }}>
          <h5 className='py-1'>|| Homeopathy Products ||</h5>
          {loading ?
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
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
            : <ClipLoader color="blue" />}
          <p style={{ margin: '5px' }}></p>
          {loading ?
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
