import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddCoupon() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;
    const [values, setValues] = useState({
        length:'',
        discount_percentage:'',
        expiry_date:'',
        is_active:'',
    })
    const [check, setCheck] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        // setRole(event.target.value)
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://${process.env.REACT_APP_HOST}:8081/superadmin/generate-coupon`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Product Added Successfully!!')
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
                <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Add New Coupon||</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        <h5> <span className='text-info'>Healthhepta</span></h5>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="length">Coupon Length : </label><br></br>
                            <input className='m-2 p-1' type="number" style={{ width: '90%' }} placeholder='Enter Coupon Length'
                                name='length' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="discount_percentage"> Coupon Discount Percentage: </label><br></br>
                            <input className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Description'
                                name='discount_percentage' onChange={handleInput} /><br />
                        </div>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="expiry_date ">Expiry Date  : </label>
                            <input
                                className='m-2 p-1'
                                type="date"
                                style={dateStyle}
                                name='expiry_date'
                                onChange={handleInput}
                            />
                            <br />
                        </div>
                        
                        
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="dragornot">is_active : </label>
                            <br />
                            <select
                                className='m-2 p-1'
                                onChange={handleInput} name='is_active'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                <option value="select">Select One</option>
                                <option value="Active">Active</option>
                                <option value="Not Active">Not Active</option>
                            </select><br />
                        </div>

                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>You are sure to add  <span className='text-warning'>Cupon</span> </p>

                            </label>
                        </div>
                        {/* <Link to='/login'> */}
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Add Coupon</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
