import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import Global from "../../Global";

export default class EliminarDepartamento extends Component {
  cajaNum = React.createRef();

  state = {
    status: false,
  };

  eliminarDept = (e) => {
    e.preventDefault();

    var id = this.cajaNum.current.value;
    var request = "/webresources/departamentos/delete/" + id;
    var url = Global.urlCrudDepartamentos + request;
    axios.delete(url).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    if (this.state.status === true) {
      return <Redirect to="/departamentos" />;
    }
    return (
      <div>
        <h1>
          ¿Desea eliminar el departamento de {this.props.nombre} en{" "}
          {this.props.localidad}?
        </h1>
        <form onSubmit={this.eliminarDept}>
          <input
            type="hidden"
            defaultValue={this.props.idDept}
            ref={this.cajaNum}
          />
          <button className="btn btn-outline-danger">
            Eliminar Departamento
          </button>
          <NavLink to={"/departamentos"} className="btn btn-outline-secondary">
            Cancelar
          </NavLink>
        </form>
      </div>
    );
  }
}
