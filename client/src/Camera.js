import './Camera.css';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import PageTitle from './PageTitle';

function Camera() {
  const webcamRef = useRef(null);
  const [pictureTaken, setPictureTaken] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setPictureTaken(true);
  };

  const retakePicture = () => {
    setPictureTaken(false);
    setCapturedImage(null);
  };

  const saveImgToDb = async () => {
    if (capturedImage) {
      try {
        const response = await axios.post('http://localhost:5000/image', {
          image: Buffer.from(capturedImage.split(',')[1], 'base64'),
          date: new Date().toISOString(),
        });
        console.log(response.data); 
      } catch (err) {
        console.error(err);
      }
    }
  };
  // const saveImgToDb = () => {
  //   if (capturedImage) {
  //     try {
  //       const response ={
  //         image: Buffer.from(capturedImage.split(',')[1], 'base64'),
  //         date: new Date().toISOString(),
  //       };
  //       console.log(response.data); 
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };
  

  return (
    <div>
      <div className='webcam-wrapper'>
      <PageTitle text="Capture Your Mood"/>
      {pictureTaken ? (
        <img className="taken-image" src={capturedImage} alt="Captured" />
      ) : (
       
        <Webcam
          audio={false}
          ref={webcamRef}
          width={350}
          height={350}
          screenshotFormat="image/jpeg"
        />
       
      )}
 
      {pictureTaken ? (
        <button className="pink-button" onClick={retakePicture}>Retake</button>
      ) : (
        <button className="pink-button" onClick={capture}>Take a picture</button>
      )}
       <button className="pink-button"onClick={saveImgToDb}>Save</button>
       <p className='small-text'> Skip...</p>
      </div>
    </div>
  );
}

export default Camera;

