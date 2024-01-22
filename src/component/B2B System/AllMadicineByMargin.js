import React, { useEffect, useState } from 'react'
import AllMadicineCard from './AllMadicineCard'
import AllB2BBanner from './AllB2BBanner'
import OfferDeals from './OfferDeals'
import axios from 'axios'

export default function AllMadicineByMargin() {

    const [products, setProducts] = useState([])
    const [image, setImages] = useState([])


    useEffect(() => {
        console.log("Fetching data...");
        axios.get(  `http://${process.env.REACT_APP_HOST}:8081/b2b/product`).then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setProducts(res.data[0]);
                setImages(res.data[1]);
            }
        });
    }, []);

    const [offproducts, setOffproducts] = useState([])
    const [offimage, setoffimage] = useState([])

    useEffect(() => {
        // console.log("newAddedimage Fetching data...");
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/b2b/product/20%off`).then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setOffproducts(res.data[0]);
                setoffimage(res.data[1]);
            }
        });
    }, []);

    const [off50products, setOff50products] = useState([])
    const [off50image, setoff50image] = useState([])

    useEffect(() => {
        // console.log("newAddedimage Fetching data...");
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/b2b/product/50%off`).then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setOff50products(res.data[0]);
                setoff50image(res.data[1]);
            }
        });
    }, []);
    const [newAddedproducts, setNewAddedproducts] = useState([])
    const [newAddedimage, setnewAddedimage] = useState([])

    useEffect(() => {
        // console.log("newAddedimage Fetching data...");
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/b2b/product/newadded`).then((res) => {
            if (res.data !== null) {
                // console.log(res.data);
                setNewAddedproducts(res.data[0]);
                setnewAddedimage(res.data[1]);
            }
        });
    }, []); 
    
    return (
        <div>
            <AllB2BBanner />
            <OfferDeals />
            <AllMadicineCard headline='50% Off :-' products={off50products} image={off50image} />
            <AllMadicineCard headline='20% off :-' products={offproducts} image={offimage} />
            <AllMadicineCard headline='New Arrivals :-' products={newAddedproducts} image={newAddedimage} />
            <AllMadicineCard headline='Deodorant and Body Spray :-' products={products} image={image} />
            <AllMadicineCard headline='Health Devices :-' products={products} image={image} />
            <AllMadicineCard headline='Top Offers :-' products={products} image={image} />
        </div>
    )
}
