import './PinkButton.css';
import React, { useState } from 'react';
function PinkButton(props) {

 

  return(
    <button className='pink-button'>
        {props.text}
    </button>
)
}

export default PinkButton;
