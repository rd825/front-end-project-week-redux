import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav';
import Notes from './Notes';
import FPNote from './FPNote';

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Route
          exact path="/"
          render={props => (
            <Notes {...props} />
          )} 
      />

      <Route
          path="/notes/:id"
          render={props => (
            <FPNote {...props} />
          )}
        />

    </div>
  );
}

export default App;