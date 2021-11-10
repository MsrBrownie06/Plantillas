import React, { Component } from "react";

export default class Elemento extends Component {
  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Elemento {this.props.vision}</h1>
      </div>
    );
  }
}
