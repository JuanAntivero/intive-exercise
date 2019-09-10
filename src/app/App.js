import React from 'react';
import './App.css';
import PlayersPage from '../players/PlayersPage';
import TopBar from '../app/common/TopBar';

function App() {
  return (
    <React.Fragment>
      <TopBar topBarText='Intive Exercise'/>
      <PlayersPage/>
    </React.Fragment>
  );
}

export default App;
