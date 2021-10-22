import React from "react";
import ReactDOM from "react-dom";
import Router from "./Components/Route/Router";
import MenuRutas from "./Components/Rutas/MenuRutas/MenuRutas";
import "bootstrap/dist/css/bootstrap.min.css";

// import Cine from "./Components/Rutas/Cine/Cine";
// import Home from "./Components/Rutas/Home/Home";
// import Musica from "./Components/Rutas/Musica/Musica";
// import Tv from "./Components/Rutas/Tv/Tv";
import "./index.css";
// import App from "./Components/App/App";
// import Contador from "./Components/Contador/Contador";
// import DibujosComplejos from "./Components/DibujosComplejos/DibujosComplejos";
// import Deportes from "./Components/Deportes/Deportes";
// import Numeros from "./Components/Numeros/Numeros";
// import Comics from "./Components/Comics/Comics";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <hr />
    <MenuRutas />
    <hr />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
