import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Action from './components/Actions';
import Analytics from './components/Analytics';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
      clients: []
    }
  }

  update = (newClient) => {
    let clients = [...this.state.clients];
    let index = clients.findIndex(c => c._id === newClient._id);
    clients.splice(index, 1, newClient)

    this.setState({ clients: clients })
  }

  addClient = (client) => {
    let clients = [...this.state.clients]
    clients.push(client);

    this.setState({clients: clients})
  }

  componentDidMount = () => {
    Axios.get('http://localhost:8000/clients').then((data)=>{
    this.setState({clients: data.data});
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/clients" render={() => <Clients clients={this.state.clients} update={this.update} />} />
          <Route exact path="/action" render={() => <Action clients={this.state.clients} addClient={this.addClient} />} />
          <Route exact path="/analytics" render={() => <Analytics />} />
        </div>
      </Router>
    );
  }
}

export default App;
