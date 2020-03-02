import React, { Component } from "react";
import List from "./List";
import request from "superagent";

export default class Search extends Component {
  state = {
    pokemon: [],
    input: ""
  };
  handleSearch = async () => {
    const data = await request.get(
      `https://cryptic-bastion-20678.herokuapp.com/api/pokemon/?search=${this.state.input}`
    );

    this.setState({
      pokemon: data.body.results
    });
    //console.log(this.state.pokemon);
  };
  render() {
    console.log(this.state.input);
    return (
      <div>
        <input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button onClick={this.handleSearch}>Search for pokemon</button>
        <List pokemon={this.state.pokemon} />
      </div>
    );
  }
}
