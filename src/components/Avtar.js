// import React,{useState,useEffect} from 'react'
// import Avatar from 'react-avatar-edit'
// const Avtar = () =>{

//     const[src,setSrc]= useState(null)
//     const [preview,setPreview] = useState(null)
     
//     const onClose =() =>{
//         setPreview(null)
//     }
//    const onCrop = view =>{
//         setPreview(view)
//     }
//     useEffect(()=>{
// console.log(preview)
//     },[preview])
// return(
//     <div>
// <Avatar
// width={400}
// height={300}
// onCrop={onCrop}
// onClose={onClose}
// src={src}
// />
// {preview && <img src={preview}/>}
//     </div>
// )
// }

// export default Avtar


// import React , {useState} from 'react'
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

// const Avtar = () =>{
//     const[data,setData] = useState(null)
//     const[src,setSrc] = useState(null)
//     const[crop,setCrop] = useState({unit:'%',width:50,aspect:20/16})
//     const[imageur,setImageur] = useState(null)
//     const[cropimageUrl,setCropImageUrl] = useState(null)
//     const onSelect = e =>{
//         if(e.target.files && e.target.files.length > 0)
//         {
//             setSrc(URL.createObjectURL(e.target.files[0]));
//         }
//     }
//   const onImageLoaded = image =>{
//         // 
//         setImageur(image)
//     }
//   const onCropComplete = crop => {
//         makeClientCrop(crop);
//     }
//    const onCropChange = (crop) =>{
//         setCrop(crop)
//     }


//     const makeClientCrop = (crop) =>{
//         if(imageur && crop.width && crop.height)
//         {
//             const croppedImageUrl = getCroppedImg(
//                 imageur,
//                 crop,
//                 'newFile.jpeg'
//             );
//             console.log(croppedImageUrl)

//             setCropImageUrl(croppedImageUrl)
//         }
//     }
//     const getCroppedImg = (image, crop, fileName) =>{
//         const canvas = document.createElement('canvas');
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         canvas.width = crop.width;
//         canvas.height = crop.height;
//         const ctx = canvas.getContext('2d');

//         ctx.drawImage(
//             image,
//             crop.x * scaleX,
//             crop.y * scaleY,
//             crop.width * scaleX,
//             crop.height * scaleY,
//             0,
//             0,
//             crop.width,
//             crop.height
//         );
//     }
//     return(
//         <div className="App">
//         <br /><br /><br /><br /><br />
//         <div>
//             <input type="file" onChange={onSelect} />
//         </div>
//         <div style={{ width: '500px' }}>
//             {src && (
//                 <ReactCrop
//                     src={src}
//                     crop={crop}
//                     ruleOfThirds
//                     onImageLoaded={onImageLoaded}
//                     onComplete={onCropComplete}
//                     onChange={onCropChange}
//                     width='200'
//                     height='200'
//                 />
//             )}
//         </div>
//         <button onClick={this.onFileSave}>Save</button>
//         {cropimageUrl && (
//             <img alt="Crop" style={{ height: '200px' }} src={cropimageUrl} />
//         )}
//     </div>
//     )
// }
// export default Avtar