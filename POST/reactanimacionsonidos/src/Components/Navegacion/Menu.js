import React, { Component, useState } from "react";
//importamos el react Spring
import { useSpring, config, animated } from 'react-spring';
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

const MenuAnimado = (props) => {
  const { obj, index, imagen } = props;

  const [opcion, setOpcion] = useState(false)

  const animacion = useSpring({
    from: { height: opcion ? "130px" : "150px", backgroundColor: imagen.css },
    to: { height: opcion ? "150px" : "130px" },
    config: { config: config.gentle }
  });

  const letras = useSpring({
    from: { opacity: opcion ? "0" : "1" },
    to: { opacity: opcion ? "1" : "0" },
    config: { config: config.default }
  })

  return (
    <animated.li
      onMouseOver={() => { setOpcion(true) }}
      onMouseOut={() => { setOpcion(false) }}
      style={animacion}
      key={index}
      className="nav-item btn mx-2"
    >
      <Link to={"/elemento/" + obj} className="nav-link active">
        <img
          src={imagen.img}
          alt={obj}
          width="100px"
        />
        <animated.div style={letras} className="row pt-2 text-center">
          <b>{obj}</b>
        </animated.div>
      </Link>
    </animated.li>
  )
}




export default class Menu extends Component {


  state = {
    elementos: [],
    estilos: [],
    imagenes: [
      { img: anemoImg, css: "rgb(186,245,223)" },
      { img: cryoImg, css: "rgb(190,234,233)" },
      { img: dendroImg, css: "rgb(191,210,135)" },
      { img: electroImg, css: "rgb(216,188,239)" },
      { img: geoImg, css: "rgb(244,223,160)" },
      { img: hydroImg, css: "rgb(160,232,237)" },
      { img: pyroImg, css: "rgb(248,193,158)" },
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
                    <MenuAnimado key={index} obj={obj} index={index} imagen={this.state.imagenes[index]} />
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
