import React from 'react';
import './Players.css';

function PlayersSearchBar (props){
    return(
        <form className='searchBar' onSubmit= {(e) => props.onSubmit(e)}>
            <input className='searchItem' 
                type='text' 
                placeholder='Player Name'
                value={props.nameFilter}
                name='nameFilter'
                onChange = {(e) => props.handleNameChange(e)}/>

            <select className='searchItem'
                    value={props.positionFilter}
                    name='positionFilter'
                    onChange={(e) => props.handleChange(e)}>
                <option value="" disabled={props.positionFilter === ""? true : false}>Position</option>
                {props.playersPositions.map((position,pos) => {
                    return (<option value={position} key={pos}>{position}</option>);
                })}
            </select>

            <input className='searchItem'
                type='number' 
                placeholder='Age'
                name='ageFilter'
                value={props.ageFilter}
                min={18}
                max={40}
                onChange = {(e) => props.handleChange(e)}/>

            <input className='searchItem clearButton'
                type='button' 
                value='Clear Filters'
                onClick = {(e) => props.onClearFilters(e)}/>

            <input className='searchItem searchButton'
                type='submit' 
                value='Search'/>
        </form>
    );
}

export default PlayersSearchBar;