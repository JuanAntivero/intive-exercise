import React from 'react';
import PlayersSearchBar from './PlayersSearchBar';

class PlayersSearchBarContainer extends React.Component{
    constructor(props){
        super (props);

        this.state = {
            nameFilter : "",
            positionFilter : "",
            ageFilter : ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFilter(this.state.nameFilter,
                            this.state.positionFilter,
                            this.state.ageFilter);
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleNameChange = (e) =>{
        let patt = new RegExp('^[^0-9]+$');
        let res = patt.test(e.target.value);
        if (res || e.target.value ===""){
            this.handleChange(e);
        }
    };

    render(){ 
        return(
            <PlayersSearchBar {...this.props}
                              onSubmit={this.onSubmit}
                              handleChange={this.handleChange}
                              handleNameChange={this.handleNameChange}
                              nameFilter={this.state.nameFilter}
                              positionFilter={this.state.positionFilter}
                              ageFilter={this.state.ageFilter}
            />
        );
    }
}

export default PlayersSearchBarContainer;