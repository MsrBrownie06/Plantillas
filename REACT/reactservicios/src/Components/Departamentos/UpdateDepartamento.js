import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import Global from "../../Global";

export default class UpdateDepartamento extends Component {
  cajaNum = React.createRef();
  cajaNom = React.createRef();
  cajaLoc = React.createRef();

  state = {
    departamento: null,
    status: false,
  };

  buscarDepartamento = () => {
    var id = this.props.idDept;
    var request = "/webresources/departamentos/" + id;
    var url = Global.urlCrudDepartamentos + request;
    axios.get(url).then((res) => {
      this.setState({
        departamento: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.buscarDepartamento();
  };

  modificarDept = (e) => {
    e.preventDefault();
    var num = parseInt(this.cajaNum.current.value);
    var nom = this.cajaNom.current.value;
    var loc = this.cajaLoc.current.value;

    var departamento = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };

    var request = "/webresources/departamentos/put";
    var url = Global.urlCrudDepartamentos + request;
    axios.put(url, departamento).then((res) => {
      //despues de actualizar cambiamos el state
      this.setState({
        status: true,
      });
    });
  };

  render() {
    if (this.state.status === true) {
      return <Redirect to={"/departamentos"} />;
    }

    return (
      <div>
        <h1>Update Departamentos</h1>
        <div className="row justify-content-center">
          {this.state.departamento !== null && (
            <form
              className="col-4 p-3 my-5 rounded"
              style={{
                backgroundColor: "lightyellow",
                border: "3px solid darkorange",
              }}
              onSubmit={this.modificarDept}
            >
              <div className="form-group mb-3">
                <label className="form-label">Numero</label>
                <input
                  className="form-control"
                  type="text"
                  ref={this.cajaNum}
                  defaultValue={this.state.departamento.numero}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  ref={this.cajaNom}
                  defaultValue={this.state.departamento.nombre}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Localidad</label>
                <input
                  className="form-control"
                  type="text"
                  ref={this.cajaLoc}
                  defaultValue={this.state.departamento.localidad}
                />
              </div>
              <button className="btn btn-outline-warning mx-2">
                Modificar
              </button>
              <NavLink to={"/departamentos"} className="btn btn-secondary mx-2">
                Volver al Listado
              </NavLink>
            </form>
          )}
        </div>
      </div>
    );
  }
}
