import { Component } from "react";
import fotoMusica from "../../../Assets/img/martin-garrix-brown.jpg";
class Musica extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "lightblue", backgroundColor: "blue" }}>
          Estoy en MUSICA
        </h1>
        <img src={fotoMusica} alt="MUSICA"></img>
      </div>
    );
  }
}

export default Musica;
