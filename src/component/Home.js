import React, { Suspense, lazy } from 'react'
import AllBanners from './AllBanners'
import B2COffersCard from './B2COffersCard';
import { Helmet } from 'react-helmet';
import HashLoader from 'react-spinners/HashLoader';
const MainMedicinePage = lazy(() => import('./MainMedicinePage'));
const OurService = lazy(() => import('./OurService'));
export default function Home() {
  return (<>
    <Helmet>
      <title>healthhepta.com</title>
      <meta name="description" content="Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
    </Helmet>
    <div>
      <AllBanners />
      <div className='min-h-20'><Suspense fallback={<HashLoader color="#36d7b7" />}><B2COffersCard /></Suspense></div>
      <div className='min-h-30'><Suspense fallback={<HashLoader color="#36d7b7" />}><OurService /></Suspense></div>
      <div className='min-h-50'><Suspense fallback={<HashLoader color="#36d7b7" />}><MainMedicinePage /></Suspense></div>

    </div>
  </>
  )
}
