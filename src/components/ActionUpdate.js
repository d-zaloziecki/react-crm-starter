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
            clientToUpdate: null,
            owner: ""
        }
    }

    setSearchInp = (searchInput, searchBy) => {
        this.setState({ searchInput: searchInput })
    }

    changeOwner = (e) => {
        this.setState({ owner: e.target.value })
    }

    displaySearchFindes = () => {
        if (this.state.searchInput === "") {
            return null;
        }
        let clients = [];
        let filteredClients = this.props.clients
            .filter(c => c.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
        for (let i = 0; i <= 19 && filteredClients[i]; i++) {
            clients.push(filteredClients[i])
        }
        if (clients.length > 0) {
            return (
                <div id="searchFinds">
                    {clients
                        .map(c => { return (<Client key={c._id} client={c} update={this.props.update} chooseClient={this.chooseClient} />) })}
                </div>
            )
        } else {
            return (<div className="noResult">NO RESULTS FOUND!</div>)
        }
    }

    returnOwners = () => {
        let clients = this.props.clients;
        let owners = clients.map(c => { return c.owner });
        let ownersUnduplicated = []
        for (let i in owners) {
            if (!ownersUnduplicated.includes(owners[i])) {
                ownersUnduplicated.push(owners[i])
            }
        }
        let key = 0;
        return ownersUnduplicated.map(o => { return <option value={o} key={key++}>{o}</option> })
    }

    chooseClient = (client) => {
        this.setState({ clientToUpdate: client, searchInput: "", owner: client.owner })
    }

    updateOwner = () => {
        let client = {...this.state.clientToUpdate}
        client.owner = this.state.owner;
        this.setState({searchInput: "", clientToUpdate: null, owner: ""})
        this.props.updateClient(client)
    }

    updateSell = () => {
        let client = {...this.state.clientToUpdate}
        client.sold = true;
        this.setState({searchInput: "", clientToUpdate: null, owner: ""})
        this.props.updateClient(client)
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
                    <select name="owners" className="formInput" value={this.state.owner} onChange={this.changeOwner}>
                        <option value=""></option>
                        {this.returnOwners()}
                    </select>
                    <button className="updateAddBtn" onClick={this.updateOwner} name="transfer">TRANSFER</button>
                </div>

                <div className="inputDiv">
                    <label>Send email:</label>
                    <select name="emailType" className="formInput">
                    </select>
                    <button className="updateAddBtn" >SEND</button>
                </div>

                <div className="inputDiv">
                    <label>Declare sale!</label>
                    <button className="updateAddBtn" onClick={this.updateSell} name="sell">DECLARE</button>
                </div>
            </div >
        );
    }
}

export default ActionUpdate;
