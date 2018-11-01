import React, { Component } from 'react';
import '../styles/form.css'

class AddClient extends Component {
    constructor (){
        super();
        this.state = {
            fName: "",
            lName: "",
            country: "",
            owner: "",
            email:"",
            emailType:"",
            sold: false
        }
    }

    inputHandler = (e) => {
        let val = e.target.value;
        this.setState({ [e.target.name] : val})
    }

    render() {
        return (
            <div className="form">
                <h4>ADD CLIENT</h4>
                <div className="inputDiv">
                <label>Fist name:</label> <input type="text" className="formInput" name="fName" value={this.state.fName} onChange={this.inputHandler} />
                </div>
                <div className="inputDiv">
                <label>Last name:</label><input type="text" className="formInput" name="lName" value={this.state.lName} onChange={this.inputHandler} /> 
                </div>
                <div className="inputDiv">
                <label>Country:</label> <input type="text" className="formInput" name="country" value={this.state.country} onChange={this.inputHandler} /> 
                </div>
                <div className="inputDiv">
                <label>Owner:</label> <input type="text" className="formInput" name="owner" value={this.state.owner} onChange={this.inputHandler} /> 
                </div>
                <div className="inputDiv">
                <label>Email:</label> <input type="text" className="formInput" name="email" value={this.state.email} onChange={this.inputHandler} />  
                </div>
                <div className="inputDiv">
                <label>Email type:</label> <input type="text" className="formInput" name="emailType" value={this.state.emailType} onChange={this.inputHandler} /> 
                </div>
                <div className="inputDiv">
                {/*Sold <input type="text" className="formInput" name="sold" value={this.state.sold} onChange={this.inputHandler} /> */}
                </div>
                <button className="updateAddBtn" onClick={this.addClient}>ADD NEW CLIENT</button>
            </div>
        );
    }
}

export default AddClient;