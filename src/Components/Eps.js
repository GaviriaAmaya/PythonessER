import React, { Component } from 'react';

export default class Epslist extends Component {

    render() {
        return(
        <buttondropdown onSubmit={this.onSubmit}>
            <input type="text" 
                placeholder="EPS" 
                name="title"
            />
            <br/>
        </buttondropdown>
    )
}
    
}