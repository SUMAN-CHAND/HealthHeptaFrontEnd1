import React from 'react'
import AllBanners from './AllBanners'
import OurService from './OurService'
import MainMedicinePage from './MainMedicinePage'
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

export default function Home() {

  // const locations = useLocation();

  // let stateData = locations.state;
  // console.log(stateData)
  // let location ;
  // if(stateData.location === null){
  //   location  = undefined;
  // }
  return (
    <div>
      {/* <h1>{location.state.loggedIn}</h1> */}
      <AllBanners />
      <OurService />
      <MainMedicinePage />
      
    </div>
  )
}
