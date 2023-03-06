
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import Quiz from './Quiz';
import Camera from './Camera'
import reportWebVitals from './reportWebVitals';import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Quiz />} />
          <Route path='/Camera' element={<Camera />} />
          <Route path='/Quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;