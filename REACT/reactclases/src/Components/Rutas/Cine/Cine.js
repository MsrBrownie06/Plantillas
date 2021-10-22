import { Component } from "react";
import fotoCine from "../../../Assets/img/DRAGON DE LA IRA-MELIODAS.jpg";
class Cine extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "lightblue", backgroundColor: "blue" }}>
          Estoy en Cine
        </h1>
        <img src={fotoCine} alt="CINE"></img>
      </div>
    );
  }
}

export default Cine;
