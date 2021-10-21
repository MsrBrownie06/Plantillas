import { Component } from "react";
import Deporte from "../Deporte/Deporte";

class Deportes extends Component {
  //Aqui tendremos un list con todos los deportes y sera estático
  //deportes = ["Futbol", "Baloncesto", "Judo", "Tenis", "Baseball", "Voley"];

  //debemos crear un deporte favorito en state para poder cambiarlo al seleccionar.
  //Ademas hemos añadido el array de deportes para que sea dinamico y NO sea estatico
  state = {
    favorito: "",
    deportes: ["Futbol", "Baloncesto", "Judo", "Tenis", "Baseball", "Voley"],
  };

  mostrarFav = (depFavorito) => {
    //tendo que recibir el deporte favorito del hijo
    console.log("Favorito: " + depFavorito);

    this.setState({
      favorito: depFavorito,
    });
  };

  insertarDeporte = () => {
    this.state.deportes.push("Rugby");
    this.setState({
      deportes: this.state.deportes,
    });
  };

  render() {
    return (
      <div>
        {this.state.deportes.map((deporte, index) => {
          return (
            <Deporte
              Nombre={deporte}
              key={index}
              MetodoMostarFav={this.mostrarFav}
            />
          );
        })}

        <h2>
          Su deporte Favorito es:
          <br />
          <span style={{ color: "green" }}>{this.state.favorito}</span>
        </h2>
        <button onClick={() => this.insertarDeporte()}>Nuevo deporte</button>
      </div>
    );
  }
}

export default Deportes;
