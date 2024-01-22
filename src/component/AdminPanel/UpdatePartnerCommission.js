import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdatePartnerCommission() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;
    const [values, setValues] = useState({
        service_type: '',
        commision_type: '',
        commision: '',

    })

    // const [values, setValues] = useState({
    //     // ...other product data fields
    //     productImageId: null, // Initialize as null
    // });

    // Callback function to set the productImageId when an image is uploaded
const param =useParams();
const commission_id = param.commission_id;
     const [check, setCheck] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://${process.env.REACT_APP_HOST}:8081/superadmin/update-commission/${commission_id}`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Commission Added Successfully!!')
                    navigate('/superadmin', { state: { loggedIn: true } });
                }
                else if (res.data === null) {
                    alert('Error')
                }
                else {
                    alert('Error')
                }
            })
            .catch(err => console.log(err));
    }

    const dateStyle = {
        width: "13.2rem",
        height: "2rem",
        fontSize: "1.1rem",
        width: '90%'
    };


    return (
        <div>
            <div className="container mt-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Update Partner Commission||</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        <h5> <span className='text-info'>Healthhepta</span></h5>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="service_type">Service Type : </label>
                            <br />
                            <select
                                className='m-2 p-1'
                                onChange={handleInput} name='service_type'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                <option value="select">Select One</option>
                                <option value="Medicine Order">Medicine Order</option>
                                <option value="Appoiment Book">Appoiment Book</option>
                                <option value="Lab Book">Lab Book</option>
                                <option value="Clinic Book">Clinic Book</option>
                            </select><br />
                        </div>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="commision_type">Type of Commission: </label>
                            <br />
                            <select
                                className='m-2 p-1'
                                onChange={handleInput} name='commision_type'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                <option value="select">Select One</option>
                                <option value="Fixed">Fixed</option>
                                <option value="Persentage">Persentage</option>
                            </select><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="commision">commision : </label>
                            <input required className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Discount'
                                name='commision' onChange={handleInput} /><br />
                        </div>



                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>You are sure to add  <span className='text-warning'>Commision</span> </p>

                            </label>
                        </div>
                        {/* <Link to='/login'> */}
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Submit</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
