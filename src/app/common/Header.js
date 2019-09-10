import React from 'react';
import './common.css';

function Header(props){
    return (
        <h1 className='header'>
            {props.headerText}
        </h1>
    );
}

export default Header;