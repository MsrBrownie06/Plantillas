import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import Global from "../../Global";

export default class NuevaApuesta extends Component {
  cajaUser = React.createRef();
  cajaReal = React.createRef();
  cajaAtletico = React.createRef();
  cajaFecha = React.createRef();

  state = {
    status: false,
  };

  fecha = (fecha) => {
    var partes = fecha.split("-");
    return partes[2] + "/" + partes[1] + "/" + partes[0];
  };

  insertarApuesta = (e) => {
    e.preventDefault();
    var user = this.cajaUser.current.value;
    var real = this.cajaReal.current.value;
    var atletico = this.cajaAtletico.current.value;
    var fecha = this.cajaFecha.current.value;

    var fechaFinal = this.fecha(fecha);

    var apuesta = {
      idApuesta: 0,
      usuario: user,
      resultado: real + "-" + atletico,
      fecha: fechaFinal,
    };

    var request = "/api/Apuestas";
    var url = Global.urlChampions + request;
    axios.post(url, apuesta).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.status === true && <Redirect to="/apuestas" />}
        <h1 className="text-center">NUEVA APUESTA</h1>
        <div className="row justify-content-center">
          <form
            className="col-6 text-center fw-bold p-3"
            style={{
              backgroundColor: "lightgreen",
              border: "solid 3px darkgreen",
              color: "darkgreen",
            }}
            onSubmit={this.insertarApuesta}
          >
            <div className="mb-3">
              <label className="form-label">Usuario:</label>
              <input
                className="form-control"
                type="text"
                placeholder="introduzca su usuario"
                ref={this.cajaUser}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Real Madrid:</label>
              <input
                className="form-control"
                type="text"
                placeholder="Resultado Real Madrid"
                ref={this.cajaReal}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Atletico de Madrid:</label>
              <input
                className="form-control"
                type="text"
                placeholder="resultado Altelico de Madrid"
                ref={this.cajaAtletico}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha:</label>
              <input
                className="form-control"
                type="date"
                ref={this.cajaFecha}
              />
            </div>
            <button className="btn btn-outline-success">Nueva Apuesta</button>
          </form>
        </div>
      </div>
    );
  }
}
