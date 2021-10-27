import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
export default class MaestroDetalleEmp extends Component {
  state = {
    empleados: [],
  };

  cargarEmpleados = () => {
    var idDept = this.props.idDept;
    var request = "/api/Empleados/EmpleadosDepartamento/" + idDept;
    var url = Global.urlEmpleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleados: res.data,
      });
    });
  };

  componentDidMount = () => {
    //cuando monte la etiqueta (despues del render)
    this.cargarEmpleados();
  };

  componentDidUpdate = (propsAnterior) => {
    if (propsAnterior.idDept !== this.props.idDept) {
      console.log(propsAnterior.idDept);
      console.log(this.props.idDept);
      this.cargarEmpleados();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "purple" }}>
          Empleados del departamento {this.props.idDept}
        </h1>
        {this.state.empleados.length > 0 &&
          this.state.empleados.map((empleado, index) => {
            return (
              <h3 key={index} style={{ color: "green" }}>
                {empleado.apellido}, {empleado.oficio}
              </h3>
            );
          })}
      </div>
    );
  }
}
