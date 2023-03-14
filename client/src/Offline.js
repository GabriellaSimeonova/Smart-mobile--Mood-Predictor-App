import './offline.css';
import React, { useState } from 'react';
import offlineIcon from './resources/icons/offline.png'

function Offline() {

 

  return(
    <div className='offline-wrapper'>
        <h2>Cappy needs Internet connection!</h2>
        <img src={offlineIcon} />
        <h1>Make sure you are happy with your offline life, too!</h1>
    </div>
)
}

export default Offline;
