import axios from "axios";
import Global from "../components/Global";

export default class ServiceEmpleados {
  getOficios() {
    return new Promise(function (resolve) {
      var request = "/api/Empleados/oficios";
      var url = Global.urlEmpleados + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getOficioId(idOfi) {
    return new Promise(function (resolve) {
      var request = "/api/Empleados/EmpleadosOficio/" + idOfi;
      var url = Global.urlEmpleados + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
}
