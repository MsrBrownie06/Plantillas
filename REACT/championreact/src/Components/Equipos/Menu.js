import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  state = {
    equipos: [],
    status: false,
  };

  cargarEquipos = () => {
    var request = "/api/Equipos";
    var url = Global.urlChampions + request;
    axios.get(url).then((res) => {
      this.setState({
        equipos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarEquipos();
  };

  render() {
    if (this.state.status === true) {
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
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/UEFA_Champions_League_2021-2024_Logo.png"
                alt="champions"
                width="75px"
              />
              <h1>Champions</h1>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/apuestas">
                    Apuestas
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/equipos"
                    id="desplegable"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Equipos
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="desplegable">
                    {this.state.equipos.map((equipo, index) => {
                      return (
                        <li key={index}>
                          <Link
                            className="dropdown-item"
                            to={"/equipo/" + equipo.idEquipo}
                          >
                            {equipo.nombre}
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
      return <h1>Cargando....</h1>;
    }
  }
}
