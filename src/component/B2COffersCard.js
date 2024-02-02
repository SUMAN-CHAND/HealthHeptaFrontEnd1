import React from 'react'
import topOffers from '../img/topOffers.jpg';
import medicines from '../img/Medicines.avif';
import lab from '../img/lab.webp';
import { Link } from 'react-router-dom';


export default function B2COffersCard() {

    const imageStyle = {
        borderBottom:'1px solid black',
        height: '80px',
        width: '100px'
    }
    const b2cOfferCard = {
        width:'8vw',
        border:'0'
    }
    return (
        <div className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div >
                <div style={{display:'flex'}}>
                    <div className='m-1 p-1'>
                        <div className="card" style={b2cOfferCard} >
                            <img src={medicines} className="card-img-top" alt="..." style={imageStyle}/>
                                <div className="card-body">
                                    <h6 className="card-title font-bold">Medicine</h6>
                                    <p className="card-text " style={{color:'#f47779'}}>UPTO 50% OFF</p>
                                </div>
                        </div>
                    </div>
                    <div className='m-1 p-1'>
                        <div className="card" style={b2cOfferCard}  >
                            <img src={lab} className="card-img-top" alt="..." style={imageStyle}/>
                                <div className="card-body">
                                    <h6 className="card-title font-bold">Lab Test</h6>
                                    <p className="card-text " style={{color:'#f47779'}}>UPTO 20% OFF</p>
                                </div>
                        </div>
                    </div>
                    <div className='m-1 p-1'>
                        <div className="card" style={b2cOfferCard} >
                            <img src={medicines} className="card-img-top" alt="..." style={imageStyle}/>
                                <div className="card-body">
                                    <h6 className="card-title font-bold">Medicine</h6>
                                    <p className="card-text " style={{color:'#f47779'}}>UPTO 50% OFF</p>
                                </div>
                        </div>
                    </div>
                    <div className='m-1 p-1'>
                        <div className="card" style={b2cOfferCard} >
                            <img src={medicines} className="card-img-top" alt="..." style={imageStyle}/>
                                <div className="card-body">
                                    <h6 className="card-title font-bold">Medicine</h6>
                                    <p className="card-text " style={{color:'#f47779'}}>UPTO 50% OFF</p>
                                </div>
                        </div>
                    </div>
                    <div className='m-1 p-1'>
                        <div className="card " style={b2cOfferCard} >
                            <img src={medicines} className="card-img-top" alt="..." style={imageStyle}/>
                                <div className="card-body">
                                    <h6 className="card-title font-bold">Medicine</h6>
                                    <p className="card-text " style={{color:'#f47779'}}>UPTO 50% OFF</p>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
