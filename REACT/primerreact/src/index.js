import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './components/App/App';
// import Saludo from './components/Saludo/Saludo';
// import Metodos from './components/Metodos/Metodos';
// import SumarNumeros from './components/SumarNumeros/SumarNumeros';
// import Padre from "./components/Padre/Padre";
// import Contador from "./components/Contador/Contador";
// import PadreDibujo from "./components/PadreDibujo/PadreDibujo";
import Car from "./components/Car/Car";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <Car Marca="Honda" Modelo="Civic" Aceleracion="20" VelocidadMaxima="220" />
    <Car Marca="Peugeot" Modelo="307" Aceleracion="25" VelocidadMaxima="200" />
    <Car Marca="Seat" Modelo="500" Aceleracion="15" VelocidadMaxima="160" />
  </div>,
  document.getElementById("root")
);
// cuando pulse en el doble un metodo hijo
//cuando pulse el triple un metodo al padre
reportWebVitals();
