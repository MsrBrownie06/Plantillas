import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SeleccionMultiple extends Component {
  seleccionarMulti = React.createRef();
  state = {
    seleccionados: "",
  };

  dibujarOpciones = () => {
    var options = [];
    for (let i = 0; i <= 10; i++) {
      options.push(
        <option key={i} value={"Elemento " + i}>
          {"Elemento " + i}
        </option>
      );
    }
    return options;
  };

  mostrarSeleccion = (e) => {
    e.preventDefault();
    var opciones = this.seleccionarMulti.current.options;
    var datos = "";
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].selected === true) {
        datos += opciones[i].value + " , ";
      }
    }
    this.setState({
      seleccionados: datos,
    });
  };

  render() {
    return (
      <div>
        <h1>Seleccion multiples elementos</h1>
        <form onSubmit={this.mostrarSeleccion}>
          <label>Seleccione elementos: </label>
          <select multiple size="10" ref={this.seleccionarMulti}>
            {this.dibujarOpciones()}
          </select>
          <Button type="submit">mostrar seleccionados</Button>
        </form>
        <hr />
        <h1 style={{ color: "purple" }}>{this.state.seleccionados}</h1>
      </div>
    );
  }
}
