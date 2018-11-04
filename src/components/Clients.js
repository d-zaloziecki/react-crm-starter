import React, { Component } from 'react';
import '../styles/clients.css'
import '../styles/noResult.css'
import Search from './Search';
import Client from './Client';
import Loading from './Loading';

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            startClient: 0,
            endClient: 19,
            searchInput: "",
            searchBy: "",
        }
    }

    goForward = () => {
        let startClient = this.state.startClient + 20
        let endClient = this.state.endClient + 20
        this.setState({ startClient: startClient, endClient: endClient })
    }

    goBack = () => {
        let startClient = this.state.startClient - 20
        let endClient = this.state.endClient - 20
        this.setState({ startClient: startClient, endClient: endClient })
    }

    setSearchInp = (searchInput, searchBy) => {
        this.setState({ searchInput: searchInput, searchBy: searchBy, startClient:0, endClient:19 })
    }

    displaySearchFindes = () => {
        let clients = [];
        if (this.props.clients.length === 0) {
            return null;
        }
        if (this.state.searchInput === "") {
            for (let i = this.state.startClient; i <= this.state.endClient && this.props.clients[i]; i++) {
                clients.push(this.props.clients[i])
            }
            return (clients.map(c => { return (<Client key={c._id} client={c} update={this.props.update} chooseClient={false} deleteClient={this.props.deleteClient} />) }))
        }
        let filteredClients = this.props.clients
            .filter(c => c[this.state.searchBy].toLowerCase().includes(this.state.searchInput.toLowerCase()))
        for (let i = this.state.startClient; i <= this.state.endClient && filteredClients[i]; i++) {
            clients.push(filteredClients[i])
        }
        if (clients.length > 0) {
            return (
                <div id="searchFinds">
                    {clients
                        .map(c => { return (<Client key={c._id} client={c} update={this.props.update} chooseClient={false} deleteClient={this.props.deleteClient} />) })}
                </div>
            )
        } else {
            return (<div className="noResult">NO RESULTS FOUND!</div>)
        }
    }

    render() {
        return (
            <div className="Clients">
                <Search setSearchInp={this.setSearchInp} searchOptions={true} />
                <span className="navClients">
                    <button className="navBtn" onClick={this.goBack}> {"<"} </button>
                    {(this.state.startClient + 1) + " - " + (this.state.endClient + 1)}
                    <button className="navBtn" onClick={this.goForward}> {">"} </button>
                </span>
                <div className="header">
                    <div className="col">Name</div>
                    <div className="col">Surname</div>
                    <div className="col">Country</div>
                    <div className="col">First contact</div>
                    <div className="col emailType">Email type</div>
                    <div className="col sold">Sold</div>
                    <div className="col">Owner</div>
                </div>
                {this.props.clients.length === 0 ? <Loading /> : null}
                {this.displaySearchFindes()}
            </div>
        );
    }
}

export default Clients;
