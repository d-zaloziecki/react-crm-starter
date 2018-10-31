import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Action from './components/Actions';
import Analytics from './components/Analytics';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/clients" render={()=><Clients/> }  />
          <Route exact path="/action" render={()=><Action/> }  />
          <Route exact path="/analytics" render={()=><Analytics/> }  />
        </div>
      </Router>
    );
  }
}

export default App;
