import React from 'react'
import medicines from '../../img/Medicines.avif';
import topOffers from '../../img/topOffers.jpg';
import { Link } from 'react-router-dom';


export default function OfferDeals() {

    const imageStyle = {
        width: '5vw',
        height: '5vw',
        border: '3px solid #0d6efd',
        borderRadius: '50%'
    }
    return (
        <div className='quick-offers' style={{ display: 'flex', alignItems: 'center' }}>
            <div className='card offer-deals shadow mx-5' style={{ textAlign: 'left', padding: '10px' }}>
                <h5 className='text-info px-2'>Offer Deals</h5>
                <div className='icons' style={{ display: 'flex' }}>
                    <div className="deals m-2 p-2" style={{cursor:'pointer'}}>
                        <Link to='/b2b-home'> <img src={topOffers} alt="img..." style={imageStyle} />
                            <p className='text-primary'>Top Offers </p></Link>
                    </div>
                    <div className="deals m-2 p-2">
                        <Link to='/b2b-home/lotproduct'> <img src={topOffers} alt="img..." style={imageStyle} />
                            <p className='text-primary'> Top Lot Scheme </p></Link>
                    </div>
                    <div className="deals m-2 p-2">
                    <Link to='/b2b-home/margin'> <img src={topOffers} alt="img..." style={imageStyle} />
                        <p className='text-primary'>Top Margin</p></Link>
                    </div>
                    <div className="deals m-2 p-2">
                    <Link to='/b2b-home'> <img src={topOffers} alt="img..." style={imageStyle} />
                        <p className='text-primary'>New Arrivals</p></Link>
                    </div>
                </div>
            </div>
            <div className='card buy-again shadow mx-5' style={{ textAlign: 'left', backgroundColor: 'white', padding: '10px' }}>
                <h5 className='text-info px-2'>Buy Again</h5>
                <div className='icons' style={{ display: 'flex' }}>
                    <div className="deals m-2 p-2">
                        <Link to='/b2b-home'> <img src={topOffers} alt="img..." style={imageStyle} />
                            <p className='text-primary'>Top Offers </p></Link>
                    </div>
                    <div className="deals m-2 p-2">
                        <Link to='/b2b-home/lotproduct'> <img src={topOffers} alt="img..." style={imageStyle} />
                            <p className='text-primary'> Top Lot Scheme </p></Link>
                    </div>
                    <div className="deals m-2 p-2">
                    <Link to='/b2b-home/margin'> <img src={topOffers} alt="img..." style={imageStyle} />
                        <p className='text-primary'>Top Margin</p></Link>
                    </div>
                    <div className="deals m-2 p-2">
                    <Link to='/b2b-home'> <img src={topOffers} alt="img..." style={imageStyle} />
                        <p className='text-primary'>New Arrivals</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
