import React from 'react';
import './index.css';
import NavBar from './NavBar';
import Quiz from './Quiz';
import Camera from './Camera'
import SuggestMenu from './SuggestMenu'
import Suggestion from './Suggestion'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Quiz />} />
          <Route path='/Camera' element={<Camera />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/SuggestMenu' element={<SuggestMenu />} />
          <Route path='/Suggestion' element={<Suggestion />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;