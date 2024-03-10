import React from 'react'
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
            <div className='display-flex-d' >
                <div className="container "  >
                    <Carousel responsive={responsive} >
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