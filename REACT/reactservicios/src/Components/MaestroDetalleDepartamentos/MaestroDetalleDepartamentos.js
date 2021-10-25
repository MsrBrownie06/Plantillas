import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";

export default class MaestroDetalleDepartamentos extends Component {
  selectDepartRef = React.createRef();

  state = {
    departamentos: [],
    empleados: [],
    status: false,
  };

  buscarEmpleados = (e) => {
    e.preventDefault();
    var valueDepart = this.selectDepartRef.current.value;
    var request = "api/Empleados/EmpleadosDepartamento/" + valueDepart;
    var url = Global.urlEmpleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleados: res.data,
      });
    });
  };

  cargarDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.urlDepartamentos + request;
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    //estoy cargando el metodo cargarDepartamentos que llama a un servicio que nos carga el state(departamentos) para que despues se muestre
    this.cargarDepartamentos();
  };
  render() {
    return (
      <div>
        <h1>Maestro detalle Departamentos Empleados</h1>
        <form>
          <select ref={this.selectDepartRef}>
            {/* //preguntamos primero si el status del state que hemos creado esta a TRUE para que podamos dibujar los datos del servicio una vez se han consumido */}
            {this.state.status === true &&
              this.state.departamentos.map((dept, index) => {
                return (
                  <option key={index} value={dept.Numero}>
                    {dept.Nombre}
                  </option>
                );
              })}
          </select>
          <button onClick={this.buscarEmpleados}>Mostrar Empleados</button>
        </form>
        <hr />
        {this.state.empleados.length > 0 && (
          <ul>
            {this.state.empleados.map((empleado, index) => {
              return <li key={index}>{empleado.apellido}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
