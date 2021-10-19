//Para poder usar los estados dentro de react se necesitaran las librerias de react
//React Fragment es un div que no ocupa espacio, como un SPAN

import React, { useState } from "react";

function Contador(props) {
  const { Inicio } = props;
  //Declararemos una variable para el estado
  const [num, setnum] = useState(parseInt(Inicio)); // se coloca un estado inicial, en este caso un cero(0) / puede ser un numero, string, boolean

  const sumarCont = () => {
    //debemos cambiar el valor del contador
    setnum(num + 1);
  };

  return (
    <React.Fragment>
      <h1>Ejemplo contador - State React</h1>
      <h2 style={{ color: "blue" }}>Valor del contador: {num}</h2>
      <button onClick={() => sumarCont()}>Aumentar</button>
      <button
        onClick={() => {
          setnum(num - 1);
        }}
      >
        Reducir
      </button>
    </React.Fragment>
  );
}

export default Contador;
