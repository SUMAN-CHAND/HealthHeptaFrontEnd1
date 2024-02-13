import React from 'react'
import AllBanners from './AllBanners'
import OurService from './OurService'
import MainMedicinePage from './MainMedicinePage'
import B2COffersCard from './B2COffersCard';
import { Helmet } from 'react-helmet';
// import { useLocation } from 'react-router-dom';

export default function Home() {

  // const locations = useLocation();

  // let stateData = locations.state;
  // console.log(stateData)
  // let location ;
  // if(stateData.location === null){
  //   location  = undefined;
  // }
  return (<>
    <Helmet>
      <title>healthhepta.com</title>
      <meta name="description" content=" Affordable healthcare services for you.Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours." />
    </Helmet>
    <div>
      {/* <h1>{location.state.loggedIn}</h1> */}
      <AllBanners />
      <B2COffersCard />
      <OurService />
      <MainMedicinePage />

    </div>
  </>
  )
}
