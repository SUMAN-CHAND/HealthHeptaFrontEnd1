import React from 'react'
import AllMedicineBanner from './AllMedicineBanner'
import AllMedicinesShops from './AllMedicinesShops'
import AllCategoy from './AllCategoy'
import AllPopularProduct from './AllPopularProduct'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function MainMedicinePage() {
    const param = useParams();
    // if (param.selectLocation !== undefined) {
    //     console.log(param.selectLocation)
    // } else{
    //     // console.log(param)
    // }
    
//   const locations = useLocation();

//   let stateData = locations.state;
//   console.log(stateData)
//   let location ;
//   if(stateData.location === null){
//     location  = undefined;
//   }
//   console.log(stateData.location)
    return (
        <div className='main-medicine-page' style={{backgroundColor:'#99d9d9', paddingBottom:'2vh'}}>
        
            {/* <AllMedicineBanner  /> */}
            {/* <AllMedicinesShops location = {location}/>
            <AllCategoy/>
            <AllPopularProduct location = {location}/> */}
            <AllMedicinesShops/>
            <AllCategoy/>
            <AllPopularProduct />
        </div>
    )
}
