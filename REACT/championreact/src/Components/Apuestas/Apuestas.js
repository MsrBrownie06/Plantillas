import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";

export default class Apuestas extends Component {
  state = {
    apuestas: [],
    status: false,
  };

  cargarApuestas = () => {
    var request = "/api/Apuestas";
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        apuestas: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarApuestas();
  };

  render() {
    if (this.state.status === true) {
      return (
        <div>
          <div className="row justify-content-center mt-5">
            <div className="col-6 text-center">
              <Link to="/nuevaApuesta" className="btn btn-danger">
                Realizar Apuesta
              </Link>
            </div>
          </div>
          <div className="row text-danger text-center mt-3">
            <h1>Local: Real Madrid, Visitante: Atlético de Madrid</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 mt-3">
              <table className="table table-striped table-hover table-info">
                <thead className="text-center fw-bold">
                  <tr>
                    <td>USUARIO</td>
                    <td>RESULTADO</td>
                    <td>FECHA</td>
                  </tr>
                </thead>
                <tbody className="text-center ">
                  {this.state.apuestas.map((apuesta, index) => {
                    return (
                      <tr key={index}>
                        <td>{apuesta.usuario}</td>
                        <td>{apuesta.resultado}</td>
                        <td>{apuesta.fecha}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Cargando Apuestas</h1>;
    }
  }
}
