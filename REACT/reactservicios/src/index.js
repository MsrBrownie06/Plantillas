import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
//import MaestroDetalleDept from "./Components/MaestroDetalleDepartamentos/MaestroDetalleDept";
//import Router from "./Components/Route/Router";
//import EmpleadosRouter from "./Components/RutasEmpleadosParametros/EmpleadosRouter";
//import ServicioCustomers from "./Components/ServicioCustomers/ServicioCustomers";
//import BuscadorCustomer from "./Components/BuscadorCustomer/BuscadorCustomer";
//import BuscadorCoches from "./Components/BuscadorCoches/BuscadorCoches";
//import BuscadorCoches1 from "./Components/BuscadorCoches1/BuscadorCoches1";
//import MaestroDetalleDepartamentos from "./Components/MaestroDetalleDepartamentos/MaestroDetalleDepartamentos";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
