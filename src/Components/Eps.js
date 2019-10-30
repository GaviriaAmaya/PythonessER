import React, { Component } from 'react';

export default class Epslist extends Component {

    render() {
        return(
        <form onSubmit={this.onSubmit}>
            <input type="text" 
                placeholder="EPS" 
                name="title"
            />
            <br/>
        </form>
    )
}
    
}