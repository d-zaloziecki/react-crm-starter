import React, { Component } from 'react';
import AddClient from './AddClient';
import UpdateClient from './UpdateClient';

class Action extends Component {
    render() {
        return (
            <div className="Action">
                <UpdateClient />
                <hr/>
                <AddClient />
            </div>
        );
    }
}

export default Action;
