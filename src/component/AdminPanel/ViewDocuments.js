import React, { useState, useEffect } from 'react'
import {
    useParams, useNavigate
} from "react-router-dom";
import axiosClient from '../axiosClient';
const customStyle = {
    maxWidth: '85vw',
    minWidth: '50vw',
    borderRadius: '5px',
    overflow: 'hidden',
    background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
};
export default function ViewDocuments() {
    const params = useParams();
    const image_id = params.image_id;
    const [images, setImages] = useState([]);
    useEffect(() => {
        axiosClient.get(`/image/${image_id}`)
            .then(res => {
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
                <button style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn' onClick={() => ClosePage()}>X</button>
                <h5>Healthhepta</h5>
                <div>
                    <div>
                        {images.map((img) => (
                            <div key={img.id}>
                                <img
                                    src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
                                    alt={img.name}

                                    style={{ maxWidth: '85vw', border: '5px solid cadetblue' }}
                                />
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
