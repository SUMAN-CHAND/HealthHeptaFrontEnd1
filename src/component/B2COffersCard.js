import React from 'react'
import topOffers from '../img/topOffers.jpg';
import medicines from '../img/Medicines.avif';
import lab from '../img/lab.webp';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import B2CParticularOfferCard from './B2CParticularOfferCard';
import { Helmet } from 'react-helmet';



export default function B2COffersCard() {
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

    const firstCardOffer = 10;

    return (
        <>
            <Helmet>
                <title>healthhepta.com</title>
                <meta name="description" content=" Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
            </Helmet>
            <div className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container "  >
                    <Carousel responsive={responsive} style={{ height: '25vh' }}>
                        <div><Link to={`/medicine/offer/${firstCardOffer}/%off`} style={{ textDecoration: 'none' }}> <B2CParticularOfferCard /></Link></div>
                        <div><Link to={`/medicine/offer/${firstCardOffer}/%off`} style={{ textDecoration: 'none' }}> <B2CParticularOfferCard /></Link></div>
                        <div><Link to={`/medicine/offer/${firstCardOffer}/%off`} style={{ textDecoration: 'none' }}> <B2CParticularOfferCard /></Link></div>
                        <div><Link to={`/medicine/offer/${firstCardOffer}/%off`} style={{ textDecoration: 'none' }}> <B2CParticularOfferCard /></Link></div>
                        <div><Link to={`/medicine/offer/${firstCardOffer}/%off`} style={{ textDecoration: 'none' }}> <B2CParticularOfferCard /></Link></div>
                        <div><Link to={`/medicine/offer/${firstCardOffer}/%off`} style={{ textDecoration: 'none' }}> <B2CParticularOfferCard /></Link></div>
                    </Carousel>
                </div>

            </div>
        </>
    )
}

// <div className='m-1 p-1'>
//                     <div className="card" style={b2cOfferCard}  >
//                         <img src={lab} className="card-img-top" alt="..." style={imageStyle} />
//                         <div className="card-body">
//                             <h6 className="card-title font-bold">Lab Test</h6>
//                             <p className="card-text " style={{ color: '#f47779' }}>UPTO 20% OFF</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='m-1 p-1'>
//                     <div className="card" style={b2cOfferCard} >
//                         <img src={medicines} className="card-img-top" alt="..." style={imageStyle} />
//                         <div className="card-body">
//                             <h6 className="card-title font-bold">Medicine</h6>
//                             <p className="card-text " style={{ color: '#f47779' }}>UPTO 50% OFF</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='m-1 p-1'>
//                     <div className="card" style={b2cOfferCard} >
//                         <img src={medicines} className="card-img-top" alt="..." style={imageStyle} />
//                         <div className="card-body">
//                             <h6 className="card-title font-bold">Medicine</h6>
//                             <p className="card-text " style={{ color: '#f47779' }}>UPTO 50% OFF</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='m-1 p-1'>
//                     <div className="card " style={b2cOfferCard} >
//                         <img src={medicines} className="card-img-top" alt="..." style={imageStyle} />
//                         <div className="card-body">
//                             <h6 className="card-title font-bold">Medicine</h6>
//                             <p className="card-text " style={{ color: '#f47779' }}>UPTO 50% OFF</p>
//                         </div>
//                     </div>
//                 </div>

