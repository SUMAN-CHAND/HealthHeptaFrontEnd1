import React from 'react'
import AllMedicineBanner from './AllMedicineBanner'
import AllMedicinesShops from './AllMedicinesShops'
import AllCategoy from './AllCategoy'
import AllPopularProduct from './AllPopularProduct'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function MainMedicinePage() {
    const param = useParams();
    return (
        <>
            <Helmet>
                <title>healthhepta.com</title>
                <meta name="description" content="Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
            </Helmet>
            <div className='main-medicine-page' style={{ backgroundColor: '#99d9d9', paddingBottom: '2vh' }}>
                <AllMedicinesShops />
                <AllCategoy />
                <AllPopularProduct />
            </div>
        </>
    )
}
