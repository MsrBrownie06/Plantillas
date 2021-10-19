import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './components/App/App';
// import Saludo from './components/Saludo/Saludo';
// import Metodos from './components/Metodos/Metodos';
// import SumarNumeros from './components/SumarNumeros/SumarNumeros';
import Padre from "./components/Padre/Padre";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <Padre />
  </div>,
  document.getElementById("root")
);
// cuando pulse en el doble un metodo hijo
//cuando pulse el triple un metodo al padre
reportWebVitals();
