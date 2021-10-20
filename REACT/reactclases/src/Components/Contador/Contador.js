//Siempre se debe primero importar " { Component } from 'react' "
import { Component } from "react";

//tambien podemos utilizar functions con sintaxis de Javascript para separar el codigo. Y ademas de que no podremos usar nada de la clase

function miFuncion() {
  console.log("Soy una funcion fuera de la clase");
}

class Contador extends Component {
  //Estamos en la clase. Por lo tanto para declarar variables o metodos, no se usa ni VAR, CONST ni nada similar.

  //las variables a nivel de clase deben tener el 'this' para decir que es una variable de la clase
  numero = 1;

  incrementarContador = () => {
    console.log("Contador: " + this.numero);
    this.numero++;
  };

  //Podemos utilizar variables de estado y modificarlas cuando deseemos en el dibujo
  //Para crear una variable de estado desde inicio (no en un button) se usara el state de la clase. Con el state de la clase
  //primero se declarara las variables de estado y luego podremos modificarlas con el metodo setState.

  state = { valor: 1 }; //esto seria un valor constante

  // state = { valor: parseInt(this.props.Inicio) }; // esto sería un valor utilizando props

  //crearemos un metodo con el que cambiaremos el state de valor

  incrementarValor = () => {
    //Cambiaremos el estado y la variable valor
    this.setState({
      valor: this.state.valor + 1,
    });
  };

  render() {
    //Este codigo dentro de este metodo render, se actualizara al inicio y al cambiar cualquier state. Al igual que function

    var valor = 14;

    const miMetodoRender = () => {
      valor += 1;
      console.log(
        "Soy un metodo dentro de la funcion Render en una clase y un valor: " +
          valor
      );
    };

    return (
      <div>
        <h1>Primer Componente JSX ES6</h1>
        <h2 style={{ color: "purple" }}>Valor Props: {this.props.Inicio}</h2>
        <h2 style={{ color: "blue" }}>Valor State: {this.state.valor}</h2>
        <button
          onClick={() => {
            //Si el metodo esta en render, la llamada se realiza como siempre
            miMetodoRender();
            miFuncion();
            //Los metodos y elementos de la clase, siempre deben llevar el 'this'
            this.incrementarContador();
          }}
        >
          mostrar
        </button>
        {/* Si estamos utilizando METODOS de CLASE podemos llamarlo con otra sintaxis más facil */}
        <button onClick={this.incrementarValor}>incrementar</button>
      </div>
    );
  }
}

export default Contador;
