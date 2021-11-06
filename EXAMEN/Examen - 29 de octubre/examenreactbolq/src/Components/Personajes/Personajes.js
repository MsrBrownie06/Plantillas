import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";

export default class Personajes extends Component {
  state = {
    personajes: [],
    estado: false,
  };

  cargarPersonajes = () => {
    var id = this.props.idSerie;
    var request = "/api/Series/PersonajesSerie/" + id;
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        estado: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarPersonajes();
  };

  render() {
    if (this.state.estado === true) {
      return (
        <div>
          <div className="row justify-content-center mt-5">
            <div className="col-8 text-center">
              <Link
                to={"/serie/" + this.props.idSerie}
                className={"btn btn-danger"}
              >
                Volver
              </Link>
              <table className="table table-striped table-hover table-responsive table-bordered border-dark">
                <thead
                  className="fw-bold"
                  style={{ backgroundColor: "midnightblue", color: "white" }}
                >
                  <tr>
                    <td>Personaje</td>
                    <td>Imagen</td>
                  </tr>
                </thead>
                <tbody className="table-info table-bordered border-dark">
                  {this.state.personajes.map((personaje, index) => {
                    return (
                      <tr key={index}>
                        <td>{personaje.nombre}</td>
                        <td>
                          <img
                            width="300px"
                            src={personaje.imagen}
                            alt={personaje.nombre}
                          />
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
      return <h1>Cargando personajes</h1>;
    }
  }
}
