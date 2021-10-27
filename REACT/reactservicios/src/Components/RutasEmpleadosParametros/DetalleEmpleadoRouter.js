import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class DetalleEmpleadoRouter extends Component {
  constructor(props) {
    super(props);
    console.log("Id Emp " + this.props.idempleado);
  }

  state = {
    empleado: {},
    status: false,
  };

  buscarEmpleado = () => {
    var request = "/api/empleados/" + this.props.idempleado;
    var url = Global.urlEmpleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.buscarEmpleado();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.idempleado !== this.props.idempleado) {
      this.buscarEmpleado();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "purple" }}>Detalles Empleados</h1>
        {this.state.status === true && (
          <div>
            <h2 style={{ color: "green" }}>{this.state.empleado.apellido}</h2>
            <h2 style={{ color: "orange" }}>{this.state.empleado.oficio}</h2>
            <h2 style={{ color: "cyan" }}>{this.state.empleado.salario} €</h2>
          </div>
        )}
      </div>
    );
  }
}
