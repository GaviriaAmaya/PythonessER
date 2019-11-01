import React, { Component } from 'react';

export default class Epslist extends Component {

    constructor(props){
        super(props);
        this.state = {
            eps:null
        };
    }

    render() {
        return(
        <form onSubmit={this.setState}>
            <input type="text" 
                placeholder="EPS" 
                name="title"
            />
            <br/>
        </form>
    )
}
    
}