import React,{ useState } from 'react';
import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
import 'react-image-crop/dist/ReactCrop.css';
import { converBase64ToImage } from 'convert-base64-to-image'
function Appex() {
const [src, setSrc] = useState(null);
const [crop, setCrop] = useState({unit: '%',
width: 50,
height: 50,
x: 25,
y: 25});
const [image, setImage] = useState(null);
const [output, setOutput] = useState(null);

const selectImage = (file) => {
	setImage(file)
	setSrc(URL.createObjectURL(file));
};
// console.log(src)
// console.log(blob)
const cropImageNow = () => {

	console.log("here is the data of your company",image)
	const canvas = document.createElement('canvas');
	console.log(image.naturalHeight)
	console.log(image.naturalWidth)
	console.log(image.width)
	console.log(image.height)
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	canvas.width = crop.width;
	canvas.height = crop.height;	
	const ctx = canvas.getContext('2d');

	ctx.drawImage(
	image,
	crop.x * scaleX,
	crop.y * scaleY,
	crop.width * scaleX,
	crop.height * scaleY,
	0,
	0,
	crop.width,
	crop.height,
	);
    	// Converting to base64
	const base64Image = canvas.toDataURL('image/jpeg');
	const base64 = base64Image;
const pathToSaveImage = './public/image.png'

const path = converBase64ToImage(base64, pathToSaveImage)
	setOutput(path);
	console.log(output)

	
	// const dataURL = canvasEle.toDataURL("image/jpeg");

	// setImgAfterCrop(dataURL);
	// setCurrentPage("img-cropped");
//   };
    // canvas.toBlob(blob => {
    //     setOutput(blob)
    // })
};


return (
	<div className="App">
	<center>
		<input
		type="file"
		accept="image/*"
		onChange={(e) => {
			selectImage(e.target.files[0]);
		}}
		/>
		<br />
		<br />
		<div>
		{src && (
			<div>
                  
			<ReactCrop   aspect={16 / 9}
				crop={crop} onChange={c =>setCrop(c)} 
				onImageLoad={c => setImage(c)}>
                    <img  src={src}  style={{height:"35%"}} />
                    </ReactCrop>
              
			<br />
			<button onClick={cropImageNow}>Crop</button>
			<br />
			<br />
			</div>
		)}
        
		</div>
		<div>{output && <img src={output} />}</div>
	</center>
	</div>
);
}

export default Appex;













