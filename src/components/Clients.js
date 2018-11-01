import React, { Component } from 'react';
import '../styles/clients.css'
import Search from './Search';
import Client from './Client';
import Loading from './Loading';

class Clients extends Component {
    constructor() {
        super();
        this.state = {
            startClient: 0,
            endClient:19,
            searchInput: "",
            searchBy: "",
        }
    }

    setSearchInp = (searchInput, searchBy) =>{
        this.setState({searchInput: searchInput, searchBy: searchBy})
    }

    displaySearchFindes = () => {
        let clients = [];
        if(this.props.clients.length === 0){
            return null;
        }
        if (this.state.searchInput === "") {
            for(let i = this.state.startClient; i<=this.state.endClient; i++){
                clients.push(this.props.clients[i])
            }
            return (clients.map(c => { return (<Client key={c._id} client={c} update={this.props.update} chooseClient={false} />) }))
        }
        return (
            <div id="searchFinds">
                {this.props.clients
                    .map(c => { if (c[this.state.searchBy].toLowerCase().includes(this.state.searchInput.toLowerCase())) return (<Client key={c._id} client={c} update={this.props.update} chooseClient={false} />) })}
            </div>
        )
    }

    render() {
        return (
            <div className="Clients">
                <Search setSearchInp={this.setSearchInp} searchOptions={true} />
                <div className="header">
                    <div className="col">Name</div>
                    <div className="col">Surname</div>
                    <div className="col">Country</div>
                    <div className="col">First contact</div>
                    <div className="col emailType">Email type</div>
                    <div className="col sold">Sold</div>
                    <div className="col">Owner</div>
                </div>
                {this.props.clients.length === 0 ? <Loading/> : null}
                {this.displaySearchFindes()}
            </div>
        );
    }
}

export default Clients;
