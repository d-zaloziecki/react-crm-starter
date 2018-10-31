import React, { Component } from 'react';
import '../styles/form.css'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            searchBy: "name"
        }
    }

    inputHandler = (e) => {
        let val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {console.log(this.state)})
    }

    render() {
        return (
            <div className="Search">
                <span className="inputdiv">
                    <input type="text" placeholder="search" className="formInput" name="search" value={this.state.search} onChange={this.inputHandler} />
                </span>
                <span className="inputdiv"  >
                    <select name="searchBy" className="formInput" value={this.state.searchBy} onChange={this.inputHandler}>
                        <option value="name">Name</option>
                        <option value="surname">Surname</option>
                        <option value="country">Country</option>
                        <option value="owner">Owner</option>
                        {/* <option value="sold">Sold</option> */}
                    </select>
                </span>
            </div>
        );
    }
}

export default Search;
