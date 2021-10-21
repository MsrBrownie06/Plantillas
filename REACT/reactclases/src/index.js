import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Components/App/App";
// import Contador from "./Components/Contador/Contador";
// import DibujosComplejos from "./Components/DibujosComplejos/DibujosComplejos";
// import Deportes from "./Components/Deportes/Deportes";
// import Numeros from "./Components/Numeros/Numeros";
import Comics from "./Components/Comics/Comics";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Comics />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
