import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import MenuDepartamentos from "../Departamentos/MenuDepartamentos";
//import TablaDepartamentos from "../Departamentos/TablaDepartamentos";
import Router from "../Route/Router";

function App() {
  return (
    <div className="App">
      <Router />
      <hr />
    </div>
  );
}

export default App;
