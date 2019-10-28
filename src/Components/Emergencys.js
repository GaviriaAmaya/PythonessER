import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

export default class Emergencys extends Component {

    render() {
        return(
        <Dropdown onSubmit={this.onSubmit}>
            <input type="text" 
                placeholder="Emergencia" 
                name="title"
            />
            <br/>
        </Dropdown>
    )
}
    
}
