import React, { useEffect, useState } from 'react'
import productimg from '../../img/doctor2.webp'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ViewSubAdminProducts() {
    const pStyle = {
        display: 'flex',
        alignItems: 'center',

    }

    const [products, setProducts] = useState([]);
    const param = useParams();
    var user_id = param.user_id;
    // console.log(user_id)
    useEffect(() => {
        console.log('click')
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/subadmin/products/${user_id}`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setProducts(response.data)
                }
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, [])
    // useEffect(() => {
    //     axios.get(`http://${process.env.REACT_APP_HOST}:8081/superadmin/orders/customer/${user_id}`)
    //         .then(res => {
    //             if (res.data) {
    //                 setCustomer(res.data[0]);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })

    // },[])

    // console.log(customer)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/superadmin', { state: { loggedIn: true } });
    }
    const deleteProduct = (product_id) => {
        const response = window.confirm("Are you sure to delete the Product?");
        if (response) {
          axios.delete(`http://${process.env.REACT_APP_HOST}:8081/sub-admin/home/delete/${product_id}`)
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
            <div className="container mt-4 " style={{ minHeight: '50vh' }}>
                <table className="table table-striped">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">MRP</th>
                            <th scope="col">Product Quantity</th>
                            <th scope="col">Manufacturing Date</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Drag/Otc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ verticalAlign: 'middle' }}>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <th scope="row">{product.product_id}</th>
                                <td>img...</td>
                                <td>{product.product_name}</td>
                                <td>{product.description}</td>
                                <td>{product.product_price}</td>
                                <td>{product.product_quantity}</td>
                                <td>{product.manufacturing}</td>
                                <td>{product.expiry}</td>
                                <td>{product.discount} %</td>
                                <td>{product.DrugOrNot} </td>
                                <td> <button className="btn btn-danger m-1" onClick={() => deleteProduct(product.product_id)}  >Delete</button>  <Link to={`updateproduct/${product.product_id}`} > <button style={{ cursor: 'pointer' }} type='button' className="btn btn-warning m-1">Update</button></Link> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button">
                    <button className='btn btn-primary' onClick={handleClick} style={{ width: '20%', cursor: 'pointer' }}>Back</button>
                </div>
            </div>
        </>

    )
}
