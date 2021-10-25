import React, { Component } from "react";
import { Form, Row, Button } from "react-bootstrap";
import axios from "axios";
import Global from "../../Global";
export default class BuscadorCustomer extends Component {
  CajaIdRef = React.createRef();

  urlCli = Global.urlNorthWind;

  state = {
    cliente: {},
    status: false,
  };

  buscarCliente = (e) => {
    e.preventDefault();
    var id = this.CajaIdRef.current.value;
    var request = "customers/" + id;
    var url = this.urlCli + request; // para hacer la variable mas corta (eso creo)
    axios.get(url).then((res) => {
      console.log(res.data.customer);
      this.setState({
        cliente: res.data.customer,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Buscador de Clientes</h1>
        <Row className="justify-content-center">
          <Form className="col-6" onSubmit={this.buscarCliente}>
            <Form.Label>Introduzca Id del cliente</Form.Label>
            {/* //ponemos required para que obligue al usuario a introducir algo */}
            <Form.Control type="text" ref={this.CajaIdRef} required />
            <Button type="submit">Mostrar Cliente</Button>
          </Form>
        </Row>
        {this.state.status === true && (
          <Row className="text-center">
            <h1 style={{ color: "purple" }}>
              Empresa: {this.state.cliente.companyName}
            </h1>
            <h2 style={{ color: "lightblue" }}>
              Pais: {this.state.cliente.country}
            </h2>
            <h2 style={{ color: "green" }}>
              Ciudad: {this.state.cliente.city}
            </h2>
            <h2 style={{ color: "red" }}>
              Calle: {this.state.cliente.address}
            </h2>
            <h2 style={{ color: "orange" }}>
              Nombre: {this.state.cliente.contactName}
            </h2>
            <h2 style={{ color: "blue" }}>
              Numero: {this.state.cliente.phone}
            </h2>
          </Row>
        )}
      </div>
    );
  }
}
