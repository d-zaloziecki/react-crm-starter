import React, { Component } from 'react';
import '../styles/form.css'
import '../styles/popup.css'

class UpdateClient extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      email: "",
      emailType: ""
    }
  }

  inputHandler = (e) => {
    let val = e.target.value;
    this.setState({ [e.target.name]: val })
  }

  componentDidMount = () => {
    let client = this.props.client;
    this.setState({ name: client.name, country: client.country, email: client.email, emailType: client.emailType })
  }

  updateClient = () => {
    let newClient = { ...this.props.client };
    newClient.name = this.state.name;
    newClient.country = this.state.country;
    newClient.email = this.state.email;
    newClient.emailType = this.state.emailType;

    this.props.updateClient(newClient)
    this.props.exitUpdate()
  }

  deleteClient = () => {
    this.props.deleteClient(this.props.client._id)
  }

  render() {
    return (
      <div className="form popUp">
        <div className="modal-content">
          <button className="exitBtn" onClick={this.props.exitUpdate}>X</button>
          <h4>UPDATE</h4>
          <div className="inputDiv">
            <label>Name:</label> <input type="text" className="formInput" name="name" value={this.state.name} onChange={this.inputHandler} />
          </div>
          <div className="inputDiv">
            <label>Country:</label> <input type="text" className="formInput" name="country" value={this.state.country} onChange={this.inputHandler} />
          </div>
          <div className="inputDiv">
            <label>Email:</label> <input type="text" className="formInput" name="email" value={this.state.email} onChange={this.inputHandler} />
          </div>
          <div className="inputDiv">
            <label>Email type:</label> <input type="text" className="formInput" name="emailType" value={this.state.emailType} onChange={this.inputHandler} />
          </div>
          <button className="exitBtn" onClick={this.deleteClient}>DELETE THIS CLIENT!</button>
          <button className="updateAddBtn" onClick={this.updateClient}>UPDATE</button>
        </div>
      </div>
    );
  }
}

export default UpdateClient;
