import React, { Component } from 'react';
import AddClient from './AddClient';
import ActionUpdate from './ActionUpdate';

class Action extends Component {
    render() {
        return (
            <div className="Action">
                <ActionUpdate clients={this.props.clients} />
                <hr/>
                <AddClient />
            </div>
        );
    }
}

export default Action;
