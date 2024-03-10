import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import axiosClient from './axiosClient';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function AllBanners() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        loadImages();
    }, [])
    const loadImages = () => {
        axiosClient
            .get('/images/banner')
            .then((response) => {
                setImages(response.data);
            })
            .catch((error) => {
                console.error('Image retrieval error: ' + error);
            });
    };
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <Banner />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Banner />
                    </div>
                    <div className="carousel-item" data-bs-interval="">
                        <Banner />
                    </div>
                </div>
                <button className="carousel-control-prev" style={{ width: '5vw', color: 'black' }} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span> */}
                    <MdKeyboardArrowLeft style={{height:'4vh',width:'4vw'}} />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" style={{ width: '5vw', color: 'black' }} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span> */}
                    <MdKeyboardArrowRight style={{height:'4vh',width:'4vw'}} />

                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
