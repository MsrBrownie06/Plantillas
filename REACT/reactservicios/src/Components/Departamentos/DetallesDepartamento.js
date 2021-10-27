import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class DetallesDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Detalles Departamento</h1>
        <h2>Número: {this.props.idDept}</h2>
        <h2>Nombre: {this.props.nomDept}</h2>
        <h2>Localidad: {this.props.locDept}</h2>
        <NavLink to={"/departamentos"} className="btn btn-outline-secondary">
          Volver al Listado
        </NavLink>

        <NavLink
          to={"/updateDepartamentos/" + this.props.idDept}
          className="btn btn-outline-warning"
        >
          Editar
        </NavLink>
      </div>
    );
  }
}
