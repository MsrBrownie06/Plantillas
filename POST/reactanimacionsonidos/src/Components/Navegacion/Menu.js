import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";
import axios from "axios";

export default class Menu extends Component {
  state = {
    elementos: [],
    estado: false,
  };

  cargarElementosMenu() {
    var request = "elements";
    var url = Global.urlGenshin + request;
    axios.get(url).then((res) => {
      this.setState({
        elementos: res.data,
        estado: true,
      });
    });
  }

  componentDidMount = () => {
    this.cargarElementosMenu();
  };

  render() {
    if (this.state.estado === true) {
      return (
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
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
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample08"
            >
              <ul className="navbar-nav">
                {this.state.elementos.map((obj, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <Link to={"/elemento/" + obj} className="nav-link active">
                        Elemento {obj}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return <h1>Cargando Menu</h1>;
    }
  }
}
