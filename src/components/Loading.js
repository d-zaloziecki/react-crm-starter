import React, { Component } from 'react';
import '../styles/loading.css';

class Loading extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        );
    }
}

export default Loading;
