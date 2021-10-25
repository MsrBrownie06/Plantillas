import React, { Component } from "react";
//import { Form } from "react-bootstrap";
import axios from "axios";
import Global from "../../Global";

export default class BuscadorCoches1 extends Component {
  state = {
    coches: [],
    marcas: [],
  };

  mostrarCoches = (e) => {
    if (e != null) {
      e.preventDefault();
    }
  };

  mostrarMarcas = (e) => {
    if (e != null) {
      e.preventDefault();
    }
  };

  componentDidMount = () => {
    var request = "/webresources/coches";
    var url = Global.urlCoches + request;
    axios.get(url).then((res) => {
      this.setState({
        coches: res.data,
      });
    });
  };

  render() {
    return (
      <div>
        <form>
          <select>
            {this.state.coches.map((coche, index) => {
              return <option></option>;
            })}
          </select>
          <button>Mostrar Coches</button>
          <button>Mostrar Marca Seleccionada</button>
        </form>
        <table>
          <thead>
            <tr>
              <td>MARCA</td>
              <td>MODELO</td>
              <td>CONDUCTOR</td>
              <td>IMAGEN</td>
            </tr>
          </thead>
          <tbody>
            {this.state.coches.map((coche, index) => {
              return (
                <tr>
                  <td>{coche.marca}</td>
                  <td>{coche.modelo}</td>
                  <td>{coche.conductor}</td>
                  <td>
                    <img src={coche.imagen} alt={coche.modelo} width="100px" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
