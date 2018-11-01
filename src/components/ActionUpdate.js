import React, { Component } from 'react';
import Client from './Client';
import Search from './Search';

class ActionUpdate extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            clientToUpdate: null
        }
    }

    setSearchInp = (searchInput, searchBy) => {
        this.setState({ searchInput: searchInput })
    }

    displaySearchFindes = () => {
        if (this.state.searchInput === "") {
            return null;
        }
        return (
            <div id="searchFinds">
                {this.props.clients
                    .map(c => { if (c.name.toLowerCase().includes(this.state.searchInput)) return (<Client key={c._id} client={c} update={null} chooseClient={this.chooseClient} />) })}
            </div>
        )
    }

    chooseClient = (client) => {
        this.setState({ clientToUpdate: client, searchInput: "" })
    }

    render() {
        let clientToUpdate = this.state.clientToUpdate
        return (
            <div className="form">
                Search for client by name:
                <Search setSearchInp={this.setSearchInp} searchOptions={false} />
                {!clientToUpdate ? null : <Client key={clientToUpdate._id} client={clientToUpdate} update={null} chooseClient={this.chooseClient} />}
                {this.displaySearchFindes()}
                <hr />
                <div className="inputDiv">
                <label>Transfer ownership to</label>
                <select name="owners" className="formInput">
                </select>
                <button className="updateAddBtn">TRANSFER</button>
                </div>
                
                <div className="inputDiv">
                <label>Send email:</label>
                <select name="emailType" className="formInput">
                </select>
                <button className="updateAddBtn">SEND</button>
                </div>
                
                <div className="inputDiv">
                <label>Declare sale!</label>
                <button className="updateAddBtn">DECLARE</button>
                </div>
            </div >
        );
    }
}

export default ActionUpdate;
