import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default class Collatz extends Component {
  cajaNumero = React.createRef();

  state = { resultado: [] };

  iniciarResultados = (e) => {
    e.preventDefault();

    let num = this.cajaNumero.current.value;

    var datos = [];

    datos.push(num);

    while (num !== 1) {
      if (num % 2 === 0) {
        num = parseInt(num) / 2;
      } else {
        num = parseInt(num * 3 + 1);
      }
      datos.push(num);
    }
    this.setState({ resultado: datos });
  };

  render() {
    return (
      <Container fluid>
        <h1 className="text-center">Secuencia de Collatz</h1>
        <Row>
          <Col className="text-center">
            <ul>
              {this.state.resultado.map((objNum, index) => {
                return <li key={index}>{objNum}</li>;
              })}
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="6">
            <Form onSubmit={this.iniciarResultados}>
              <Form.Label>Numero: </Form.Label>
              <Form.Control type="text" ref={this.cajaNumero} />
              <Button variant="success" type="submit">
                Iniciar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
