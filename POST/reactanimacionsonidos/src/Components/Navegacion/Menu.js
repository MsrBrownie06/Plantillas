import React, { Component } from "react";
import { Link } from "react-router-dom";
import Global from "../../Global";
import axios from "axios";
import anemoImg from "../../Assets/img/visiones/anemo.png";
import pyroImg from "../../Assets/img/visiones/pyro.png";
import cryoImg from "../../Assets/img/visiones/cryo.png";
import hydroImg from "../../Assets/img/visiones/hydro.png";
import dendroImg from "../../Assets/img/visiones/dendro.png";
import electroImg from "../../Assets/img/visiones/electro.png";
import geoImg from "../../Assets/img/visiones/geo.png";

export default class Menu extends Component {
  state = {
    elementos: [],
    imagenes: [
      anemoImg,
      cryoImg,
      dendroImg,
      electroImg,
      geoImg,
      hydroImg,
      pyroImg,
    ],
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
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample08"
            >
              <ul className="navbar-nav">
                {this.state.elementos.map((obj, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <Link to={"/elemento/" + obj} className="nav-link active">
                        <img
                          src={this.state.imagenes[index]}
                          alt={obj}
                          width="100px"
                        />{" "}
                        {obj}
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
