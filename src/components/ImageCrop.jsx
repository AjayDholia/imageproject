import axios from 'axios';
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class CoachDashboard extends PureComponent {
    state = {
        Data: null,
        src: null,
        crop: {
            unit: '%',
            width: 50,
            aspect: 20 / 16,
        },
    };

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
            //   console.log(e.target.files[0])
        }
    };

    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        this.setState({ crop });
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            console.log(croppedImageUrl)
            this.setState({ croppedImageUrl });
        }
    }
  async  getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
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
            crop.height
        );
    
        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                this.setState({ Data: blob })
                resolve(this.fileUrl);
                console.log(this.state.Data)
                const newImage = new File([this.state.Data], this.state.Data.name, { type: this.state.Data.type });
                console.log(newImage)
                let formData = new FormData();    //formdata object

                formData.append("user_id", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("sellername", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("sellerphone", +91999999993);   //append the values with key, value pair
                formData.append("categories", "bikes");   //append the values with key, value pair
                formData.append("title", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("description", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("price", 6748964);   //append the values with key, value pair
                formData.append("longitude", 77.306843);   //append the values with key, value pair
                formData.append("latitude", 28.663996);   //append the values with key, value pair
                formData.append("city", "634123e8832860cfb6788fde");   //append the values with key, value pair
                formData.append("state", "delhi");   //append the values with key, value pair
                formData.append("sellerType", "user");   //append the values with key, value pair
                formData.append("images", newImage);   //append the values with key, value pair
            
                // const ApiDtaa = async () => {
                    console.log(newImage)
                    const api = "https://fixebuyofficial.in/product/automobile/form/create"
                     axios.post(api, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((res) => {
                        console.log(res)
                    }).catch((error) => {
                        console.log(error)
                    })
                // }
            }, 'image/jpeg');
        });
    }




    render() {
        const { crop, croppedImageUrl, src } = this.state;

        return (
            <div className="App">
                <br /><br /><br /><br /><br />
                <div>
                    <input type="file" onChange={this.onSelectFile} />
                </div>
                <div style={{ width: '500px' }}>
                    {src && (
                        <ReactCrop
                            src={src}
                            crop={crop}
                            ruleOfThirds
                            onImageLoaded={this.onImageLoaded}
                            onComplete={this.onCropComplete}
                            onChange={this.onCropChange}
                            width='200'
                            height='200'
                        />
                    )}
                </div>
                <button onClick={this.onFileSave}>Save</button>
                {croppedImageUrl && (
                    <img alt="Crop" style={{ height: '200px' }} src={croppedImageUrl} />
                )}
            </div>
        );
    }
}


export default CoachDashboard;