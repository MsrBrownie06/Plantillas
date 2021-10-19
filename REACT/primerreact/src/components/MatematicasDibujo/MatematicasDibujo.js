import React, { useState } from "react";

function MatematicasDibujo(props) {
  const { num1, num2, multiplicar } = props;

  let textoIni = "Los numeros son " + num1 + " y " + num2;
  const [texto, setTexto] = useState(textoIni);

  const sumarNumeros = () => {
    let textoFinal =
      textoIni + ". Y su suma es: " + (parseInt(num1) + parseInt(num2));
    setTexto(textoFinal);
  };

  return (
    <div>
      <h3>{texto}</h3>
      <button onClick={() => sumarNumeros()}>Sumar</button>
      <button onClick={() => multiplicar(num1, num2, textoIni)}>
        Multiplicar
      </button>
    </div>
  );
}
export default MatematicasDibujo;
