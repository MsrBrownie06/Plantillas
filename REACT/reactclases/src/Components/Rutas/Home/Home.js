import { Component } from "react";
import fotoHome from "../../../Assets/img/Braian/Braian.png";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "purple", backgroundColor: "lightpink" }}>
          Estoy en HOME
        </h1>
        <img src={fotoHome} alt="HOME"></img>
      </div>
    );
  }
}

export default Home;
