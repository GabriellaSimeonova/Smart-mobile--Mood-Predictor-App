import './NavBar.css';
import React, { useState } from 'react';
import plus from './resources/icons/plus.png';
import stats from './resources/icons/stats.png';
import camera from './resources/icons/camera.png';
import bulb from './resources/icons/bulb.png';

function NavBar() {

  const [currentItem, setCurrentItem] = useState(null);

  const handleClick = (item) => {
    setCurrentItem(item);
  };

  return(
  <nav className='navbar'>
    <div id="plus" className={currentItem  === 'plus' ? 'current' : ''} onClick={() => handleClick('plus')}>
    <img  src={plus} alt="My Icon" />
    </div>
    <div id="stats" className={currentItem  === 'stats' ? 'current' : ''} onClick={() => handleClick('stats')}>
    <img  src={stats} alt="My Icon" />

    </div>
    <div id="bulb" className={currentItem  === 'bulb' ? 'current' : ''} onClick={() => handleClick('bulb')}>
    <img  src={bulb} alt="My Icon" />

    </div>
    <div id="camera" className={currentItem  === 'camera' ? 'current' : ''} onClick={() => handleClick('camera')}>
    <img  src={camera} alt="My Icon" />

    </div>
  </nav>
)
}

export default NavBar;