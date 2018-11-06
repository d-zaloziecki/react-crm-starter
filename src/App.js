import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Action from './components/Actions';
import Analytics from './components/Analytics';
import Axios from 'axios';
import Loading from './components/Loading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      loading: true
    }
  }

  update = (newClient) => {
    let clients = [...this.state.clients];
    let index = clients.findIndex(c => c._id === newClient._id);
    clients.splice(index, 1, newClient)

    this.setState({ clients: clients })
  }

  componentDidMount = () => {
    Axios.get('http://localhost:8000/clients').then((data) => {
      this.setState({ clients: data.data, loading: false });
    })
  }

  addClient = (client) => {
    this.setState({loading: true}, () =>{
      Axios.post('http://localhost:8000/clients', client).then((data) => {
        this.setState({ clients: data.data, loading: false}, () => alert("Clients saved successfully"))
      })
    })
  }

  deleteClient = (id) => {
    this.setState({loading: true}, () =>{
      Axios.delete('http://localhost:8000/clients/' + id).then((data) => {
        this.setState({ clients: data.data, loading: false}, () => alert("Clients Deleted successfully"))
      })
    })
  }

  updateClient = (updatedClient) => {
    this.setState({loading: true}, () =>{
      Axios.put('http://localhost:8000/clients', updatedClient).then((data) => {
        this.setState({ clients: data.data, loading: false}, () => alert("Clients Updated successfully"))
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {this.state.loading ? <Loading/> : null}
          <Route exact path="/clients" render={() => <Clients clients={this.state.clients} update={this.update} deleteClient={this.deleteClient} updateClient={this.updateClient} />} />
          <Route exact path="/action" render={() => <Action clients={this.state.clients} addClient={this.addClient} updateClient={this.updateClient} />} />
          <Route exact path="/analytics" render={() => <Analytics />} />
        </div>
      </Router>
    );
  }
}

export default App;
