import React from 'react'
import { useLocation } from 'react-router-dom';
import axiosClient from './axiosClient';

export default function PaymentPage() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const location = useLocation();
    let stateData = location.state
  return (
    <div>
      <h1>PaymentPage</h1>
    </div>
  )
}
