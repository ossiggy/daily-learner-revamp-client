import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default withRouter(App);
