import React from 'react'
import MedicineBanner from './MedicineBanner'
import lab from '../img/lab.webp';
export default function AllLabTestBanner() {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <MedicineBanner heading="50% Off in first Test" desc="when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                        distribution of letters, as opposed to " btntext="Book Now" img={lab} />

                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <MedicineBanner heading="50% Off in first Order" desc="when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                        distribution of letters, as opposed to " btntext="Book Now" img={lab} />
                    </div>
                    <div className="carousel-item">
                        <MedicineBanner heading="50% Off in first Order" desc="when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                        distribution of letters, as opposed to " btntext="Book Now" img={lab} />
                    </div>
                </div>
                <button className="carousel-control-prev" style={{width :'5vw'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" style={{width :'5vw'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

    </div>
  )
}
