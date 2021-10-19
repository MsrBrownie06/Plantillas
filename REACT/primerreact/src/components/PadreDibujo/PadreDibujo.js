import MatematicasDibujo from "../MatematicasDibujo/MatematicasDibujo";
import React, { useState } from "react";

function PadreDibujo() {
  const multiplicar = (num1, num2, texto) => {

    var textFinal = texto + ". Y su multiplicacion es: " + num1 * num2;
    setTexto(textFinal);
  };

  const [texto, setTexto] = useState("");

  return (
    <div>
      <h1>Sumas: (Hijos)</h1>
      <MatematicasDibujo num1="5" num2="2" multiplicar={multiplicar} />
      <MatematicasDibujo num1="3" num2="8" multiplicar={multiplicar} />
      <MatematicasDibujo num1="10" num2="6" multiplicar={multiplicar} />
      <hr />
      <div>
        <h1>Multiplicacion: (Padre)</h1>
        <h3>{texto}</h3>
      </div>
    </div>
  );
}
export default PadreDibujo;
