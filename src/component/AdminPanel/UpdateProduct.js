import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosClient from '../axiosClient';
export default function UpdateProduct() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const param = useParams();
    const [values, setValues] = useState({
        product_name: '',
        product_price: '',
        product_quantity: '',
        category: '',
        discount: '',
        description: '',
        manufacturing: '',
        expiry: '',
        dragornot: '',
        product_id: param.product_id

    })
    const [check, setCheck] = useState(false);
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.patch(`/superadmin/updateproduct/:product_id`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Product Added Successfully!!')
                    navigate('/superadmin', { state: { loggedIn: true } });
                }
                else if (res.data === null) {
                    console.log(res.data);
                    alert('Error')
                }
                else {
                    console.log(res.data);
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
                <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Update Product||</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        <h5> <span className='text-info'>Healthhepta</span></h5>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_name">Product Name : </label><br></br>
                            <input className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Name'
                                name='product_name' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_dec">Product Description : </label><br></br>
                            <input className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Description'
                                name='description' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_price">Product Price : </label>
                            <input className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Price'
                                name='product_price' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_quantity">Product Quantity : </label>
                            <input className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Quantity'
                                name='product_quantity' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_category">Product Category : </label>
                            <input className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Category'
                                name='category' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_manufacturing_date ">Manufacturing Date  : </label>
                            <input
                                className='m-2 p-1'
                                type="date"
                                style={dateStyle}
                                name='manufacturing'
                                onChange={handleInput}
                            />
                            <br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_manufacturing_date ">Expiry Date  : </label>
                            <input
                                className='m-2 p-1'
                                type="date"
                                style={dateStyle}
                                name='expiry'
                                onChange={handleInput}
                            />
                            <br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="discount">Discount : </label>
                            <input className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Discount'
                                name='discount' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="dragornot">Drag/Otc : </label>
                            <br />
                            <select
                                className='m-2 p-1'
                                onChange={handleInput} name='dragornot'
                                style={{ width: '90%', cursor: 'pointer' }}>
                                <option value="select">Select One</option>
                                <option value="drag">Drag</option>
                                <option value="otc">Otc Product</option>
                            </select><br />
                        </div>

                        <div className="form-check ">
                            <input className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>You are sure to add  <span className='text-warning'>product</span> </p>

                            </label>
                        </div>
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
