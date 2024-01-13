import React, { useState } from 'react'
import axios from 'axios';

export default function UploadBanner() {
    const [file,setFile] = useState()
    const handeInput =(e)=>{
        setFile(e.target.files[0]);
    }
    const handleUpload =(e)=>{
        const formdata = new FormData();
        formdata.append('image',file);
        axios.post('http://localhost:8081/upload',formdata)
        .then(res =>console.log(res))
        .catch(err => console.log(err))
    }

  return (
    <div>
     <div className="container">
        <input type="file" onChange={handeInput}/>
        <button onClick={handleUpload}>Upload</button>
     </div>
    </div>
  )
}
