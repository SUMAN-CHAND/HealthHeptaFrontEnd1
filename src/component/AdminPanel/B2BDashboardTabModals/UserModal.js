import React, { useEffect, useState } from 'react'

import {
    Link, useNavigate
} from "react-router-dom";
import axiosClient from '../../axiosClient';

const customStyles = {
    maxHeight: '80vh',
    maxWidth: '85vw',
    minWidth: '65vw',
    borderRadius: '5px',
    overflow: 'hidden',
    // background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
    // backgroundColor: 'rgb(41 116 132)'
}


export default function UserModal({ closeTheModal }) {
    const [users, setUser] = useState([]);


    useEffect(() => {
        axiosClient.get(`/superadmin/user`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setUser(response.data)
                }
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

                <div className="" id="list-users" >
              <h2 className='p-2'>|| Users ||</h2>
             
              {users.length !== 0 && (
                <div className="container text-dark" style={renDataStyle}>
                  <table className="table table-striped">
                    <thead className='thead-dark'>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <th scope="row">{user.id}</th>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{user.role}</td>
                          <td> <div className="btn btn-danger">Delete</div> <div className="btn btn-warning">Update</div> </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            </div>
        </>
    )
}
