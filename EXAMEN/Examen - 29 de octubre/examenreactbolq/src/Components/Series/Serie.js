import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";

export default class Serie extends Component {
  state = {
    serie: {},
    estado: false,
  };

  cargarSerie = () => {
    var id = this.props.idSerie;
    var request = "/api/Series/" + id;
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        serie: res.data,
        estado: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarSerie();
  };

  componentDidUpdate = (prevprops) => {
    if (prevprops.idSerie !== this.props.idSerie) {
      this.cargarSerie();
    }
  };

  render() {
    if (this.state.estado === true) {
      return (
        <div>
          <div className="mt-5 row justify-content-center">
            <div className="card col-8 p-0">
              <div className="row justify-content-center">
                <img
                  src={this.state.serie.imagen}
                  alt={this.state.serie.nombre}
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title ">{this.state.serie.nombre}</h5>
                <p>Puntuacion: {this.state.serie.puntuacion}</p>
                <p>Año: {this.state.serie.anyo}</p>
                <Link
                  to={"/personajes/" + this.props.idSerie}
                  className="btn btn-outline-success"
                >
                  Personajes
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Cargando Serie</h1>;
    }
  }
}
