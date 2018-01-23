import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Decision from './scenes/Decision';
import Landing from './scenes/Landing';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/play" exact component={Decision} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
