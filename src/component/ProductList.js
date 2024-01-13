import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

export default function ProductList() {
    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

    const [products, setProducts] = useState([])


    useEffect(() => {

        axios.get('http://localhost:8081/product').then((res) => {
            setProducts(res.data);
        })
    }, [])

    return (
        <div>
            <div className="body" style={{ overflow: 'hidden' }}>
                <div className="row">
                    <div className="col-2">
                        <div className="container my-5" style={{}}>
                            <div className="dropdown p-2">
                                <span className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    Baby Product
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Bath Product</a></li>
                                    <li><a className="dropdown-item" href="/#">Food Product</a></li>
                                </ul>
                            </div>
                            <div className="dropdown p-2">
                                <span className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    Skin Product
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="!#">Bath Product</a></li>
                                    <li><a className="dropdown-item" href="!#">Food Product</a></li>
                                </ul>
                            </div>
                            <div className="dropdown p-2">
                                <span className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    Family Product
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Bath Product</a></li>
                                    <li><a className="dropdown-item" href="/#">Food Product</a></li>
                                </ul>
                            </div>
                            <div className="dropdown p-2">
                                <span className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    Mother Product
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Bath Product</a></li>
                                    <li><a className="dropdown-item" href="/#">Food Product</a></li>
                                </ul>
                            </div>
                            <div className="dropdown p-2">
                                <span className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                                    Woman Product
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/#">Bath Product</a></li>
                                    <li><a className="dropdown-item" href="/#">Food Product</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-10" >
                        <div className="container my-3" style={{ display: 'flex' }}>
                            {products.filter(product => product.category === 'medicine').map(fproduct => (
                                <div key={fproduct.product_id}>
                                    <ProductCard name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} />
                                </div>
                            ))}
                        </div>
                        <div className="container my-3" style={{ display: 'flex' }}>
                            {products.filter(product => product.category === 'equipment').map(fproduct => (
                                <div key={fproduct.product_id}>
                                    <ProductCard name={fproduct.product_name} price={fproduct.product_price} product_id={fproduct.product_id} discount={fproduct.discount} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
