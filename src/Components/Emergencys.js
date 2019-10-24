import React, { Component } from 'react';

export default class Emergencys extends Component {

    render() {
        return(
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="write a task" 
            name="title"
            />
            <br/>
        </form>
    )
}
    
}