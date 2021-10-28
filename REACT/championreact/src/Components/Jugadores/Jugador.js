import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";

export default class Jugador extends Component {
  state = {
    jugador: {},
    status: false,
  };

  cargarJugador = () => {
    var nombre = this.props.nombre;
    var request = "/api/Jugadores/BuscadorJugadores/" + nombre;
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        jugador: res.data[0],
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarJugador();
  };

  render() {
    if (this.state.status === true) {
      return (
        <div>
          <div className="mt-5 row justify-content-center">
            <div className="card col-8 p-0">
              <div className="card-header text-center">
                {this.state.jugador.nombre}
              </div>
              <div className="row justify-content-center">
                <img
                  src={this.state.jugador.imagen}
                  alt={this.state.jugador.nombre}
                  className="card-img py-3"
                  style={{ width: "300px" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title ">{this.state.jugador.posicion}</h5>
                <p>Fecha de Nacimiento: {this.state.jugador.fechaNacimiento}</p>
                <p>Pais: {this.state.jugador.pais}</p>
                <Link
                  to={"/jugadores/" + this.props.idEquipo}
                  className="btn btn-outline-success"
                >
                  Jugadores
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Cargando jugador</h1>;
    }
  }
}
