import React, { useState } from 'react'
import axios from 'axios';
import UploadImage from '../UploadImage';

export default function UploadBanner() {
  // const [file, setFile] = useState()
  // const handeInput = (e) => {
  //   setFile(e.target.files[0]);
  // }
  // const handleUpload = (e) => {
  //   const formdata = new FormData();
  //   formdata.append('image', file);
  //   axiosClient.post(`/upload`, formdata)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }
  const [values, setValues] = useState({
    productImageId: null,
  })
  const handleImageUpload = (imageId) => {
    setValues({ ...values, productImageId: imageId });
  };

  return (
    <div>
      <div className="container">
        <UploadImage onImageUpload={handleImageUpload} />
      </div>
    </div>
  )
}
