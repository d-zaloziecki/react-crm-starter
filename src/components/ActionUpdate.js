import React, { Component } from 'react';
import Client from './Client';
import Search from './Search';
import '../styles/form.css'
import '../styles/noResult.css'

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
        let clients = [];
        let filteredClients = this.props.clients
            .filter(c => c.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
        for (let i = 0; i <= 19&&filteredClients[i]; i++) {
            clients.push(filteredClients[i])
        }
        if (clients.length > 0) {
            return (
                <div id="searchFinds">
                    {clients
                        .map(c => {return (<Client key={c._id} client={c} update={this.props.update} chooseClient={this.chooseClient} />) })}
                </div>
            )
        }else{
            return(<div className="noResult">NO RESULTS FOUND!</div>)
        }
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
                {clientToUpdate ? <Client key={clientToUpdate._id} client={clientToUpdate} update={null} chooseClient={false} /> : null}
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
