import React from 'react';
import Header from '../app/common/Header';
import PlayersSearchBar from './PlayersSearchBar';
import Table from '../app/common/Table';

function PlayersPage() {

  let tcols = [{id:'name', columnName:'Player'},
               {id:'position', columnName:'Position'},
               {id:'nationality',columnName:'Nationality'},
               {id:'age',columnName:'Age'}];

  let players = [ {
    "age" : 9,
    "name" : "Romelu Lukaku",
    "nationality" : "Belgium",
    "position" : "Centre-Forward"
  }, {
    "age" : 1,
    "name" : "David de Gea",
    "nationality" : "Spain",
    "position" : "Keeper"
  }, {
    "age" : 20,
    "name" : "Sergio Romero",
    "nationality" : "Argentina",
    "position" : "Keeper"
  }, {
    "age" : 3,
    "name" : "Eric Bailly",
    "nationality" : "Cote d'Ivoire",
    "position" : "Centre-Back"
  }, {
    "age" : 12,
    "name" : "Chris Smalling",
    "nationality" : "England",
    "position" : "Centre-Back"
  } ];

  let playersPositions = ['Goal Keeper','Defender','Midfielder','Forward'];

  return (
    <div className='container'>
      <Header headerText='Football Player Finder' headerClass='header2'/>
      <PlayersSearchBar playersPositions={playersPositions}/>
      <Table tcols={tcols} trows={players}/>
    </div>
  );
}

export default PlayersPage;
