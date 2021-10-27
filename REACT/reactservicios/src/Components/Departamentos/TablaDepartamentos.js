import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { NavLink } from "react-router-dom";

export default class TablaDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  cargarDepartamentos = () => {
    var request = "/webresources/departamentos";
    var url = Global.urlCrudDepartamentos + request;
    axios.get(url).then((res) => {
      //Despues de obtener los datos cambiamos el state
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamentos();
  };

  render() {
    if (this.state.status === true) {
      return (
        <div>
          <h1>Tabla de Departamentos</h1>
          <table className="table table-striped table-hover">
            <thead
              className="text-white fw-bold"
              style={{ backgroundColor: "purple" }}
            >
              <tr>
                <td>NUMERO</td>
                <td>NOMBRE</td>
                <td>LOCALIDAD</td>
                <td>ACCION</td>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dept, index) => {
                return (
                  <tr key={index}>
                    <td>{dept.numero}</td>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
                    <td>
                      <NavLink
                        to={
                          "/detallesDepartamentos/" +
                          dept.numero +
                          "/" +
                          dept.nombre +
                          "/" +
                          dept.localidad
                        }
                        className="btn btn-outline-info"
                      >
                        Detalles
                      </NavLink>

                      <NavLink
                        to={"/updateDepartamentos/" + dept.numero}
                        className="btn btn-outline-warning"
                      >
                        Editar
                      </NavLink>
                      <NavLink
                        to={
                          "/deleteDept/" +
                          dept.numero +
                          "/" +
                          dept.nombre +
                          "/" +
                          dept.localidad
                        }
                        className="btn btn-outline-danger"
                      >
                        eliminar
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else if (this.state.status === false) {
      return <h1>Cargando registros....</h1>;
    }
  }
}
