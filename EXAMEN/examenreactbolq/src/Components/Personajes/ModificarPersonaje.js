import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { Redirect } from "react-router";

export default class ModificarPersonaje extends Component {
  cajaPersonaje = React.createRef();
  cajaSerie = React.createRef();

  state = {
    personajes: [],
    series: [],
    estadoP: false,
    estadoS: false,
    volver: false,
  };

  mostrarPersonaje = () => {
    var idPer = this.cajaPersonaje.current.value;
    var imagen = this.state.personajes.filter(
      (personaje) => personaje.idPersonaje == idPer
    )[0].imagen;
    document.getElementById("imgPersonaje").setAttribute("src", imagen);
  };

  mostrarSerie = () => {
    var idSer = this.cajaSerie.current.value;
    var imagen = this.state.series.filter((serie) => serie.idSerie == idSer)[0]
      .imagen;
    document.getElementById("imgSerie").setAttribute("src", imagen);
  };

  cargarSeries = () => {
    var request = "/api/Series";
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
        estadoS: true,
      });
    });
  };
  cargarPersonajes = () => {
    var request = "/api/Personajes";
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        estadoP: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarSeries();
    this.cargarPersonajes();
  };
  return = "";

  modificarPersonaje = (e) => {
    e.preventDefault();

    var idPer = this.cajaPersonaje.current.value;
    var idSer = this.cajaSerie.current.value;

    var request = "/api/Personajes/" + idPer + "/" + idSer;
    var url = Global.urlSeries + request;
    axios.put(url).then((res) => {
      this.return = "/personajes/" + idSer;
      this.setState({
        volver: true,
      });
    });
  };

  render() {
    if (this.state.estadoP === true && this.state.estadoS === true) {
      return (
        <div>
          {this.state.volver === true && <Redirect to={this.return} />}
          <div className="row justify-content-center mt-5">
            <div
              className="col-4 rounded-3"
              style={{
                backgroundColor: "lightyellow",
                border: "solid 3px darkorange",
                color: "darkorange",
              }}
            >
              <form
                onSubmit={this.modificarPersonaje}
                className="text-center p-4 fw-bold"
              >
                <div className="mb-3">
                  <h3>MODIFICAR PERSONAJE</h3>
                </div>
                <div className="mb-3">
                  <label className="form-label">Serie:</label>
                  <select
                    onChange={() => this.mostrarSerie()}
                    className="form-select"
                    ref={this.cajaSerie}
                  >
                    {this.state.series.map((serie, index) => {
                      return (
                        <option key={index} value={serie.idSerie}>
                          {serie.nombre}
                        </option>
                      );
                    })}
                  </select>
                  <img id="imgSerie" src="" alt="" width="200px" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Personaje:</label>
                  <select
                    onChange={() => this.mostrarPersonaje()}
                    className="form-select"
                    ref={this.cajaPersonaje}
                  >
                    {this.state.personajes.map((personaje, index) => {
                      return (
                        <option key={index} value={personaje.idPersonaje}>
                          {personaje.nombre}
                        </option>
                      );
                    })}
                  </select>
                  <img id="imgPersonaje" src="" alt="" width="200px" />
                </div>

                <button className="btn btn-outline-warning" type="submit">
                  Modificar
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Cargando Formulario Modificar</h1>;
    }
  }
}
