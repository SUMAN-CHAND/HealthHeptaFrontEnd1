import React from 'react'
import product2 from '../img/modalclinicimg.png'
import { Link } from 'react-router-dom'

export default function ClinicCardForList() {
  return (
    <div>
      <div className="m my-3" style={{ display: 'flex' ,alignItems:'center',justifyContent:'center'}}>
        <img src={product2} alt="" style={{ height: '10vh', width: '10vw' }} />
        <span className='py-1' style={{ display: 'flex',alignItems:'center',justifyContent:'center' }}>
          <p className='m-2'>Alalika Clinic</p>
          <p className='m-2'>location:- ANNADA ENCLAVE, 88, PILKHANA ROAD, RANIBAGAN, BERHAMPORE, MURSHIDABAD, WEST BENGAL</p>
          <Link to='/particular-clinic'> <button className='btn btn-primary'><p className='btn-text'>View Docotr's</p></button></Link>
        </span>
      </div>
    </div>
  )
}
