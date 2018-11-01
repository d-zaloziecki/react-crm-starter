import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Action from './components/Actions';
import Analytics from './components/Analytics';

class App extends Component {
  constructor() {
    super();
    this.state={
      clients: [{
        "_id": "5b9f48a2406b2cd74c55c663",
        "name": "Perkins Cunningham",
        "email": "perkinscunningham@imant.com",
        "firstContact": "2018-11-26T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Emily Durham",
        "country": "Romania"
      },
      {
        "_id": "5b9f48a25afcc00e1c1ddfbf",
        "name": "Fischer Hammond",
        "email": "fischerhammond@imant.com",
        "firstContact": "2017-05-15T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Janice Alvarado",
        "country": "Turkey"
      },
      {
        "_id": "5b9f48a2717f46c7647d2792",
        "name": "Gonzalez Armstrong",
        "email": "gonzalezarmstrong@imant.com",
        "firstContact": "2018-04-05T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Leila Howe",
        "country": "France"
      },
      {
        "_id": "5b9f48a2fbb66b93bce1c091",
        "name": "Melva Ingram",
        "email": "melvaingram@imant.com",
        "firstContact": "2018-09-23T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Greece"
      },
      {
        "_id": "5b9f48a27655150701388c9e",
        "name": "Stacy Morton",
        "email": "stacymorton@imant.com",
        "firstContact": "2018-12-08T22:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "France"
      },
      {
        "_id": "5b9f48a208b3f56db058d33c",
        "name": "Mccormick Klein",
        "email": "mccormickklein@imant.com",
        "firstContact": "2017-06-03T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Martin Massey",
        "country": "Romania"
      },
      {
        "_id": "5b9f48a2432e2204c27f87c7",
        "name": "Lula Jefferson",
        "email": "lulajefferson@imant.com",
        "firstContact": "2016-12-28T22:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Hull Conrad",
        "country": "Croatia"
      },
      {
        "_id": "5b9f48a2c4c6cedc28343820",
        "name": "Bryant Russo",
        "email": "bryantrusso@imant.com",
        "firstContact": "2018-06-03T21:00:00.000Z",
        "emailType": "A",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Romania"
      },
      {
        "_id": "5b9f48a2c3730f0e42acc02d",
        "name": "Russell Montoya",
        "email": "russellmontoya@imant.com",
        "firstContact": "2018-06-14T21:00:00.000Z",
        "emailType": "D",
        "sold": true,
        "owner": "Janice Alvarado",
        "country": "Turkey"
      },
      {
        "_id": "5b9f48a2af33eaca987028da",
        "name": "Beach Logan",
        "email": "beachlogan@imant.com",
        "firstContact": "2018-03-27T21:00:00.000Z",
        "emailType": "B",
        "sold": true,
        "owner": "Leila Howe",
        "country": "France"
      },
      {
        "_id": "5b9f48a224855e33619173fb",
        "name": "Golden Fields",
        "email": "goldenfields@imant.com",
        "firstContact": "2017-04-07T21:00:00.000Z",
        "emailType": null,
        "sold": false,
        "owner": "Emily Durham",
        "country": "Turkey"
      }]
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
