import React from 'react'
import Banner from './Banner'

export default function AllBanners() {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <Banner/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Banner/>
                    </div>
                    <div className="carousel-item" data-bs-interval="">
                        <Banner/>
                    </div>
                </div>
                <button className="carousel-control-prev" style={{width:'5vw',color:'black'}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{color:'black'}}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" style={{width:'5vw',color:'black'}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{color:'black'}}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
