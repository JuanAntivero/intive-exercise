import React from 'react';
import './App.css';
import PlayersPageContainer from '../players/PlayersPageContainer';
import TopBar from '../app/common/TopBar';

function App() {
  return (
    <React.Fragment>
      <TopBar topBarText='Intive Exercise'/>
      <PlayersPageContainer/>
    </React.Fragment>
  );
}

export default App;
