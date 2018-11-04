import React, { Component } from 'react';
import '../styles/clients.css'
import UpdateClient from './UpdateClient';


class Client extends Component {
    constructor() {
        super();
        this.state = {
            update: false,
        }
    }

    UpdateClient = () => {
        this.setState({ update: true })
    }

    exitUpdate = () => {
        this.setState({ update: false })
    }

    chooseClient = () =>{
        if(this.props.chooseClient){
            this.props.chooseClient(this.props.client);
        }
    }

    render() {
        let client = this.props.client;
        let name = client.name.split(" ");
        let firstContact = client.firstContact.slice(0, 10)

        return (
            <div className="Client">
                <div className="row">
                    <div className="col">{name[0]}</div>
                    <div className="col">{name[1]}</div>
                    <div className="col">{client.country}</div>
                    <div className="col">{firstContact}</div>
                    <div className="col emailType">{client.emailType ? client.emailType : "-"}</div>
                    <div className="col sold">{client.sold ? "+" : "-"}</div>
                    <div className="col">{client.owner}</div>
                    {!this.props.update ? <img className="update" onClick={this.chooseClient} alt='update' src="https://cdn3.iconfinder.com/data/icons/web-document-icons/512/Edit_Document-512.png" /> : <img className="update" onClick={this.UpdateClient} alt='update' src="https://cdn3.iconfinder.com/data/icons/web-document-icons/512/Edit_Document-512.png" />}
                    
                </div>

                {this.state.update ? <UpdateClient client={client} exitUpdate={this.exitUpdate} update={this.props.update} deleteClient={this.props.deleteClient} /> : null}
            </div>
        );
    }
}

export default Client;
