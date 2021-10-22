import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EjemploSimple extends Component {
  //Creamos variables de referencia las cuales apuntan a objetos FORM. (No tienen el valor directo de la caja)
  cajaNombre = React.createRef();
  cajaEdad = React.createRef();

  state = { user: null };
  recibirDatos = (e) => {
    //deberemos cortar la propagacion del evento
    e.preventDefault();

    //Para recuperar el VALUE de las referencias se hace de la siguiente forma:
    //referencia.current.value
    this.setState({
      user: {
        nombre: this.cajaNombre.current.value,
        edad: this.cajaEdad.current.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>Ejemplo simple de formulario</h1>
        {this.state.user && (
          <h2 style={{ color: "purple" }}>
            {" "}
            Usuario: {this.state.user.nombre}, Edad: {this.state.user.edad}
          </h2>
        )}
        <Form onSubmit={this.recibirDatos}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre: </Form.Label>

            <Form.Control
              type="text"
              placeholder="Introduce tu nombre"
              ref={this.cajaNombre}
              onChange={this.recibirDatos}
            />

            <Form.Label>Edad: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce tu edad"
              ref={this.cajaEdad}
              onChange={this.recibirDatos}
            />
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
