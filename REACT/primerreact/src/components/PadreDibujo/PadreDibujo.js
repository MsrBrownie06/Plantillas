import MatematicasDibujo from "../MatematicasDibujo/MatematicasDibujo";
import React, { useState } from "react";

function PadreDibujo() {
  const multiplicar = (num1, num2, texto) => {
    var textFinal = texto + ". La multiplicacion es: " + num1 * num2;

    setTexto(textFinal);
  };

  const [texto, setTexto] = useState("");

  return (
    <div>
      <h1>{texto}</h1>
      <MatematicasDibujo num1="5" num2="2" multiplicar={multiplicar} />
    </div>
  );
}
export default PadreDibujo;
