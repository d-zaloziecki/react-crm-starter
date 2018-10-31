import React, { Component } from 'react';
import '../styles/clients.css'
import Search from './Search';
import Client from './client';

class Clients extends Component {
    constructor(){
        super();
        this.state = {
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
              }]
        }
    }

    render() {
        return (
            <div className="Clients">
                <Search />
                <div className="header">
                <div className="col">Name</div>
                <div className="col">Surname</div>
                <div className="col">Country</div>
                <div className="col">First contact</div>
                <div className="col emailType">Email type</div>
                <div className="col sold">Sold</div>
                <div className="col">Owner</div>
                </div>
                {this.state.clients.map(c=>{return(<Client key={c._id} client={c} />)})}
                
      </div>
        );
    }
}

export default Clients;
