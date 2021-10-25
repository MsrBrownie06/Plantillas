import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import { Form, Button, Row, Table } from "react-bootstrap";
export default class BuscadorCoches extends Component {
  cajaMarca = React.createRef();

  state = {
    coches: [],
    statusCoches: false,
    marcas: [],
    statusMarcas: false,
  };

  cargarCoches = (e) => {
    if (e != null) {
      e.preventDefault();
    }
    var request = "/webresources/coches";
    var url = Global.urlCoches + request;
    var data = [];
    axios.get(url).then((res) => {
      console.log(res.data);
      res.data.map((obj, index) => {
        data[index] = (
          <tr key={index}>
            <td>{obj.marca}</td>
            <td>{obj.modelo}</td>
            <td>{obj.conductor}</td>
            <td>
              <img src={obj.imagen} alt={obj.modelo} width="100px" />
            </td>
          </tr>
        );

        return data;
      });

      this.setState({
        coches: data,
        statusCoches: true,
        statusMarcas: false,
      });
    });
  };

  componentDidMount = () => {
    this.cargarCoches();
  };

  mostrarMarcas = (e) => {
    e.preventDefault();

    var request = "/webresources/coches";
    var url = Global.urlCoches + request;
    var marcasData = [];
    var marcaSelect = this.cajaMarca.current.value;

    axios.get(url).then((res) => {
      res.data.map((coche, index) => {
        if (coche.marca === marcaSelect) {
          console.log(coche);

          marcasData[index] = (
            <tr key={index}>
              <td>{coche.marca}</td>
              <td>{coche.modelo}</td>
              <td>{coche.conductor}</td>
              <td>
                <img src={coche.imagen} alt={coche.modelo} width="100px" />
              </td>
            </tr>
          );
        }

        return marcasData;
      });

      this.setState({
        marcas: marcasData,
        statusCoches: false,
        statusMarcas: true,
      });
    });
  };
  render() {
    return (
      <div>
        <Row className="justify-content-center text-center">
          <Form className="col-6" onSubmit={this.mostrarMarcas}>
            <Form.Label>Introduzca una marca</Form.Label>
            <Form.Control type="text" ref={this.cajaMarca} />
            <Button
              type="button"
              onClick={() => this.cargarCoches()}
              variant="outline-info"
            >
              Mostrar todos los coches
            </Button>
            <Button type="submit" variant="outline-success">
              Mostrar por marca
            </Button>
          </Form>
        </Row>
        <Row className="justify-content-center text-center">
          <Table>
            <thead>
              <tr>
                <td>MARCA</td>
                <td>MODELO</td>
                <td>CONDUCTOR</td>
                <td>IMAGEN</td>
              </tr>
            </thead>
            <tbody>
              {this.state.statusCoches === true && this.state.coches}
              {this.state.statusMarcas === true && this.state.marcas}
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}
