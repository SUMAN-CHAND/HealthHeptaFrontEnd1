import React from 'react'
import AllServices from './AllServices';
import AllDoctors from './AllDoctors';
import AllSpecialitiesDoctors from './AllSpecialitiesDoctors';
import AllLabs from './AllLabs';
import AllTest from './AllTest';
import { Helmet } from 'react-helmet';

export default function OurService() {
    return (
        <>
            <Helmet>
                <title>healthhepta.com</title>
                <meta name="description" content="Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
            </Helmet>
            <div>
                <div className="service" style={{ height: '100%', width: '100%', backgroundColor: '#99d9d9', paddingBottom: '2vh', paddingTop: '2vh' }}>
                    <AllServices />
                    <AllSpecialitiesDoctors />
                    <AllDoctors />
                    <AllLabs />
                    <AllTest />
                </div>
            </div>
        </>
    )
}
