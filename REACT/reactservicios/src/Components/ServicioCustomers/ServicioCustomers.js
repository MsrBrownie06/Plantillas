import React, { Component } from "react";
//agregaremos la libreria axios
import axios from "axios";
import Global from "../../Global";
export default class ServicioCustomers extends Component {
  //almacenaremos la url del servicio a consumir

  urlSer = Global.urlNorthWind; //estamos usando el archivo Global que esta en el SRC del proyecto, ya que la url base no cambia

  state = {
    customers: [],
  };
  cargarCustomers = () => {
    var request = "customers?format=json";
    axios.get(this.urlSer + request).then((res) => {
      console.log(res.data);
      this.setState({
        customers: res.data.results,
      });
    });
  };

  //solo queremos cargar los clientes al iniciar la pagina sin haber hecho el render
  componentWillMount = () => {
    this.cargarCustomers();
  };

  render() {
    return (
      <div className="text-center">
        <h1>Servicios con AXIOS / JSON</h1>
        {this.state.customers.map((objCus, index) => {
          return (
            <h3 style={{ color: "purple" }} key={objCus.id}>
              {objCus.contactName}
            </h3>
          );
        })}
      </div>
    );
  }
}
