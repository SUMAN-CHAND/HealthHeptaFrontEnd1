import React, { useEffect, useState } from 'react'
import LabTestCard from './LabTestCard';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import axiosClient from './axiosClient';
export default function LabSearchResults() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1150 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1150, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 560 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 560, min: 0 },
            items: 2
        }
    };
    let data = [];
    const location = useLocation();
    data = location.state;
    console.log(data.data[0])
    const [labTests, setLabTests] = useState(data.data[0]);
    const [image, setImages] = useState(data.data[1]);
    const [labss, setLabss] = useState([])
    const [imagess, setImagesss] = useState([])
    useEffect(() => {
        axiosClient.get(`/laboratory/lab_tests`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setLabss(response.data[0]);
                    setImagesss(response.data[1])
                }
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, [])
    return (
        <div>
            <div style={{ display: 'flex', width: '100vw' }}>
                {labTests !== undefined ? <>
                    <div className='listof-doctors' style={{ margin: '3rem', width: '60vw' }}>

                        <Carousel responsive={responsive}>
                            {labTests.map(labTest => (
                                <div key={labTest.Test_id}>
                                    {image.map((img) => (
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
                    </div>
                </> : <>
                    <div>


                        <p className='py-2 text-warning'> No Lab found of your search result </p>
                        <p className='py-2'> Here is some suggested Lab tests </p>

                        <div className='listof-doctors' style={{ margin: '3rem', width: '60vw' }}>

                            {labss.map(lab => (
                                <div key={lab.id}>
                                    {imagess.map((img) => (
                                        <div key={img.id}>
                                            {parseInt(lab.test_imageId) === img.id ?
                                                <>
                                                    <div><LabTestCard img={img.path} title={lab.Test_Name} desc={lab.Test_Desc} id={lab.Test_id} location={lab.Landmark} price={lab.Price} btntext="Book Now" /> </div>
                                                </>
                                                : <>
                                                </>}

                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                }

                <div style={{ width: '40vw' }}>
                    <h3 className='py-2'>|| Suggested Labs ||</h3>
                    <div className="container" style={{ marginTop: '5vh', width: '18vw' }}>
                        {labss.map(lab => (
                                <div key={lab.id}>
                                    {imagess.map((img) => (
                                        <div key={img.id}>
                                            {parseInt(lab.test_imageId) === img.id ?
                                                <>
                                                    <div><LabTestCard img={img.path} title={lab.Test_Name} desc={lab.Test_Desc} id={lab.Test_id} location={lab.Landmark} price={lab.Price} btntext="Book Now" /> </div>
                                                </>
                                                : <>
                                                </>}

                                        </div>
                                    ))}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
