import './PinkButton.css';
import React from 'react';
function PinkButton(props) {

 

  return(
    <>
    <button className='pink-button' onClick={console.log('click')}>
        {props.text}
    </button>
    <p className='small-text'>{props.smalltext}</p>
    </>
)
}

export default PinkButton;
