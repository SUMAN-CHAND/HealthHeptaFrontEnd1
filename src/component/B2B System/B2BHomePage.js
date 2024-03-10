import React, { Suspense, lazy } from 'react'
import AllB2BBanner from './AllB2BBanner'
import OfferDeals from './OfferDeals'

import HashLoader from 'react-spinners/HashLoader';
const AllMadicines = lazy(() => import('./AllMadicines'));
export default function B2BHomePage() {
  return (
    <div>
      <AllB2BBanner />
      <OfferDeals />
      <div className=''><Suspense fallback={<HashLoader color="#36d7b7" />}><AllMadicines /></Suspense></div>
    </div>
  )
}
