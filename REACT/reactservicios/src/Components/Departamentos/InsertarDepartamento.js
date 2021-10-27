import axios from "axios";
import Global from "../../Global";
import { Redirect } from "react-router";
import React, { Component } from "react";

export default class InsertarDepartamento extends Component {
  cajaNum = React.createRef();
  cajaNom = React.createRef();
  cajaLoc = React.createRef();

  state = {
    mensaje: "",
    status: false,
  };

  insertarDepartamento = (e) => {
    e.preventDefault();
    var num = this.cajaNum.current.value;
    var nom = this.cajaNom.current.value;
    var loc = this.cajaLoc.current.value;

    var departamento = {
      numero: parseInt(num),
      nombre: nom,
      localidad: loc,
    };

    var request = "/webresources/departamentos/post";
    var url = Global.urlCrudDepartamentos + request;
    axios.post(url, departamento).then((res) => {
      this.setState({
        mensaje: "Departamento insertado correctamente",
        status: true,
      });
    });
  };

  render() {
    if (this.state.status === true) {
      return <Redirect to="/departamentos" />;
    }
    return (
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Insertar Departamentos</h1>
          {this.state.status === true && (
            <h2
              style={{
                color: "green",
                padding: "5px",
                backgroundColor: "lightgreen",
              }}
            >
              {this.state.mensaje}
            </h2>
          )}
          <form onSubmit={this.insertarDepartamento}>
            <div className="form-group row mb-4">
              <label>Número: </label>
              <input type="text" className="form-control" ref={this.cajaNum} />
            </div>
            <div className="form-group row mb-4">
              <label>Nombre: </label>
              <input type="text" className="form-control" ref={this.cajaNom} />
            </div>
            <div className="form-group row mb-4">
              <label>Localidad: </label>
              <input type="text" className="form-control" ref={this.cajaLoc} />
            </div>
            <button className="btn btn-outline-success">
              Insertar Departamento
            </button>
          </form>
        </div>
      </div>
    );
  }
}
