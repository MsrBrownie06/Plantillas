import React, { Component } from "react";

class Comic extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 style={{ color: "brown" }}>{this.props.Comic.titulo}</h3>
        <h2>{this.props.Comic.descripcion}</h2>
        <img src={this.props.Comic.imagen} alt={this.props.Comic.descripcion} />
        <hr />
        <button
          onClick={() => {
            var seleccionado = this.props.Comic;
            this.props.selecionarFav(seleccionado);
          }}
        >
          favorito
        </button>
        <button
          onClick={() => {
            this.props.eliminarComic(this.props.index);
          }}
        >
          Eliminar
        </button>
        <hr />
      </React.Fragment>
    );
  }
}

export default Comic;
