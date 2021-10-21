import React, { Component } from "react";

class Deporte extends Component {
  //se necesitara un metodo para poder llamar al metodo padre

  selecionarFav = () => {
    //aqui llamaremos de forma explicita, al metodo props del padre

    var deporteFav = this.props.Nombre; //obtenemos el nombre de props
    this.props.MetodoMostarFav(deporteFav);
  };
  render() {
    return (
      <React.Fragment>
        <li style={{ color: "blue" }}>
          {this.props.Nombre}
          <button onClick={() => this.selecionarFav()}>
            Seleccionar Favorito
          </button>
        </li>
      </React.Fragment>
    );
  }
}

export default Deporte;
