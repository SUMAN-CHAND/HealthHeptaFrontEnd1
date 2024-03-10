import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UploadImage from '../UploadImage';
import axiosClient from '../axiosClient';
export default function AddProductWhichIsNotPresent() {
    //main for connecting backend with Session
    axiosClient.defaults.withCredentials = true;
    const [values, setValues] = useState({
        product_name: '',
        category: '',
        description: '',
        manufacturing_Company_Name: '',
        moleculesName:''
    })

    const [check, setCheck] = useState(false);
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosClient.post(`/b2b/emp/quary/product`, values)
            .then(res => {
                if (res.data === 'success') {
                    alert('Quary Product Added Successfully!!')
                    navigate('/b2b/emp/home', { state: { loggedIn: res.data[1] } });
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
                <h2 className='p-2' style={{ backgroundColor: 'aqua' }}>||Add New Product||</h2>
                <div className='bg-white m-3 pt-3 pl-2 rounded w-30 shadow' style={{ minWidth: '40vw', height: '110%' }}>
                    <form action='submit' onSubmit={handleSubmit} style={{ padding: '1vw' }}>
                        <h5> <span className='text-info'>Healthhepta</span></h5>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_name">Product Name : </label><br></br>
                            <input required className='m-2 p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Name'
                                name='product_name' onChange={handleInput} /><br />
                        </div>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_dec">Product Description <span style={{ fontSize: '9px', color: 'red' }}>(Product Quantity?)</span> : </label><br></br>
                            <input required className='m-2 p-1' type="text-area" style={{ width: '90%' }} placeholder='Enter Product Description'
                                name='description' onChange={handleInput} /><br />
                        </div>


                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="product_category">Product Category : </label>
                            <input required className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Category'
                                name='category' onChange={handleInput} /><br />
                        </div>

                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="manufacturing_Company_Name">Manufacturing Company Name : </label>
                            <input required className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product Manufacturing Company Name'
                                name='manufacturing_Company_Name' onChange={handleInput} /><br />
                        </div>


                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <label className='p-1' htmlFor="manufacturing_Company_Name">MoleculesName : </label>
                            <input required className='m-2  p-1' type="text" style={{ width: '90%' }} placeholder='Enter Product molecules Name'
                                name='moleculesName' onChange={handleInput} /><br />
                        </div>




                        <div className="form-check ">
                            <input required className="form-check-input" type="checkbox" value="check" id="flexCheckChecked" style={{ marginLeft: '1vw' }} onChange={() => { setCheck(true) }} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                <p>You are sure to add  <span className='text-warning'>product</span> </p>

                            </label>
                        </div>
                        <button type='submit' className='btn  btn-default border p-2 mb-3 btn-info' style={{ width: '90%', color: 'white', cursor: 'pointer' }}>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
