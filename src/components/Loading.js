import React, { Component } from 'react';
import '../styles/loading.css';

class Loading extends Component {
    render() {
        return (
            <div id="popUp">
                <div className="spinner" >
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </div>
        );
    }
}

export default Loading;
