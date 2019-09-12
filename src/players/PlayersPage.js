import React from 'react';
import Header from '../app/common/Header';
import PlayersSearchBar from './PlayersSearchBar';
import Table from '../app/common/Table';

class PlayersPage extends React.Component{
  componentDidMount() {
    this.props.fetchPlayers();
  }
  render(){
    let tcols = [{id:'name', columnName:'Player'},
                {id:'position', columnName:'Position'},
                {id:'nationality',columnName:'Nationality'},
                {id:'age',columnName:'Age'}];

    return (
      <div className='container'>
        <Header headerText='Football Player Finder'/>
        <PlayersSearchBar playersPositions={this.props.playersPositions}/>
        <Table tcols={tcols} trows={this.props.players}/>
      </div>
    );
  }
}

export default PlayersPage;