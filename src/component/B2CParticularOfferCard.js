import React from 'react'
import medicines from '../img/Medicines.avif';
function B2CParticularOfferCard() {
    const imageStyle = {
        borderBottom: '1px solid black',
        height: '80px',
        width: '100px'
    }
    const b2cOfferCard = {
        border: '0'
    }
    return (
        <div>
            <div>
                <div className='m-1 p-1'>
                    <div className="card" style={b2cOfferCard} >
                        <img src={medicines} className="card-img-top" alt="..." style={imageStyle} />
                        <div className="card-body">
                            <h6 className="card-title font-bold">Medicine</h6>
                            <p className="card-text " style={{ color: '#f47779' }}>UPTO 50% OFF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default B2CParticularOfferCard
