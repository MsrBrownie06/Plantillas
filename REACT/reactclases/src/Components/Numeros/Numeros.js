import { Component } from "react";
import Numero from "../Numero/Numero";
class Numeros extends Component {
  state = {
    numerosHijo: [1, 2, 3, 4],
    resultado: 0,
  };

  sumar = (num) => {
    var res = parseInt(num) + parseInt(this.state.resultado);
    this.setState({
      resultado: res,
    });
  };

  generarAleatorio = () => {
    let aleatorio = parseInt(Math.random() * 10) + 1;
    this.state.numerosHijo.push(aleatorio);
    this.setState({
      numerosHijo: this.state.numerosHijo,
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Resultado: {this.state.resultado}</h1>
          <button onClick={() => this.generarAleatorio()}>
            generar numero
          </button>
        </div>
        <hr />
        <table>
          {this.state.numerosHijo.map((objNum, index) => {
            return <Numero Num={objNum} key={index} MetodoSumar={this.sumar} />;
          })}
        </table>
      </div>
    );
  }
}

export default Numeros;
