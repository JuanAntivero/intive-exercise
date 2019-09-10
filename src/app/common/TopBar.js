import React from 'react';
import './common.css';

function TopBar(props){
    return (
        <div className='top-bar'>
            {props.topBarText}
        </div>
    );
}

export default TopBar;