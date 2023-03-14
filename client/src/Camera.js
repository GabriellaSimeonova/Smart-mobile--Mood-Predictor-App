import './Camera.css';
import React, { useState, useRef, useEffect } from 'react';
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

  const capture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageSrc = canvasRef.current.toDataURL('image/jpeg');
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
            height={350}
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
        <button className="pink-button">Save</button>
        <p className='small-text'> Skip...</p>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

export default Camera;

