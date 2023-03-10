import './PageTitle.css';
import React from 'react';
function PageTitle(props) {

  return(
    <h1 className='page-title'>
        {props.text}
    </h1>
)
}

export default PageTitle;
