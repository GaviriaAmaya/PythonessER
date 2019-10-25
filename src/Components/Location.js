import React, { Component } from 'react';

export default class location extends Component {

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <input type="text" 
                placeholder="Direccion"
                name="title" />
            <br />
        </form>);
    }
}