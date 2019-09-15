import React from 'react';
import './App.css';
import PlayersPageContainer from '../players/PlayersPageContainer';
import TopBar from '../app/common/TopBar';
import ErrorBoundary from '../app/common/ErrorBoundary';

function App() {
  return (
    <React.Fragment>
      <TopBar topBarText='Intive Exercise'/>
      <ErrorBoundary>
        <PlayersPageContainer/>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
