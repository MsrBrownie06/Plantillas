import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";
import axios from "axios";

export default class Menu extends Component {
  state = {
    series: [],
    estado: false,
  };

  cargarSeries = () => {
    var request = "/api/Series";
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
        estado: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarSeries();
  };

  render() {
    if (this.state.estado === true) {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          aria-label="Tenth navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample08"
              aria-controls="navbarsExample08"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-start"
              id="navbarsExample08"
            >
              <img
                src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9371.png"
                alt="menu"
                width="10%"
              />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/newPersonaje" className="nav-link active">
                    Nuevo Personaje
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/modificar" className="nav-link active">
                    Modificar Personaje
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="desplegable"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Series
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="desplegable">
                    {this.state.series.map((serie, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="dropdown-item"
                            to={"/serie/" + serie.idSerie}
                          >
                            {serie.nombre}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return <h1>Cargando menu</h1>;
    }
  }
}
