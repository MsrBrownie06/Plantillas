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

function MenuAnimado(props) {
  const { obj, index, imagen } = props;

  const [opcion, setOpcion] = useState(false)

  const animacion = useSpring({
    from: { height: opcion ? "130px" : "150px", backgroundColor: imagen.backgroundColor },
    to: { height: opcion ? "150px" : "130px" },
    config: { config: config.gentle }
  });

  const letras = useSpring({
    from: { opacity: opcion ? "0" : "1", color: imagen.colorText },
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
      <Link to={"/elemento/" + obj} className="nav-link">
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
    imagenes: [
      { img: anemoImg, backgroundColor: "rgb(186,245,223)", colorText: "rgb(6,144,110)" },
      { img: cryoImg, backgroundColor: "rgb(190,234,233)", colorText: "rgb(27,154,156)" },
      { img: dendroImg, backgroundColor: "rgb(191,210,135)", colorText: "rgb(5,150,5)" },
      { img: electroImg, backgroundColor: "rgb(216,188,239)", colorText: "rgb(93,23,144)" },
      { img: geoImg, backgroundColor: "rgb(244,223,160)", colorText: "rgb(172,94,22)" },
      { img: hydroImg, backgroundColor: "rgb(160,232,237)", colorText: "rgb(12,100,140)" },
      { img: pyroImg, backgroundColor: "rgb(248,193,158)", colorText: "rgb(100,37,5)" },
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
