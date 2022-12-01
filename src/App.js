import logo from './logo.svg';
import './App.css';
import CompleteCrop from './components/CompleteCrop';
// import Appex from './components/Crop';
// import Avtar from './components/Avtar';
function App() {
  return (
  <>
{/* <Appex/> */}
{/* <Avtar/> */}
<CompleteCrop/>
  </>
  );
}

export default App;





// 2nd attempt of the crop image

// import React, { useState } from "react";
// import FileInput from "./components/FileInput";
// import ImageCropper from "./components/ImageCropper";
// import axios from 'axios'
// function App() {
//   // var toBlob = require("canvas-to-blob");
//   const [image, setImage] = useState("");
//   const [currentPage, setCurrentPage] = useState("choose-img");
//   const [imgAfterCrop, setImgAfterCrop] = useState('');
//   const [Data,SetData] = useState(null)

//   // Invoked when new image file is selected
//   const onImageSelected = (selectedImg) => {
//     setImage(selectedImg);
//     setCurrentPage("crop-img");
//   };

//   // Generating Cropped Image When Done Button Clicked
//   const onCropDone =(imgCroppedArea,filename)=> {
//     const canvas = document.createElement("canvas");
//     canvas.width = imgCroppedArea.width;
//     canvas.height = imgCroppedArea.height;
//     console.log("croooped image", imgCroppedArea)
//     const context = canvas.getContext("2d");

//     let imageObj1 = new Image();

//    console.log("image url daata", imageObj1)
//     imageObj1.src = image;
//     console.log("cropped image", imageObj1)
//     imageObj1.onload = function () {
//       context.drawImage(
//         imageObj1,
//         imgCroppedArea.x,
//         imgCroppedArea.y,
//         imgCroppedArea.width,
//         imgCroppedArea.height,
//         0,
//         0,
//         imgCroppedArea.width,
//         imgCroppedArea.height
//       );

//       const dataURL = canvas.toDataURL("image/jpeg");

//       canvas.toBlob((blob)=>{
//         blob.name = filename
//         console.log(blob)
//         const newImage = new File([blob], blob.name, { type: blob.type });
//         let formData = new FormData();    //formdata object

//         formData.append("user_id", "634123e8832860cfb6788fde");   //append the values with key, value pair
//         formData.append("sellername", "634123e8832860cfb6788fde");   //append the values with key, value pair
//         formData.append("sellerphone", +91999999993);   //append the values with key, value pair
//         formData.append("categories", "bikes");   //append the values with key, value pair
//         formData.append("title", "ajay");   //append the values with key, value pair
//         formData.append("description", "634123e8832860cfb6788fde");   //append the values with key, value pair
//         formData.append("price", 6748964);   //append the values with key, value pair
//         formData.append("longitude", 77.306843);   //append the values with key, value pair
//         formData.append("latitude", 28.663996);   //append the values with key, value pair
//         formData.append("city", "634123e8832860cfb6788fde");   //append the values with key, value pair
//         formData.append("state", "delhi");   //append the values with key, value pair
//         formData.append("sellerType", "user");   //append the values with key, value pair
//         formData.append("images", newImage);   //append the values with key, value pair
    
//         // const ApiDtaa = async () => {
//             // console.log(newImage)
//             const api = "https://fixebuyofficial.in/product/automobile/form/create"
//              axios.post(api, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             }).then((res) => {
//                 console.log(res)
//             }).catch((error) => {
//                 console.log(error)
//             })
//         // }
//     }, 'image/jpeg');
    
//       // canvas.toBlob(blob=>{
//       //   blob.name = filename
//       //   setImgAfterCrop(blob)
//       //   console.log(imgAfterCrop,"ye ni show ho rhi thi bhai")
//       //   console.log(blob)
//       //   setCurrentPage("img-cropped");

//       //   const newImage = new File([imgAfterCrop],imgAfterCrop.name , { type: imgAfterCrop.type });
//       // })
//       // console.log(imgAfterCrop)
//       // const blobImage = toBlob(canvasEle.toDataURL("image/jpeg"));
//       // const blob = dataURL.blob();

