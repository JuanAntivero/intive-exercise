import React from 'react';
import Header from '../app/common/Header';
import PlayersSearchBarContainer from './PlayersSearchBarContainer';
import Table from '../app/common/Table';
import LoadingSpinner from '../app/common/LoadingSpinner';
import ErrorBoundary from '../app/common/ErrorBoundary';

class PlayersPage extends React.Component{

  componentDidMount() {
    this.props.fetchPlayers();
  }

  onFilter = (nameFilter,positionFilter,ageFilter) => this.props.filterPlayers(nameFilter,
                                                                               positionFilter,
                                                                               ageFilter);
                                            
  render(){

    let tcols = [{id:'name', columnName:'Player'},
                {id:'position', columnName:'Position'},
                {id:'nationality',columnName:'Nationality'},
                {id:'age',columnName:'Age'}];
                
    return (
        <div className='container'>
            <Header headerText='Football Player Finder'/>
            {this.props.loading ?
              <LoadingSpinner />
              :
              <ErrorBoundary error={this.props.error?'API Call Error':null}
                             errorInfo={this.props.error?{componentStack:this.props.error.stack}:null}>
                <PlayersSearchBarContainer  playersPositions={this.props.playersPositions}
                                            onFilter = {this.onFilter}/>
                <Table tcols={tcols} trows={this.props.players}/>
              </ErrorBoundary>}
        </div>
    );
  }
}

export default PlayersPage;