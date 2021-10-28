import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";

export default class Jugadores extends Component {
  state = {
    jugadores: [],
    status: false,
  };

  cargarJugadores = () => {
    var idEquipo = this.props.idEquipo;
    var request = "/api/Jugadores/JugadoresEquipo/" + idEquipo;
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        jugadores: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarJugadores();
  };

  render() {
    if (this.state.status === true) {
      return (
        <div>
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <Link
                to={"/equipo/" + this.props.idEquipo}
                className="btn btn-outline-success"
              >
                Volver
              </Link>
              <table className="table table-striped table-hover ">
                <thead
                  className="fw-bold text-center"
                  style={{
                    color: "darkorange",
                    backgroundColor: "lightyellow",
                  }}
                >
                  <tr>
                    <td>NOMBRE</td>
                    <td>IMAGEN</td>
                    <td>DETALLES</td>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {this.state.jugadores.map((jugador, index) => {
                    return (
                      <tr key={index}>
                        <td className="fw-bold">{jugador.nombre}</td>
                        <td>
                          <img src={jugador.imagen} alt={jugador.nombre} />
                        </td>
                        <td>
                          <Link
                            to={
                              "/jugador/" +
                              this.props.idEquipo +
                              "/" +
                              jugador.nombre
                            }
                            className="btn btn-outline-info"
                          >
                            Detalles
                          </Link>
                        </td>
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
      return <h1>Cargando Jugadores...</h1>;
    }
  }
}
