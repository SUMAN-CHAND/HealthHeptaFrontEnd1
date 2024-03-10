import React from 'react'
import { Link } from 'react-router-dom'
export default function SuccfullyOrderplaceModal({closeTheModal,totalActusalPrice}) {
    return (
        <div>
            <div className="container " style={{ height: '75vh', width: '75vw', border: '2px solid black', borderRadius: '5px' }}>
                <Link to='/' onClick={closeTheModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="5vh" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" style={{ marginLeft: '68vw', marginTop: '5vh' }}>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></Link>
                <div className='container p-2 ' style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ color: 'black' }}> || Order</h1><h1 style={{ color: 'rgb(34 220 220)' }}> &nbsp; Successfully Placed</h1><h1>||</h1>
                </div>
                <div className='container p-5 ' style={{textAlign:'center'}} >
                    <h4 className='m-3'>Cash On Delivary at Home</h4>
                    <h5 className='m-3'>with in 25th March</h5>
                    <h5 className='m-3'>You have to pay:- ₹{totalActusalPrice}</h5>
                    <div className="button">
                    <Link to='/' onClick={closeTheModal}> 
                    <button type="button" className="btn btn-success ">Close</button></Link>
                </div>
                </div>
            </div>
        </div>
    )
}
