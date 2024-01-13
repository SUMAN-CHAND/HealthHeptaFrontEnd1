import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import B2BProdCard from './B2BProdCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../ProductCard';


export default function AllMadicineCard({ headline, products, image }) {
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

    

    // Check if products or image are undefined or null
    if (!products || !image) {
        return <div>Error: Products or images data is missing.</div>;
    }

    // Filter products based on some condition (modify this as needed)
    const filteredProducts = products.filter(product => product.category.toLowerCase() === 'madicine');


    return (

        <div className="container" style={{ backgroundColor: '#389999', borderRadius: '5px' }}>
            <div className="container" style={{ marginTop: '3vh', marginBottom: '5vh', padding: '2vw' }}>
                <div className='headline' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 style={{ display: 'flex', color: 'white' }}>{headline} </h5>
                    <Link to='/b2b/products' style={{ textDecoration: 'none', marginBottom: '5px' }}><p className='btn btn-outline' style={{ display: 'flex', color: 'white', border: '2px solid white' }}> View All</p></Link>
                </div>
                <Carousel responsive={responsive}>
                    {filteredProducts.filter(product => product.category.toLowerCase() === 'madicine').map(fproduct => (
                        <div key={fproduct.product_id}>
                            {image.map((img) => (
                                <div key={img.id}>
                                    {parseInt(fproduct.productImageId) === img.id ?
                                        <>
                                            <B2BProdCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                                        </>
                                        : <></>}

                                    {/* <p>{img.name}</p> */}
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>


            </div>
        </div>

    )
}

