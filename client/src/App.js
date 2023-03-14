import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import Quiz from './Quiz';
import Camera from './Camera'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryView from './views/GalleryView';
import StatisticsView from './views/StatisticsView';
import SuggestMenu from './SuggestMenu';
import Suggestion from './Suggestion';
import Offline from './Offline'

function App() {
  return (
   
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Quiz />} />
          <Route path='/Camera' element={<Camera />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/Gallery' element={<GalleryView/>}/>
          <Route path='/SuggestMenu' element={<SuggestMenu />} />
          <Route path='/Suggestion' element={<Suggestion />} />
          <Route path='/Offline' element={<Offline />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;