import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
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
  // console.log(stateData)

  const [products, setProducts] = useState([])
  const [image, setImages] = useState([])
  const [labTests, setLabTests] = useState([])
  const [labImage, setLabImages] = useState([])
  const [doctors, setDoctors] = useState([])
  const [doctorImage, setDoctorImages] = useState([])
  const [doctorsNF, setDoctorsNF] = useState([])
  const [doctorImageNF, setDoctorImageNF] = useState([])
  const [madicineShops, setMadicineShop] = useState([])
  const [madicineShopsImage, setMadicineShopImage] = useState([])
  const [dataFound, setDataFound] = useState(false)
  const [productsNF, setProductsNF] = useState([])
  const [imageNF, setImagesNF] = useState([])
  const [labTestsNF, setLabTestsNF] = useState([])
  const [labImageNF, setLabImagesNF] = useState([])

  let [noTestPresent, setNoTestPresent] = useState(false);
  let [loading, setLoading] = useState(false);

  let current_pin_code;
  current_pin_code = sessionStorage.getItem('current_pin_code');

  useEffect(() => {
    const fetchProuct = async () => {
      try {
        if (current_pin_code === null) {
          axiosClient.get(`/product`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setProductsNF(res.data[0])
              setImagesNF(res.data[1])
              setLoading(true);

            }
          })
            .catch(err => {
              // Handle errors
              console.error(err);
            });

        } else {
          axiosClient.get(`/product/${current_pin_code}`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setProductsNF(res.data[0])
              setImagesNF(res.data[1])
              setLoading(true);
              setNoTestPresent(false);
            } else {
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

    fetchProuct();
  }, [current_pin_code]);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        if (current_pin_code === null) {
          axiosClient.get(`/laboratory/lab_tests`)
            .then(response => {
              // Handle response
              // console.log(response.data)
              if (response.data !== null) {
                setLabTestsNF(response.data[0]);
                setLabImagesNF(response.data[1])
              }
            })
            .catch(err => {
              // Handle errors
              console.error(err);
            });
        } else {
          axiosClient.get(`/laboratory/lab_tests/${current_pin_code}`)
            .then(response => {
              // Handle response
              if (response.data[0] !== undefined) {
                setLabTestsNF(response.data[0]);
                setLabImagesNF(response.data[1])
                setLoading(true);
                setNoTestPresent(false);
              } else {
                setLoading(true);
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

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        if (current_pin_code === null) {
          axiosClient.get(`/doctors`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setDoctorsNF(res.data[0]);
              setDoctorImageNF(res.data[1]);
              setLoading(true);
            }
          })
            .catch(err => {
              // Handle errors
              console.error(err);
            });
        } else {
          axiosClient.get(`/doctors/${current_pin_code}`).then((res) => {
            // Handle response
            if (res.data !== null) {
              setDoctorsNF(res.data[0]);
              setDoctorImageNF(res.data[1]);
              setLoading(true);
              setNoTestPresent(false);
            } else {
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

    fetchDoctors();
  }, [current_pin_code]);




  useEffect(() => {
    setProducts(stateData.product)
    setImages(stateData.image)
    setLabTests(stateData.lab)
    setLabImages(stateData.labImage)
    setDoctors(stateData.doctor)
    setDoctorImages(stateData.doctorImage)
    setMadicineShop(stateData.medicineShop)
    setMadicineShopImage(stateData.medicineShopImage);
    setDataFound(true)
  }, [])
  const [medicineType, setMedicineType] = useState({
    type: 'select'
  })
  const handleMedicineType = (event) => {
    setMedicineType(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }
  return (
    <div style={{ backgroundColor: '#80808024', minHeight: '100vh' }}>
      <div className="row m-2  py-2" style={{ justifyContent: 'center', minHeight: "95vh" }}>
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
        <div className="col-8 m-2 pb-3 shadow list-product-results" style={{ backgroundColor: 'white', textAlign: 'left' }} >
          <p className='mt-3 p-2' >Search for <span className='text-warning text-bold' style={{ fontWeight: '700' }}>{param.selectLocation}</span></p>
          {products.length > 0 ? <>
            <span> <h5>Products :</h5> </span>
            <div className="caontainer">
              {medicineType.type[0] === 'select' ? <>
                <Carousel responsive={responsive}>
                  {products.map(fproduct => (
                    <div key={fproduct.product_id}>
                      {image.map((img) => (
                        <div key={img.id}>
                          {parseInt(fproduct.productImageId) === img.id ?
                            <>
                              <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} productOf={fproduct.productOf} />
                            </>
                            : <></>}
                        </div>
                      ))}
                    </div>
                  ))}
                </Carousel>
                {/* <Carousel responsive={responsive}>
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
                </Carousel> */}
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
                                <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} productOf={fproduct.productOf} />
                              </>
                              : <></>}
                          </div>
                        ))}
                      </div>
                    ))}
                  </Carousel>
                  {/* <Carousel responsive={responsive}>
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
                  </Carousel> */}
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
                                <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} productOf={fproduct.productOf} />
                              </>
                              : <></>}
                          </div>
                        ))}
                      </div>
                    ))}
                  </Carousel>

                  {/* <Carousel responsive={responsive}>
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
                          </div>
                        ))}
                      </div>
                    ))}
                  </Carousel> */}
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
                                  <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} productOf={fproduct.productOf} />
                                </>
                                : <></>}
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
                                <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} productOf={fproduct.productOf} />
                              </>
                              : <></>}
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
              {doctors && doctors.map(doctor => (
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
          {madicineShops.length > 0 ? <>
            <span> <h5>Medicine Shops :</h5> </span>

            <Carousel responsive={responsive}>
              {madicineShops.map(madical => (
                <div key={madical.id}>
                  {madicineShopsImage.map((img) => (
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

                          <ProductCard imgpath={img.path} name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} description={fproduct.description} productOf={fproduct.productOf} />
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
                          <div><LabTestCard img={img.path} title={labTest.Test_Name} desc={labTest.Test_Desc} id={labTest.Test_id} location={labTest.Landmark} pin_code={labTest.pin_code} price={labTest.Price} btntext="Book Now" /> </div>
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
                          <Doctors imgpath={img.path} name={doctor.doc_name} description={doctor.doc_desc} fees= {doctor.fees} location={doctor.location} pin_code={doctor.pin_code} clnics={doctor.clnic} id={doctor.id} clinic_descs={doctor.clinic_desc} />
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
