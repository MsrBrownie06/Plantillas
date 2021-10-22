import { Component } from "react";
import fotoTv from "../../../Assets/img/superbm06 banner 2.png";
class Tv extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "lightgray", backgroundColor: "black" }}>
          Estoy en TV
        </h1>
        <img src={fotoTv} alt="TV"></img>
      </div>
    );
  }
}

export default Tv;
