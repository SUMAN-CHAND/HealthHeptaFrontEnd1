import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
import axios from 'axios';
import medicineshop from '../img/medicinesShop.webp';
import MedicineShopCard from './MedicineShopCard';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import LabTestCard from './LabTestCard';
import Doctors from './DoctorCard';
import axiosClient from './axiosClient';



export default function MedicinePageSearchResult() {
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
  const [labTests, setLabTests] = useState([])
  const [labImage, setLabImages] = useState([])
  const [doctors, setDoctors] = useState([])
  const [doctorImage, setDoctorImages] = useState([])
  const [doctorsNF, setDoctorsNF] = useState([])
  const [doctorImageNF, setDoctorImageNF] = useState([])
  const [madicineShops, setMadicineShop] = useState([])
  const [dataFound, setDataFound] = useState(false)


  const [productsNF, setProductsNF] = useState([])
  const [imageNF, setImagesNF] = useState([])
  const [labTestsNF, setLabTestsNF] = useState([])
  const [labImageNF, setLabImagesNF] = useState([])
  // if (stateData.data === undefined) {

  // if (stateData.product.length <= 0 && stateData.lab.length <= 0 && stateData.doctor.length <= 0) {
  //   param.selectLocation = "NO Result Match"
    useEffect(() => {
      axiosClient.get(`/product`).then((res) => {
        setProductsNF(res.data[0])
        setImagesNF(res.data[1])
        setMadicineShop(res.data)

        // // Filter out duplicate values
        // console.log(madicineShops)
        // const uniqueMedicineShops = [...new Set(madicineShops)];

        // // Update state with unique numbers
        // setMadicineShop(uniqueMedicineShops);
        // console.log(madicineShops)

      })

      axiosClient.get(`/laboratory/lab_tests`)
        .then(response => {
          // Handle response
          if (response.data !== null) {
            setLabTestsNF(response.data[0]);
            setLabImagesNF(response.data[1])

          }
          // console.log(response.data);
        })
        .catch(err => {
          // Handle errors
          console.error(err);
        });

      axiosClient.get(`/doctors`).then((res) => {
        // Handle response
        if (res.data !== null) {
          setDoctorsNF(res.data[0]);
          setDoctorImageNF(res.data[1]);
        }
        // console.log(response.data);
      })
        .catch(err => {
          // Handle errors
          console.error(err);
        });

    }, [])

  // }
  //  else {
  useEffect(() => {
    setProducts(stateData.product)
    setImages(stateData.image)
    setLabTests(stateData.lab)
    setLabImages(stateData.labImage)
    setDoctors(stateData.doctor)
    setDoctorImages(stateData.doctorImage)
    setMadicineShop(stateData.product)
    setDataFound(true)
  }, [])
  // }


  // }
  // console.log(image)


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
    <div style={{ backgroundColor: '#80808024',minHeight:'100vh' }}>
      <div className="row m-2" style={{ justifyContent: 'center',minHeight:"95vh" }}>
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
          {products.length > 0 ? <>
            <span> <h5>Products :</h5> </span>
            <div className="caontainer">
              {medicineType.type[0] === 'select' ? <>
                <Carousel responsive={responsive}>

                  {/* {products.map(fproduct => (
                  <div key={fproduct.product_id}>
                    <ProductCard
                      name={fproduct.product_name}
                      price={fproduct.product_price}
                      product_id={fproduct.product_id}
                      discount={fproduct.discount}
                      description={fproduct.description}
                    />
                    <br />
                  </div>
                ))} */}

                  {products.map(fproduct => (
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
                <Carousel responsive={responsive}>
                  {products.map(fproduct => (
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
              </> : <>
              </>
              }
              {medicineType.type === 'select' ?
                <>
                  <Carousel responsive={responsive}>
                    {products.map(fproduct => (
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
                  <Carousel responsive={responsive}>
                    {products.map(fproduct => (
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
                </> : <></>}
              {medicineType.type[0] === 'Homeopathy' ?
                <>
                  <Carousel responsive={responsive}>

                    {products.filter(productf => productf.typeOfMedicine === 'Homeopathy').map(fproduct => (
                      <div key={fproduct.product_id}>
                        {image.map((img) => (
                          <div key={img.id}>
                            {parseInt(fproduct.productImageId) === img.id ?
                              <>
                                {console.log(fproduct.productImageId)}
                                <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                              </>
                              : <></>}

                            {/* <p>{img.name}</p> */}
                          </div>
                        ))}
                      </div>
                    ))}
                  </Carousel>

                  <Carousel responsive={responsive}>
                    {products.filter(productf => productf.typeOfMedicine === 'Homeopathy').map(fproduct => (
                      <div key={fproduct.product_id}>
                        {image.map((img) => (
                          <div key={img.id}>
                            {parseInt(fproduct.productImageId) === img.id ?
                              <>
                                {console.log(fproduct.productImageId)}
                                <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
                              </>
                              : <></>}

                            {/* <p>{img.name}</p> */}
                          </div>
                        ))}
                      </div>
                    ))}
                  </Carousel>
                </> : <></>}
              {medicineType.type[0] === 'Allopathy' ?
                <>
                  <div className="container my-3" style={{ display: 'flex' }}>
                    <Carousel responsive={responsive}>

                      {products.filter(productf => productf.typeOfMedicine === 'Allopathy').map(fproduct => (
                        <div key={fproduct.product_id}>
                          {image.map((img) => (
                            <div key={img.id}>
                              {parseInt(fproduct.productImageId) === img.id ?
                                <>
                                  {console.log(fproduct.productImageId)}
                                  <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
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

                    {products.filter(productf => productf.typeOfMedicine === 'Allopathy').map(fproduct => (
                      <div key={fproduct.product_id}>
                        {image.map((img) => (
                          <div key={img.id}>
                            {parseInt(fproduct.productImageId) === img.id ?
                              <>
                                {console.log(fproduct.productImageId)}
                                <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} />
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
          </> : <></>}

          {labTests.length > 0 ? <>
            <span> <h5>Lab Tests :</h5> </span>

            <Carousel responsive={responsive}>
              {labTests.map(labTest => (
                <div key={labTest.Test_id}>
                  {labImage.map((img) => (
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
          </> : <>

          </>
          }
          {doctors.length > 0 ? <>
            <span> <h5>Doctors :</h5> </span>

            <Carousel responsive={responsive}>
              {doctors.map(doctor => (
                <div key={doctor.id}>
                  {doctorImage.map((img) => (
                    <div key={img.id}>
                      {parseInt(doctor.doctor_imageId) === img.id ?
                        <>
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </> : <>

          </>
          }


          {productsNF.length > 0 ? <>
            <span> <h5>Here are some suggested Products :</h5> </span>

            <Carousel responsive={responsive}>
              {productsNF.map(fproduct => (
                <div key={fproduct.product_id}>
                  {imageNF.map((img) => (
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
          </> : <>

          </>
          }

          {labTestsNF.length > 0 ? <>
            <span> <h5>Here are some suggested lab tests :</h5> </span>

            <Carousel responsive={responsive}>
              {labTestsNF.map(labTest => (
                <div key={labTest.Test_id}>
                  {labImageNF.map((img) => (
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
          </> : <>

          </>
          }
          {doctorsNF.length > 0 ? <>
            <span> <h5> Suggested Doctors :</h5> </span>

            <Carousel responsive={responsive}>
              {doctorsNF.map(doctor => (
                <div key={doctor.id}>
                  {doctorImageNF.map((img) => (
                    <div key={img.id}>
                      {parseInt(doctor.doctor_imageId) === img.id ?
                        <>
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} location={doctor.location} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
                        </>
                        : <>
                        </>}

                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </> : <>

          </>
          }
          <div>
          </div>
        </div>
      </div>
    </div >
  )
}
