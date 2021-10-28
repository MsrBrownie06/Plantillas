import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";

export default class Equipo extends Component {
  state = {
    equipo: {},
    status: false,
  };

  cargarEquipo = () => {
    var id = this.props.id;
    var request = "/api/Equipos/" + id;
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        equipo: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarEquipo();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.id !== this.props.id) {
      this.cargarEquipo();
    }
  };

  render() {
    if (this.state.status === true) {
      return (
        <div>
          <div className="mt-5 row justify-content-center">
            <div className="card col-8 p-0">
              <div className="card-header text-center">
                {this.state.equipo.nombre}
              </div>
              <div className="row justify-content-center">
                <img
                  src={this.state.equipo.imagen}
                  alt="nombre"
                  className="card-img py-3"
                  style={{ width: "300px" }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Champions: {this.state.equipo.champions}
                </h5>
                <p className="card-text">{this.state.equipo.descripcion}</p>
                <div className="row">
                  <div className="col-6 d-flex justify-content-end">
                    <Link
                      to={"/jugadores/" + this.props.id}
                      className="btn btn-success"
                    >
                      Jugadores
                    </Link>
                  </div>
                  <div className="col-6 d-flex justify-content-start">
                    <Link to="/" className="btn btn-primary">
                      Volver
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Cargando Equipo</h1>;
    }
  }
}
