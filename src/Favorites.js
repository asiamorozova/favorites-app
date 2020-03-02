import React, { Component } from 'react';
import List from './List';

export default class Favorites extends Component { 
    state= {
        pokemon:[]
    }
    render() {
        return (
            <div>
                <List pokemon={ this.state.pokemon }/>
            </div>
        )
    }
}