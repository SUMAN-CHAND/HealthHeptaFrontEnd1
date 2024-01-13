import React from 'react'
import AllLabTestBanner from './AllLabTestBanner'
import AllLabs from './AllLabs'
import AllTest from './AllTest'

export default function LabTestMainPage() {
  return (
    <div>
      <AllLabTestBanner/>
      <AllLabs/>
      <AllTest/>
    </div>
  )
}
