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


export default function ProductListModal({ closeTheModal }) {
    const [products, setProducts] = useState([]);
    const [ind_product_Images, setInd_product_Images] = useState([]);


    useEffect(() => {
        axiosClient.get(`/superadmin/product`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setProducts(response.data[0]);
                    setInd_product_Images(response.data[1]);
                    // loadImages();
                }
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            })
    }, [])
    const [medicineType, setMedicineType] = useState({
        type: 'select'
    })


    const handleMedicineType = (event) => {
        setMedicineType(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
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

    const deleteProduct = (product_id) => {
        const response = window.confirm("Are you sure to delete the Product?");
        if (response) {
            axiosClient.delete(`/superadmin/delete/${product_id}`)
                .then(response => {
                    if (response.data === 'success') {
                        alert('Product Delete Successfully');
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            alert('No Product Delete')
        }
    }
    return (
        <>
            <div style={customStyles}>
                <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-1 btn btn-dark close-btn'>X</button>

                <div className="" id="list-products">
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}><h2 className='p-2 mx-3'>|| Products ||</h2> <Link to='addproduct'><button className='btn btn-primary mx-3 my-2' >Add New</button></Link></span>
                    <div className="container text-dark " style={renDataStyle}>
                        <div className=' p-1' style={{ textAlign: 'initial', fontWeight: '700' }} >
                            <p style={{ marginLeft: '10px' }}>Select Drug or Otc :</p>
                            <select
                                onChange={handleMedicineType} name='type'
                                style={{ width: '25%', padding: '4px', marginLeft: '10px', cursor: 'pointer' }}>
                                <option defaultValue="select">Select One</option>
                                <option value="drug">Drug</option>
                                <option value="otc">otc</option>
                            </select>
                        </div>
                        {products &&
                            <table className="table table-striped" style={{ height: '70vh' }}>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th scope="col">Count</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">MRP</th>
                                        <th scope="col">Whose Product </th>
                                        <th scope="col">Product Quantity</th>
                                        <th scope="col">Manufacturing Date</th>
                                        <th scope="col">Expiry Date</th>
                                        <th scope="col">Discount</th>
                                        <th scope="col">Drag/Otc</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody style={{ verticalAlign: 'middle', overflowY: 'auto' }}>
                                    {medicineType.type[0] === 'select' ? <>
                                        {products.map((product, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <th scope="row">{product.product_id}</th>
                                                <td>{ind_product_Images.map((img) => (
                                                    <div key={img.id}>
                                                        {parseInt(product.productImageId) === img.id ?
                                                            <>
                                                                <img
                                                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                                                    alt={img.name}
                                                                    width="50"
                                                                />
                                                            </>
                                                            : <></>}
                                                    </div>
                                                ))}
                                                </td>
                                                <td>{product.product_name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.productOf}</td>
                                                <td>{product.product_quantity}</td>
                                                <td>{product.manufacturing.slice(0, 10)}</td>
                                                <td>{product.expiry.slice(0, 10)}</td>
                                                <td>{product.discount} %</td>
                                                <td>{product.DrugOrNot} </td>
                                                <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} onClick={closeTheModal} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg></div></Link>
                                                    <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg></div>
                                                </div></td>
                                            </tr>
                                        ))}
                                    </> : <>

                                    </>
                                    }
                                    {medicineType.type === 'select' ? <>
                                        {products.map((product, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <th scope="row">{product.product_id}</th>
                                                <td>{ind_product_Images.map((img) => (
                                                    <div key={img.id}>
                                                        {parseInt(product.productImageId) === img.id ?
                                                            <>
                                                                <img
                                                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                                                    alt={img.name}
                                                                    width="50"
                                                                />
                                                            </>
                                                            : <></>}
                                                    </div>
                                                ))}
                                                </td>
                                                <td>{product.product_name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.productOf}</td>
                                                <td>{product.product_quantity}</td>
                                                <td>{product.manufacturing.slice(0, 10)}</td>
                                                <td>{product.expiry.slice(0, 10)}</td>
                                                <td>{product.discount} %</td>
                                                <td>{product.DrugOrNot} </td>
                                                <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} onClick={closeTheModal}> <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg></div></Link>
                                                    <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg></div>
                                                </div></td>
                                            </tr>
                                        ))}
                                    </> : <>

                                    </>
                                    }
                                    {medicineType.type[0] === 'drug' ? <>
                                        {products.filter(productf => productf.DrugOrNot === 'drug').map((product, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <th scope="row">{product.product_id}</th>
                                                <td>{ind_product_Images.map((img) => (
                                                    <div key={img.id}>
                                                        {parseInt(product.productImageId) === img.id ?
                                                            <>
                                                                <img
                                                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                                                    alt={img.name}
                                                                    width="50"
                                                                />
                                                            </>
                                                            : <></>}
                                                    </div>
                                                ))}
                                                </td>
                                                <td>{product.product_name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.productOf}</td>
                                                <td>{product.product_quantity}</td>
                                                <td>{product.manufacturing.slice(0, 10)}</td>
                                                <td>{product.expiry.slice(0, 10)}</td>
                                                <td>{product.discount} %</td>
                                                <td>{product.DrugOrNot} </td>
                                                <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} onClick={closeTheModal} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg></div></Link>
                                                    <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg></div>
                                                </div></td>
                                            </tr>
                                        ))}
                                    </> : <>

                                    </>
                                    }
                                    {medicineType.type[0] === 'otc' ? <>
                                        {products.filter(productf => productf.DrugOrNot === 'otc').map((product, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <th scope="row">{product.product_id}</th>
                                                <td>{ind_product_Images.map((img) => (
                                                    <div key={img.id}>
                                                        {parseInt(product.productImageId) === img.id ?
                                                            <>
                                                                <img
                                                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                                                    alt={img.name}
                                                                    width="50"
                                                                />
                                                            </>
                                                            : <></>}
                                                    </div>
                                                ))}
                                                </td>
                                                <td>{product.product_name}</td>
                                                <td>{product.description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.productOf}</td>
                                                <td>{product.product_quantity}</td>
                                                <td>{product.manufacturing.slice(0, 10)}</td>
                                                <td>{product.expiry.slice(0, 10)}</td>
                                                <td>{product.discount} %</td>
                                                <td>{product.DrugOrNot} </td>
                                                <td > <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <Link to={`updateproduct/${product.product_id}`} onClick={closeTheModal} > <div style={{ cursor: 'pointer' }} type='' className=" m-1"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg></div></Link>
                                                    <div className=" m-1 " onClick={() => deleteProduct(product.product_id)} style={{ color: 'red' }} ><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg></div>
                                                </div></td>
                                            </tr>
                                        ))}
                                    </> : <>

                                    </>
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
