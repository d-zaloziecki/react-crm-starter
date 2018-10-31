import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/clients">clients</Link>
        <Link to="/action">action</Link>
        <Link to="/analytics">analytics</Link>
      </div>
    );
  }
}

export default Navbar;
