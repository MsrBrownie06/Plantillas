import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();

  state = {
    tabla: [],
  };

  cargarSubmit = (e) => {
    e.preventDefault();

    let num = this.cajaNumero.current.value;
    let datos = [];
    for (let i = 0; i <= 10; i++) {
      let res = num + " X " + i + " = " + num * i;
      datos[i] = res;
    }
    this.setState({
      tabla: datos,
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Tabla de Multiplicar</h1>
        {/* //hay que cargar el metodo directamente y sin parentesis */}
        <Form onSubmit={this.cargarSubmit}>
          <Form.Label>Numero: </Form.Label>
          <Form.Control type="text" ref={this.cajaNumero} />
          <Button variant="success" type="submit">
            Resultado
          </Button>
        </Form>
        <Row>
          <Col>
            <h1>Resultado Tabla</h1>
            {this.state.tabla.map((objNum, index) => {
              return (
                <p key={index}>
                  <b>{objNum}</b>
                </p>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}
