import React, { useEffect, useState } from 'react'
import productimg from '../../img/doctor2.webp'
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
export default function ViewSubAdminProfile() {
    const pStyle = {
        display: 'flex',
        alignItems: 'center',

    }
    const [customer, setCustomer] = useState([]);
    const [image, setImage] = useState([]);
    const param = useParams();
    var user_id = param.id;
    // console.log(user_id)
    useEffect(() => {
        axiosClient.get(`/superadmin/view/sub_admin/profile/${user_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data !== null) {
                    setCustomer(res.data[0]);
                    setImage(res.data[1]);
                } else {
                    alert("Error!!");
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // console.log(customer)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/superadmin', { state: { loggedIn: true } });
    }
    return (
        <>
            <div className="container mt-4 " style={{ minHeight: '50vh' }}>
                <div className="product" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='modal-img mx-3 mb-3' style={{ width: '15vw', borderRadius: '25%' }} src={productimg} alt="" />
                    <div className="products  mx-3 mb-3">
                        <h2 className=''>Service Provider Details</h2>
                        <hr />
                        {customer.map(cus => (
                            <div key={cus.id}>
                                {image.map((img) => (
                                    <div key={img.id}>
                                        {parseInt(cus.SubAdminImageId) === img.id ?
                                            <>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Id : </p> <p>{cus.id} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Name : </p> <p>{cus.name} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Phone No : </p> <p>{cus.phone} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Landmark : </p> <p>{cus.Landmark} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider OpeningTime &  CloseingTime: </p> <p>{cus.OpeningTime},{cus.CloseingTime} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Total Order : </p> <p>{cus.OrderCount} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Reg. Id: </p> <p>{cus.Reg_id} </p>
                                                </span>
                                               
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Added By : </p> <p>{cus.addedby && cus.addedby} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Joined : </p> <p>{cus.createdAt} </p>
                                                </span>
                                            
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Description : </p> <p>{cus.description} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Owner Name :</p> <p>{cus.owner_name} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Owner Phone Number: </p> <p>{cus.owner_phonenumber} </p>
                                                </span>
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Service Provider Role </p> <p>{cus.role} </p>
                                                </span>
                                            
                                                <span style={pStyle}>
                                                    <p className='mx-2'> Total Due Payment </p> <p>₹{cus.total_due_payment} </p>
                                                </span> 
                                            
                                               
                        
                                                <span style={pStyle}>
                                                    <p className='mx-2'>Customer Phone No : </p> <p>{cus.phone} </p>
                                                </span>
                                                {/* <span style={pStyle}>
                                                    <p className='mx-2'>Customer Address : </p> <p>{cus.name}, {customer.Village},{customer.P_O},{customer.City},{customer.district},{customer.State},{customer.Pin} </p>
                                                </span> */}
                                            </>
                                            : <></>}
                                    </div>
                                ))}
                            </div>
                        ))}


                    </div>
                </div>
                <div className="button">
                    <button className='btn btn-primary' onClick={handleClick} style={{ width: '20%', cursor: 'pointer' }}>Back</button>
                </div>
            </div>
        </>

    )
}
