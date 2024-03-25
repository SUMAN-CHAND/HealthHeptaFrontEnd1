import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosClient from './axiosClient';
import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard'
import "react-multi-carousel/lib/styles.css";
import MedicineShopCard from './MedicineShopCard';
export default function AllProductOfAMedicineShop() {
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
    const param = useParams();
    const id = param.id;
    console.log(id)
    const [products, setProducts] = useState([])
    const [image, setImages] = useState([])
    const [medicineShop, setMedicineShop] = useState([])
    const [medicineShopimage, setmedicineShopImages] = useState([])
    useEffect(() => {
        axiosClient.get(`/medicineshop/products/${id}`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setProducts(response.data[0])
                    setImages(response.data[1])
                    setMedicineShop(response.data[2])
                    setmedicineShopImages(response.data[3])
                }
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, [])
    return (
        <div style={{ width: '100%', display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                <div className=''>
                    {medicineShop && medicineShop.map(madical => (
                        <div key={madical.id}>
                            {medicineShopimage.map((img) => (
                                <div key={img.id} style={{width:'15vw'}}>
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
                </div>
            </div>
            {products && <div className="container" style={{ marginTop: '3vh', marginBottom: '1vh' }}>
                <h3 className='py-1'>|| All Products ||</h3>

                <Carousel responsive={responsive} className='productCarousel'>
                    {products.map(fproduct => (
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
                <p style={{ margin: '5px' }}></p>
               
            </div>}
            {!products && <>
                <div>
                    <p>Data not found</p>
                    <p> !! No Product Present in This Medicine Shop !! </p>
                </div>
            </>}
            
        </div>
    )
}
