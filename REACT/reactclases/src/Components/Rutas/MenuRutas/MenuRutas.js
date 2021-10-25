import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul style={{ display: "inline" }}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/musica">Musica</a>
          </li>
          <li>
            <a href="/tv">Tv</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/formulario">Formulario</a>
          </li>
          <li>
            <a href="/collatz">Collatz</a>
          </li>
          <li>
            <a href="/Multiplicacion">Multiplicacion</a>
          </li>
          <li>
            <a href="/Select">Multiplicacion con select</a>
          </li>
          <li>
            <a href="/SelectMultiple">Seleccion Multiple</a>
          </li>
        </ul>
      </div>
    );
  }
}
