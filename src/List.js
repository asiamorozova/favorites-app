import React, { Component } from "react";

export default class List extends Component {
  render() {
    console.log(this.props.pokemon);
    return (
      <div>
        {this.props.pokemon.map(pokemon => (
          <div className="pokemon-box">{pokemon.name}</div>
        ))}
      </div>
    );
  }
}
