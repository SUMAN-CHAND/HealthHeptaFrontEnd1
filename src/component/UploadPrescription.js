import React, { useEffect, useState } from 'react'
import axiosClient from './axiosClient';
import { useNavigate } from 'react-router-dom';

export default function UploadPrescription({ onImageUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  // const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  // const handleImageChange = (e) => {
  //     setImage(e.target.files[0]);
  // };

  // const handleUpload = () => {
  //     const formData = new FormData();
  //     formData.append('image', image);

  //     axios
  //         .post('/upload', formData, {
  //             headers: {
  //                 'Content-Type': 'multipart/form-data',
  //             },
  //         })
  //         .then((response) => {
  //             console.log(response.data);
  //             loadImages();
  //         })
  //         .catch((error) => {
  //             console.error('Image upload error: ' + error);
  //         });
  // };
const navigate = useNavigate();
  const handleUpload = async () => {
    if (file.size > 100000) {
      alert("File size more then 1Mb")
    } else {
      if (file) {
        const formData = new FormData();
        formData.append('image', file);

        try {
          const response = await axiosClient.post(`/upload/prescription`, formData);
          // loadImages();
          const imageId = response.data.imageId; // Retrieve the image ID from the response
          onImageUpload(imageId); // Pass the image ID to the parent component
          alert("Image Uplodad Succfully");
        //   navigate('/superadmin', { state: { loggedIn: true } });
          
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    }
  };
  useEffect(() => {
    loadImages();
  },[])
  const loadImages = () => {
    axiosClient
      .get('/images/prescription')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Image retrieval error: ' + error);
      });

  };
  

  return (
    <div className='image-upload'>
    {/* <h1>Image Upload</h1> */}
    <input type="file" onChange={handleFileChange} />
    <button className='btn btn-warning m-2' onClick={handleUpload}>Upload Image</button>

    {/* <div style={{marginTop:'10vh',display:'flex'}}>
      {images.map((img) => (
        <div key={img.id} className='px-2 mx-2'>
          <img
            src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`}
            alt={img.name}
            width="50"
          />
          <p>{img.name}</p>
        </div>
      ))}
    </div> */}
  </div>
  )
}
