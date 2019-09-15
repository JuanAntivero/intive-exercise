import React from 'react';
import Header from '../app/common/Header';
import PlayersSearchBar from './PlayersSearchBar';
import Table from '../app/common/Table';
import LoadingSpinner from '../app/common/LoadingSpinner';

class PlayersPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      nameFilter:"",
      positionFilter:"",
      ageFilter:""
    }
  }

  componentDidMount() {
    this.props.fetchPlayers();
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]:e.target.value});
  }
  
  onAgeBlur = (e) =>{
    let value, min, max;

    if (e.target.value === "")
      value = "";
    else{
      ({ value, min, max } = e.target);
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    }

    this.setState({ageFilter:value});
  }

  onFilter = () => this.props.filterPlayers(this.state.nameFilter,
                                            this.state.positionFilter,
                                            this.state.ageFilter);
                                            
  render(){

    let tcols = [{id:'name', columnName:'Player'},
                {id:'position', columnName:'Position'},
                {id:'nationality',columnName:'Nationality'},
                {id:'age',columnName:'Age'}];

    //Specific error Throw for API Call errors. It will be catched by the Error Boundary
    if (this.props.error){
      throw new Error(this.props.error.message);
    }

    return (
      <div className='container'>
          <Header headerText='Football Player Finder'/>
          {this.props.loading ?
            <LoadingSpinner />
            :
            <React.Fragment>
              <PlayersSearchBar playersPositions={this.props.playersPositions}
                                nameValue = {this.state.nameFilter}
                                nameName = "nameFilter"
                                positionValue = {this.state.positionFilter}
                                positionName = "positionFilter"
                                ageValue = {this.state.ageFilter}
                                ageName = "ageFilter"
                                onAgeBlur = {this.onAgeBlur}
                                handleChange = {this.handleChange}
                                onFilter = {this.onFilter}/>
                                
              <Table tcols={tcols} trows={this.props.players}/>
            </React.Fragment>}
      </div>
    );
  }
}

export default PlayersPage;