import './Camera.css';
import axios from 'axios';
import React, { useState, useRef, useEffect, cloneElement } from 'react';
import PageTitle from './PageTitle';

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [pictureTaken, setPictureTaken] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        // Handle error
        console.error('Error accessing camera', error);
      });
  };
  
  const requestPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      startCamera();
    } catch (error) {
      // Handle error
      console.error('Error requesting camera permission', error);
    }
  };

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      // Handle error
      console.error('getUserMedia is not supported');
      return;
    }
    requestPermission();
  }, []);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      // Handle error
      console.error('getUserMedia is not supported');
      return;
    }
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        // Handle error
        console.error('Error accessing camera', error);
      });
  }, []);

  const stopCamera = () => {
    const stream = videoRef.current ? videoRef.current.srcObject : null;
    if (!stream) {
      return;
    }
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    videoRef.current.srcObject = null;
  }
  const addImageInLocalStorage = (image, mood) => {
    try {
      // Retrieve the existing collection from local storage or initialize an empty one
      let collection = [];
      if (localStorage.getItem("images")) {
        collection = JSON.parse(localStorage.getItem("images"));
      }
  
      // Add the new image and mood to the collection
      if (image && mood) {
        collection.push({ image, moodName: mood });
  
        // Save the updated collection to local storage
        localStorage.setItem("images", JSON.stringify(collection));
      } else {
        console.error("Invalid image or mood parameter");
      }
    } catch (error) {
      console.error("Error adding image to local storage", error);
    }
  };
  

  const capture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageSrc = canvasRef.current.toDataURL('image/jpeg',1.0);
    setCapturedImage(imageSrc);
    setPictureTaken(true);
    stopCamera();
  };

  const retakePicture = () => {
    setPictureTaken(false);
    setCapturedImage(null);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const savePicture = () => {
    try{
      addImageInLocalStorage(capturedImage,localStorage.getItem('clickedMoodName'));
      console.log('Ok!Its working');
    }catch(err){
      console.error('Failed to save picture:', err);
    }
  };

  return (
    <div>
      <div className='webcam-wrapper'>
        <PageTitle text="Capture Your Mood" />
        {pictureTaken ? (
          <img className="taken-image" src={capturedImage} alt="Captured" />
        ) : (
          <video
            ref={videoRef}
            width={350}
            height={460}
            autoPlay
            playsInline
          />
        )}
        {pictureTaken ? (
          <button className="pink-button" onClick={retakePicture}>
            Retake
          </button>
        ) : (
          <button className="pink-button" onClick={capture}>
            Take a picture
          </button>
        )}
        <button className="pink-button" onClick={savePicture}>
          Save
        </button>
        <p className='small-text'> Skip...</p>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

export default Camera;

