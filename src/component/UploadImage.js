import AWS from "aws-sdk";
import React, { useState } from "react";

function UploadImage() {
  // Create state to store file
  const [file, setFile] = useState(null);

  // Function to upload file to s3
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = "bucket-name";

    // S3 Region
    const REGION = "region";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "youraccesskeyhere",
      secretAccessKey: "yoursecretaccesskeyhere",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log(
          "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
        );
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      // Fille successfully uploaded
      alert("File uploaded successfully.");
    });
  };
  // Function to handle file and store it to file state
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  return (
    <div className="">
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}

export default UploadImage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function UploadImage({ onImageUpload }) {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };
//     // const [image, setImage] = useState(null);
//     const [images, setImages] = useState([]);

//     // const handleImageChange = (e) => {
//     //     setImage(e.target.files[0]);
//     // };

//     // const handleUpload = () => {
//     //     const formData = new FormData();
//     //     formData.append('image', image);

//     //     axios
//     //         .post('http://localhost:8081/upload', formData, {
//     //             headers: {
//     //                 'Content-Type': 'multipart/form-data',
//     //             },
//     //         })
//     //         .then((response) => {
//     //             console.log(response.data);
//     //             loadImages();
//     //         })
//     //         .catch((error) => {
//     //             console.error('Image upload error: ' + error);
//     //         });
//     // };
    
//     const handleUpload = async () => {
//         if (file) {
//             const formData = new FormData();
//             formData.append('image', file);

//             try {
//                 const response = await axios.post('http://localhost:8081/upload', formData);
//                 loadImages();
//                 const imageId = response.data.imageId; // Retrieve the image ID from the response
//                 onImageUpload(imageId); // Pass the image ID to the parent component
//             } catch (error) {
//                 console.error('Error uploading image:', error);
//             }
//         }
//     };
//     const loadImages = () => {
//         axios
//             .get('http://localhost:8081/images')
//             .then((response) => {
//                 setImages(response.data);
//             })
//             .catch((error) => {
//                 console.error('Image retrieval error: ' + error);
//             });
//     };

//     //   useEffect(() => {
//     //     loadImages();
//     //   }, []);

//     return (
//         <div className='image-upload'>
//             {/* <h1>Image Upload</h1> */}
//             <input type="file" onChange={handleFileChange} />
//             <button className='btn btn-warning m-2' onClick={handleUpload}>Upload Image</button>

//             <div>
//                 {images.map((img) => (
//                     <div key={img.id}>
//                         <img
//                             src={`http://localhost:8081/${img.path}`}
//                             alt={img.name}
//                             width="50"
//                         />
//                         <p>{img.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// // export default UploadImage;