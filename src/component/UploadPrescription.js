import React, { useState } from 'react'
import UploadImage from './UploadImage'

export default function UploadPrescription({ closeTheModal }) {

    const [values, setValues] = useState({
        productImageId: null,
    })

    const handleImageUpload = (imageId) => {
        setValues({ ...values, productImageId: imageId });
    };

    return (
        <div>
            <div className="serch-by-prescription container" style={{ height: '25vh', backgroundColor: '#fff', borderRadius: '5%' }}>
                <button onClick={closeTheModal} style={{ marginLeft: '90%' }} className='btn btn-default btn-danger'>X</button>
                <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                    <label className='p-1' htmlFor="product_category">Add Prescription Image </label>
                    {/* <input className='m-2  p-1' type="file" style={{ width: '90%' }} placeholder='Enter Product image'
                                name='img' onChange={handleInput} /><br /> */}
                    <UploadImage onImageUpload={handleImageUpload} />
                </div>
            </div>

        </div>
    )
}


