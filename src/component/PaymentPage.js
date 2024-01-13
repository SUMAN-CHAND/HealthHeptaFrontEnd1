import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom';

export default function PaymentPage() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;
    const location = useLocation();
    let stateData = location.state
    console.log(stateData)

  return (
    <div>
      <h1>PaymentPage</h1>
    </div>
  )
}
