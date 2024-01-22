import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import B2BProdCard from './B2BProdCard';


export default function AllProductPage() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1150 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1150, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 751 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 751, min: 0 },
            items: 2
        }
    };
    const param = useParams();

    const location = useLocation();
    let stateData = location.state
    console.log(stateData)

    const [products, setProducts] = useState([])
    const [image, setImages] = useState([])
    const [madicineShops, setMadicineShop] = useState([])
    const [dataFound, setDataFound] = useState(false)

    if (stateData.data === undefined) {
        param.selectLocation = "NO Result Match"
        useEffect(() => {
            axios.get(`http://${process.env.REACT_APP_HOST}:8081/product`).then((res) => {
                setProducts(res.data[0])
                setImages(res.data[1])
                setMadicineShop(res.data)

                // // Filter out duplicate values
                // console.log(madicineShops)
                // const uniqueMedicineShops = [...new Set(madicineShops)];

                // // Update state with unique numbers
                // setMadicineShop(uniqueMedicineShops);
                // console.log(madicineShops)

            })
        }, [])
    } else {
        useEffect(() => {
            setProducts(stateData.data)
            setImages(stateData.image)
            setMadicineShop(stateData.data)


            setDataFound(true)
        }, [])
    }
    console.log(image)


    const [medicineType, setMedicineType] = useState({
        type: 'select'
    })
    const handleMedicineType = (event) => {
        setMedicineType(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }

    // console.log(products)
    // functions();
    return (
        <div style={{ backgroundColor: '#80808024' }}>
            <div class="row m-2" style={{ justifyContent: 'center' }}>
                <div className="col-2 m-2 shadow filter" style={{ backgroundColor: 'white' }}>
                    <span className='p-2' style={{ fontWeight: '800' }}>Filter</span>
                    <hr />

                    <div className="container">
                        <div style={{ textAlign: 'left' }}>
                            <p>PRODUCT TYPE</p>
                            <select
                                onChange={handleMedicineType} name='type'
                                style={{ width: '100%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                                <option selected value="select">Select One</option>
                                <option value="Homeopathy">Homeopathy</option>
                                <option value="Allopathy">Allopathy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-8 m-2 shadow list-product-results" style={{ backgroundColor: 'white', textAlign: 'left' }} >
                    <p className='mt-3 p-2' >Search for <span className='text-warning text-bold' style={{ fontWeight: '700' }}>{param.selectLocation}</span></p>
                    <span> <h5>Products :</h5> </span>
                    <div className="caontainer" style={{padding:'2rem 2rem'}}>
                        {medicineType.type[0] === 'select' ? <>
                            <Carousel responsive={responsive}>
                                {products.map(fproduct => (
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
                        </> : <>
                        </>
                        }
                        {medicineType.type === 'select' ? <>
                            <Carousel responsive={responsive}>
                                {products.map(fproduct => (
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

                            <Carousel responsive={responsive}>
                                {products.map(fproduct => (
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

                        </> : <></>}
                        {medicineType.type[0] === 'Homeopathy' ? <>
                            <Carousel responsive={responsive}>
                                {products.map(fproduct => (
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

                        </> : <></>}
                        {medicineType.type[0] === 'Allopathy' ? <>
                            <div className="container my-3" style={{ display: 'flex' }}>
                                <Carousel responsive={responsive}>
                                    {products.map(fproduct => (
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
                            <Carousel responsive={responsive}>
                                {products.map(fproduct => (
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

                        </> : <></>}

                    </div>

                    <div>
                    </div>
                </div>
            </div>
        </div >
    )
}
