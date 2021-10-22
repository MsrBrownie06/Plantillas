import React, { Component } from "react";
import { Form, Button, Table } from "react-bootstrap";
export default class TablaMultiplicarSelect extends Component {
  optionSelect = React.createRef();

  state = {
    filas: [],
  };

  //metodo para el formulario
  mostrartabla = (e) => {
    e.preventDefault();

    var numero = parseInt(this.optionSelect.current.value);
    var datos = [];

    for (let i = 0; i <= 10; i++) {
      var resMulti = numero * i;
      datos.push(
        <tr key={i}>
          <td>{numero + " X " + i}</td>
          <td>{resMulti}</td>
        </tr>
      );
    }
    this.setState({
      filas: datos,
    });
  };

  //metodo para cargar los options al cargar la pagina
  generaroptions = () => {
    var options = [];
    for (let i = 0; i <= 5; i++) {
      var dado = Math.round(Math.random() * 50 + 1);
      options.push(
        <option key={i} value={dado}>
          {dado}
        </option>
      );
    }
    return options;
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.mostrartabla}>
          <Form.Label>Seleciones un numero</Form.Label>
          {/* //para llamar directamente a un metodo una vez iniciado la pagina web */}
          <select ref={this.optionSelect}>{this.generaroptions()}</select>
          <Button type="submit">mostrar Tabla</Button>
        </Form>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Operacion</td>
              <td>Resultado</td>
            </tr>
          </thead>
          <tbody>{this.state.filas}</tbody>
        </Table>
      </div>
    );
  }
}
