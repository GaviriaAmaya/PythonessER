import React, { Component } from 'react';

export default class Emergencys extends Component {

    render() {
        return(
        <buttondropdown onSubmit={this.onSubmit}>
            <input type="text" 
                placeholder="Emergencia" 
                name="title"
            />
            <br/>
        </buttondropdown>
    )
}
    
}