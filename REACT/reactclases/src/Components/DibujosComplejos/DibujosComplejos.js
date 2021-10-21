import { Component } from "react";

class DibujosComplejos extends Component {
  //1º FORMA DE HACERLO---------------------------------------------------------
  dibujarNumeros = () => {
    //Si tenemos un bucle, visualizaremos el dibujo que nos ofrece como resultado. Para que funcione
    //debemos almacenar en una lista (list) todo el contenido HTML que se declara como un array " lista = [] "
    //el metodo que usaremos se llama " push() " que nos permite añadir elemento a la lista de forma dinamica

    var lista = [];
    for (let i = 1; i <= 5; i++) {
      lista.push(<li key={i}>Numero: {i}</li>);
    }
    return lista;
  };

  //2º FORMA DE HACERLO---------------------------------------------------------

  //vamos a declarar un array en state y lo recorreremos dentro del render()

  state = {
    nombres: [
      "Oscar",
      "Sara",
      "Ruben",
      "Saul",
      "Ana",
      "Nadia",
      "Helen",
      "Gema",
      "Eduardo",
      "Carlos",
      "Sergio",
      "Maria",
    ],
  };

  insertarNombre = () => {
    //este metodo lo usaremos para cambiar el state. Para añadir un valor a un array se usa el metodo " push() "
    //queremos comporbar si basta con acceder a state y utilizar push para visualizar los cambios
    this.state.nombres.push("Jhin");

    //debemos igualar el state para visualizar el cambio
    this.setState({
      nombres: this.state.nombres,
    });
  };

  render() {
    return (
      <div>
        <h1>Dibujos con bucles</h1>
        {/* //1º FORMA DE HACERLO */}
        <ul>{this.dibujarNumeros()}</ul>
        {/* //2º FORMA DE HACERLO */}
        <button onClick={() => this.insertarNombre()}>Añadir Nombre</button>
        {this.state.nombres.map((objName, index) => {
          //A diferencia del codigo en metodo, aqui pondremos el return directo del codigo que deseemos
          return <h3 key={index}>{objName}</h3>;
        })}
      </div>
    );
  }
}

export default DibujosComplejos;