// // console.log(blob)
//       // console.log(blob,"blob")
      // setImgAfterCrop(dataURL, "cropped image data found");
      // console.log(dataURL)
      // console.log(dataURL,"dataURL of cropped iMAGE")
      // setCurrentPage("img-cropped");
      // setImgAfterCrop(dataURL)
//       // 
//     };
//   };

//   // Handle Cancel Button Click
//   const onCropCancel = () => {
//     setCurrentPage("choose-img");
//     setImage("");
//   };

//   return (
//     <div className="container">
//       {currentPage === "choose-img" ? (
//         <FileInput setImage={setImage} onImageSelected={onImageSelected} />
//       ) : currentPage === "crop-img" ? (
//         <ImageCropper
//           image={image}
//           onCropDone={onCropDone}
//           onCropCancel={onCropCancel}
//         />
//       ) : (
//         <div>
//           <div>
//             <img src={imgAfterCrop} className="cropped-img" />
//           </div>

//           <button
//             onClick={() => {
//               setCurrentPage("crop-img");
//             }}
//             className="btn"
//           >
//             Crop
//           </button>

//           <button
//             onClick={() => {
//               setCurrentPage("choose-img");
//               setImage("");
//             }}
//             className="btn"
//           >
//             New Image
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import "./App.css";
// // import {Form, Button, Container} from "react-bootstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import {useEffect, useState} from "react";
// // import "react-image-crop/dist/ReactCrop.css";
// import ReactCrop from "react-image-crop";
// import 'react-image-crop/dist/ReactCrop.css';
// function App() {
//   const [srcImg, setSrcImg] = useState(null);
//   const [image, setImage] = useState(null);
//   const [crop, setCrop] = useState({aspect: 16 / 9});
//   const [result, setResult] = useState(null);

//   const handleImage = async (event) => {
//     setSrcImg(URL.createObjectURL(event.target.files[0]));
//     console.log(event.target.files[0]);
//   };

//   useEffect(()=>{
//     console.log(crop,'crop');
//   },[crop])
//   const getCroppedImg = async () => {
//     console.log(image,'ya image mile h aapa n yo data h eska')
//     try {
//       console.log("image")
//       console.log(image)
//       const canvas = document.createElement("canvas");
//       const scaleX = image.naturalWidth / image.width;
//       const scaleY = image.naturalHeight / image.height;
//       canvas.width = crop.width;
//       canvas.height = crop.height;
//       const ctx = canvas.getContext("2d");
//       // ctx.drawImage(img, 0, 0);
// const img =image;    
// console.log(img,"image src folder")

//       ctx.drawImage(
//         image,
//         40,40
//         // crop.x * scaleX,
//         // crop.y * scaleY,
//         // crop.width * scaleX,
//         // crop.height * scaleY,
//         // 0,
//         // 0,
//         // crop.width,
//         // crop.height
//       );

//       const base64Image = canvas.toDataURL("image/jpeg", 1);
//       setResult(base64Image);
//       console.log(base64Image,"base64")
//       console.log(result);
//     } catch (e) {
//       console.log(e)
//       console.log("crop the image");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(result);
//   };
 
//   // const onLoad = (img)=>{
//   //   console.log("on load function")
//   //   console.log(img)
//   //   setImage(img)
//   // }
//   return (
//    <div>
//       <h5 className="header">React Image Crop</h5>
      

//           <div>
//             <input type="file" accept="image/*" onChange={handleImage} />
//           </div>
//           <div>
//             {srcImg && (
//               <div>
//                 {/* <ReactCrop
//                   style={{maxWidth: "50%"}}
//                   src={srcImg}
//                   onImageLoaded={setImage}
//                   crop={crop}
//                   onChange={setCrop}
//                 /> */}
//                 <ReactCrop
//     style={{maxWidth: "50%"}}
//     crop={crop}
//     onChange={setCrop}
// >
//     <img
//        src={srcImg}
//        onLoad={setImage}
//     />
// </ReactCrop>
//                 <button className="cropButton" onClick={(c) =>getCroppedImg(c)}>
//                   crop
//                 </button>
//               </div>
//             )}
//             {result && (
//               <div>
//                 <img src={result} alt="cropped image" />
//               </div>
//             )}
//           </div>
//                 <button variant="primary" type="submit">
//           Submit
//         </button>
      
//         </div>
//   );
// }

// export default App;
