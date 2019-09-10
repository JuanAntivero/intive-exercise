import React from 'react';
import './Players.css';

function PlayersSearchBar(props){
    return (
        <div className='searchBar'>
            <input className='searchItem' type='text' placeholder='Player Name'/>
            <select className='searchItem' defaultValue="">
                <option value="" disabled>Position</option>
                {props.playersPositions.map((position,pos) => {
                    return (<option value={position} key={pos}>{position}</option>);
                })}
            </select>
            <input className='searchItem' type='text' placeholder='Age'/>
            <input className='searchItem searchButton' type='button' value='Search'/>
        </div>
    );
}

export default PlayersSearchBar;