import React, { useState, useEffect } from 'react'
import { useParams,useNavigate
} from "react-router-dom";

import axios from 'axios';
import axiosClient from '../axiosClient';
const customStyle = {
    // maxHeight: '60vh',
    // minHeight: '50vh',
    maxWidth: '85vw',
    minWidth: '50vw',
    borderRadius: '5px',
    overflow: 'hidden',
    background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
    // backgroundColor: 'rgb(41 116 132)'

};

export default function ViewDocuments() {

    const params = useParams();
    console.log(params)
    const image_id = params.image_id;

    const [images, setImages] = useState([]);

    useEffect(() => {
        axiosClient.get(`/image/${image_id}`)
            .then(res => {
                // setSelectLocation(res.data[2])
                setImages(res.data);
            })
    }, []);

    const navigate = useNavigate();
const ClosePage = () => {
    navigate('/superadmin', { state: { loggedIn: true } });
}

    return (
        <>
            <div className="commission container " style={customStyle}>
                <button style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'  onClick={() => ClosePage()}>X</button>
                <h5>Healthhepta</h5>
                <div>
                    <div>
                        {images.map((img) => (
                            <div key={img.id}>
                                <img
                                    src={`/${img.path}`}
                                    alt={img.name}

                                    style={{     maxWidth: '85vw', border: '5px solid cadetblue' }}
                                />
                                {/* <p>{img.name}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <button onClick={() => ClosePage()} className="btn btn-danger m-3">Close</button>
                </div>
            </div>
        </>
    )
}
