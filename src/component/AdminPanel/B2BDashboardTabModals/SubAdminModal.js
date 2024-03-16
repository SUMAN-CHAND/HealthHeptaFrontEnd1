import React, { useEffect, useState } from 'react'

import {
    Link, useNavigate
} from "react-router-dom";
import axiosClient from '../../axiosClient';

const customStyles = {
    maxHeight: '80vh',
    maxWidth: '85vw',
    minWidth: '85vw',
    borderRadius: '5px',
    overflow: 'hidden',
    // background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
    // backgroundColor: 'rgb(41 116 132)'
}


export default function SubAdminModal({ closeTheModal }) {
    const [subAdmins, setSubAdmin] = useState([]);


    useEffect(() => {
        axiosClient.get(`/superadmin/service-provider`)
            .then(response => {
                // Handle response
                setSubAdmin(response.data)
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, []);

    const updateSubAdminStatus = (subAdminId) => {
        const response = window.confirm("Are you sure to give the Permission?");
        if (response) {
          axiosClient.post(`/superadmin/subadmin/accept/${subAdminId}`).then(response => {
            if (response.data) {
              alert('Permission Garented');
            }
          }).catch(err => {
            console.log(err)
          })
        } else {
          alert('Permission Denied')
        }
      }

    const renDataStyle = {
        backgroundColor: 'rgb(237 237 237)',
        display: 'flex',
        paddingTop: '1vh',
        flexDirection: 'column',
        overflowX: 'auto',
        overflowY: 'auto',
        height: '69vh'
    }

    
    return (
        <>
            <div style={customStyles}>
                <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-1 btn btn-dark close-btn'>X</button>

                <div className="" id="serviceprovider" >
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Service Provider ||</h2> <Link to='addnew/service-provider'><button className='btn btn-primary mx-3 my-2' >Add New Service Provider</button></Link></span>
                    <div className="container text-dark" style={renDataStyle}>
                        {/* <div className="list-group shadow" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                            <Link to="#service-provider" className="list-group-item list-group-item-action active  list-group-item-info" id="list-summary-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">New Service Provider </Link>
                            <Link to="#service-provider" className="list-group-item list-group-item-action  list-group-item-info" id="list-payment-list" data-bs-toggle="list" role="tab" aria-controls="list-users">All Service Provider</Link>
                        </div>
                        <div className="list-group shadow m-3" style={{ display: 'flex', flexDirection: 'row' }} id="list-tab" role="tablist">
                            <Link to="#medicineshop" className="list-group-item list-group-item-action active  list-group-item-info" id="list-medicineshop-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Medicine Shop</Link>
                            <Link to="#doctors" className="list-group-item list-group-item-action   list-group-item-info" id="list-doctors-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Doctors</Link>
                            <Link to="#clinics" className="list-group-item list-group-item-action   list-group-item-info" id="list-clinics-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Clinics</Link>
                            <Link to="#labs" className="list-group-item list-group-item-action   list-group-item-info" id="list-labs-list" data-bs-toggle="list" role="tab" aria-controls="list-summary">Labs</Link>
                        </div> */}
                        <div id='medicineshop'>
                            <table className="table table-striped">
                                <thead className='thead-dark'>
                                    <tr>
                                        <th scope="col"> Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Permission</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subAdmins.map((subadmin, index) => (
                                        <tr key={index}>
                                            <th scope="row">{subadmin.id}</th>
                                            <td>{subadmin.name}</td>
                                            <td>{subadmin.phone}</td>
                                            <td>{subadmin.role}</td>
                                            <td onClick={() => updateSubAdminStatus(subadmin.id)} style={{ cursor: 'pointer', color: 'blue' }} >{subadmin.permission}</td>
                                            <td> <button className="btn btn-info m-1">View Licence</button>
                                                <Link to={`/superadmin/subadmin/profile/${subadmin.id}`}> <div className="btn btn-info m-1">View Profile</div></Link>
                                                <Link to={`/superadmin/subadmin/products/${subadmin.id}`}> <div className="btn btn-info m-1">View Products</div></Link>
                                                <Link to={`/superadmin/subadmin/orders/${subadmin.id}`}> <div className="btn btn-info m-1">View Orders</div></Link>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
