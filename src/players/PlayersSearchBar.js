import React from 'react';
import './Players.css';

function PlayersSearchBar(props){
    return (
        <div className='searchBar'>
            <input className='searchItem' 
                   type='text' 
                   placeholder='Player Name'
                   value={props.nameValue}
                   name={props.nameName}
                   onChange = {(e) => props.handleChange(e)}/>

            <select className='searchItem' 
                    defaultValue=""
                    value={props.positionValue}
                    name={props.positionName}
                    onChange={(e) => props.handleChange(e)}>
                <option value="" disabled={props.positionValue === ""? true : false}>Position</option>
                {props.playersPositions.map((position,pos) => {
                    return (<option value={position} key={pos}>{position}</option>);
                })}
            </select>

            <input className='searchItem'
                   type='number' 
                   placeholder='Age'
                   name={props.ageName}
                   value={props.ageValue}
                   min={18}
                   max={40}
                   onChange = {(e) => props.handleChange(e)}
                   onBlur = {(e) => props.onAgeBlur(e)}/>

            <input className='searchItem searchButton'
                   type='button' 
                   value='Search'
                   onClick = {props.onFilter}/>
        </div>
    );
}

export default PlayersSearchBar;