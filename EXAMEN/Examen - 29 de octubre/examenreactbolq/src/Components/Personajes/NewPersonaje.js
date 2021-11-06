import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { Redirect } from "react-router";

export default class NewPersonaje extends Component {
  cajaNom = React.createRef();
  cajaImg = React.createRef();
  cajaSerie = React.createRef();

  state = {
    series: [],
    estado: false,
    volver: false,
  };

  return = "";

  insertarPersonaje = (e) => {
    e.preventDefault();
    let nom = this.cajaNom.current.value;
    let img = this.cajaImg.current.value;
    let serie = this.cajaSerie.current.value;

    let PersonajeNew = {
      idPersonaje: 0,
      nombre: nom,
      imagen: img,
      idSerie: parseInt(serie),
    };

    let request = "/api/Personajes";
    let url = Global.urlSeries + request;
    axios.post(url, PersonajeNew).then((res) => {
      this.return = "/personajes/" + serie;
      this.setState({
        volver: true,
      });
    });
  };

  cargarLista = () => {
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
    this.cargarLista();
  };
  render() {
    if (this.state.estado === true) {
      return (
        <div>
          {this.state.volver === true && <Redirect to={this.return} />}
          <div className="row justify-content-center mt-5">
            <div
              className="col-4 rounded-3"
              style={{
                backgroundColor: "lightgreen",
                border: "solid 3px darkgreen",
                color: "darkgreen",
              }}
            >
              <form
                onSubmit={this.insertarPersonaje}
                className="text-center p-4 fw-bold"
              >
                <div className="mb-3">
                  <h3>INSERTAR PERSONAJE</h3>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="introduzca nombre"
                    ref={this.cajaNom}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Imagen:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="introduzca imagen"
                    ref={this.cajaImg}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Serie:</label>
                  <select className="form-select" ref={this.cajaSerie}>
                    {this.state.series.map((serie, index) => {
                      return (
                        <option key={index} value={serie.idSerie}>
                          {serie.nombre}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <button className="btn btn-outline-success" type="submit">
                  Insertar Personaje
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Cargando Formulario</h1>;
    }
  }
}
