import './NavBar.css';
import React, { useState } from 'react';
import plus from './resources/icons/plus.png';
import stats from './resources/icons/stats.png';
import camera from './resources/icons/camera.png';
import bulb from './resources/icons/bulb.png';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState(null);
  const handleClick = (item) => {
    setCurrentItem(item);
  };

  return(
    <nav className='navbar'>
    <div id="plus" className={currentItem  === 'plus' ? 'current' : ''} onClick={() => handleClick('plus')}>
   <Link to={'/Quiz'}> <img   src={plus} alt="My Icon" /></Link>
    </div>

    <div id="stats" className={currentItem  === 'stats' ? 'current' : ''} onClick={() => handleClick('stats')}>
    <img  src={stats} alt="My Icon" />
    </div>
    
    <div id="bulb" className={currentItem  === 'bulb' ? 'current' : ''} onClick={() => handleClick('bulb')}>
    <Link to={'/SuggestMenu'}>  <img  src={bulb} alt="My Icon" /></Link>
    </div>

    <div id="camera" className={currentItem  === 'camera' ? 'current' : ''} onClick={() => handleClick('camera')}>
    <Link to={'/Gallery'}>  <img  src={camera} alt="My Icon" /></Link>
    </div>
  </nav>
)
}

export default NavBar;
