import React, { useState,useEffect } from 'react';
import AllMadicineCard from './AllMadicineCard';
import axios from 'axios';

export default function AllMadicines() {

    //main for connecting backend with Session
    axios.defaults.withCredentials = true;

    const [products, setProducts] = useState([])
    const [image, setImages] = useState([])

    useEffect(() => {
        // console.log("Fetching data...");
        axios.get('http://localhost:8081/b2b/product').then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setProducts(res.data[0]);
                setImages(res.data[1]);
            }
        });
    }, []);
    const [newAddedproducts, setNewAddedproducts] = useState([])
    const [newAddedimage, setnewAddedimage] = useState([])

    useEffect(() => {
        // console.log("newAddedimage Fetching data...");
        axios.get('http://localhost:8081/b2b/product/newadded').then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setNewAddedproducts(res.data[0]);
                setnewAddedimage(res.data[1]);
            }
        });
    }, []);
    const [offproducts, setOffproducts] = useState([])
    const [offimage, setoffimage] = useState([])

    useEffect(() => {
        // console.log("newAddedimage Fetching data...");
        axios.get('http://localhost:8081/b2b/product/20%off').then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setOffproducts(res.data[0]);
                setoffimage(res.data[1]);
            }
        });
    }, []);
    const [bestofferProduct, setBestofferProduct] = useState([])
    const [bestofferimage, setbestofferimage] = useState([])

    useEffect(() => {
        // console.log("newAddedimage Fetching data...");
        axios.get('http://localhost:8081/b2b/product/bestoffer').then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setBestofferProduct(res.data[0]);
                setbestofferimage(res.data[1]);
            }
        });
    }, []);
    // console.log(products, image)


    return (
        <div>
            <AllMadicineCard headline='Top Offers :-' products={bestofferProduct} image={bestofferimage} />
            <AllMadicineCard headline='20% Off :-' products={offproducts} image={offimage} />
            <AllMadicineCard headline='New Arrivals :-' products={newAddedproducts} image={newAddedimage} />
            <AllMadicineCard headline='Deodorant and Body Spray :-' products={products} image={image} />
            <AllMadicineCard headline='Health Devices :-' products={products} image={image} />
        </div>
    )
}
