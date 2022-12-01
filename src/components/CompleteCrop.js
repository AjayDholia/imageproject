
import { useRef } from "react";
import React, {useState} from "react";
import Cropper from "react-easy-crop";

import axios from 'axios'
function CompleteCrop() {
    const [image, setImage] = useState("");
    const [currentPage, setCurrentPage] = useState("choose-img");
    const [imgAfterCrop, setImgAfterCrop] = useState('');

    //  imageCropper
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    // const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(4 / 3);
    const filename = 'ajay.jpeg'
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
      setCroppedArea(croppedAreaPixels);
    };
  console.log(croppedArea)
    const onAspectRatioChange = (event) => {
      setAspectRatio(event.target.value);
    };

    // file input function is here 
    const inputRef = useRef();

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current.click();
  };






    // const [Data, SetData] = useState(null)

    // Invoked when new image file is selected
    const onImageSelected = (selectedImg) => {
        setImage(selectedImg);
        setCurrentPage("crop-img");
    };

    // Generating Cropped Image When Done Button Clicked
    const onCropDone = (imgCroppedArea, filename) => {
        const canvas = document.createElement("canvas");
        canvas.width = imgCroppedArea.width;
        canvas.height = imgCroppedArea.height;
        console.log("croooped image", imgCroppedArea)
        const context = canvas.getContext("2d");

        let imageObj1 = new Image();

        console.log("image url daata", imageObj1)
        imageObj1.src = image;
        console.log("cropped image", imageObj1)
        imageObj1.onload = function () {
            context.drawImage(
                imageObj1,
                imgCroppedArea.x,
                imgCroppedArea.y,
                imgCroppedArea.width,
                imgCroppedArea.height,
                0,
                0,
                imgCroppedArea.width,
                imgCroppedArea.height
            );

            const dataURL = canvas.toDataURL("image/jpeg");
            console.log(dataURL)
            console.log(dataURL,"dataURL of cropped iMAGE")
          
            setImgAfterCrop(dataURL)
            // setCurrentPage("img-cropped");
            canvas.toBlob((blob) => {
                blob.name = filename
                console.log(blob)
                // setImgAfterCrop(blob)
                // setCurrentPage("choose-img")
                const newImage = new File([blob], blob.name, { type: blob.type });
                let formData = new FormData();    //formdata object
                formData.append("user_id", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("sellername", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("sellerphone", +91999999993);   //append the values with key, value pair
                formData.append("categories", "bikes");   //append the values with key, value pair
                formData.append("title", "ajay");   //append the values with key, value pair
                formData.append("description", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("price", 6748964);   //append the values with key, value pair
                formData.append("longitude", 77.306843);   //append the values with key, value pair
                formData.append("latitude", 28.663996);   //append the values with key, value pair
                formData.append("city", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("state", "delhi");   //append the values with key, value pair
                formData.append("sellerType", "user");   //append the values with key, value pair
                formData.append("images", newImage);   //append the values with key, value pair
                const api = "https://fixebuyofficial.in/product/automobile/form/create"
                axios.post(api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res) => {
                    console.log(res)
                    setCurrentPage("img-cropped");

                }).catch((error) => {
                    console.log(error)
                })
                // }
            }, 'image/jpeg');

        };
       
    };

    const onCropCancel = () => {
        setImage("");
        setCurrentPage("choose-img");
       
    };

    return (
        <div className="container">
            {currentPage === "choose-img" ? (
                // <FileInput setImage={setImage} onImageSelected={onImageSelected} />
                <div>
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleOnChange}
                  style={{ display: "none" }}
                />
          
                <button className="btn" onClick={onChooseImg}>
                  Choose Image
                </button>
              </div>
            ) : currentPage === "crop-img" ? (
                // <ImageCropper
                //     image={image}
                //     onCropDone={onCropDone}
                //     onCropCancel={onCropCancel}
                // />
                <div className="cropper">
                <div>
                  <Cropper
                    image={image}
                    aspect={aspectRatio}
                    crop={crop}
                    // zoom={zoom}
                    onCropChange={setCrop}
                    // onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    style={{
                      containerStyle: {
                        width: "100%",
                        height: "80%",
                        backgroundColor: "#fff",
                      },
                    }}
                  />
                </div>
          
                <div className="action-btns">
                  <div className="aspect-ratios" style={{marginBottom:"2%"}} onChange={onAspectRatioChange}>
                    <input type="radio" value={1 / 1} name="ratio" /> 1:1
                    <input type="radio" value={5 / 4} name="ratio" /> 5:4
                    <input type="radio" value={4 / 3} name="ratio" /> 4:3
                    <input type="radio" value={3 / 2} name="ratio" /> 3:2
                    <input type="radio" value={5 / 3} name="ratio" /> 5:3
                    <input type="radio" value={16/ 9} name="ratio" style={{marginTop:"50%"}}/> 16:9
                    {/* <input type="radio" value={3 / 1} name="ratio" /> 3:1 */}
                  </div>
          
                  <button className="btn btn-outline" onClick={onCropCancel}>
                    Cancel
                  </button>
          
                  <button
                    className="btn"
                    onClick={() => {
                      onCropDone(croppedArea , filename );
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
                <div>
                    <div>
                        <img src={imgAfterCrop} className="cropped-img" />
                    </div>

                    <button
                        onClick={() => {
                            setCurrentPage("crop-img");
                        }}
                        className="btn"
                    >
                        Crop
                    </button>

                    <button
                        onClick={() => {
                            setCurrentPage("choose-img");
                            setImage("");
                        }}
                        className="btn"
                    >
                        New Image
                    </button>
                </div>
            )}
        </div>
    );
}

export default CompleteCrop;