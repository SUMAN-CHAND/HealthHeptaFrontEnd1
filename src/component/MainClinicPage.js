import React from 'react'
import AllClinicBanner from './AllClinicBanner'
import AllClinics from './AllClinics'
import AllDoctors from './AllDoctors'

export default function MainClinicPage() {
  return (
    <div>
      <div className='main-medicine-page'>
            <AllClinicBanner />
            <AllClinics/>
            <AllDoctors/>
        </div>
    </div>
  )
}
