import React, { Component } from "react";

class Numero extends Component {
  sumarNumeros = () => {
    this.props.MetodoSumar(this.props.Num);
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>
            <span>Número: {this.props.Num}</span>
          </td>
          <td>
            <button onClick={() => this.sumarNumeros()}>Sumar</button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Numero;
