import Global from "../components/Global";
import axios from "axios";

export default class ServiceDepartamentos {
  getDept() {
    return new Promise(function (resolve) {
      var request = "/api/departamentos";
      var url = Global.urlDepartamentos + request;
      axios.get(url).then((res) => {
        var departamentos = res.data;
        resolve(departamentos);
      });
    });
  }

  insertarDept(departamento) {
    return new Promise(function (resolve) {
      var request = "/api/departamentos";
      var url = Global.urlDepartamentos + request;
      axios.post(url, departamento).then((res) => {
        resolve(res);
      });
    });
  }

  buscarDept(id) {
    return new Promise(function (resolve) {
      var request = "/api/departamentos/" + id;
      var url = Global.urlDepartamentos + request;
      axios.get(url).then((res) => {
        var departamento = res.data;
        resolve(departamento);
      });
    });
  }

  updateDept(departamento) {
    return new Promise(function (resolve) {
      var request = "/api/departamentos/";
      var url = Global.urlDepartamentos + request;
      axios.put(url, departamento).then((res) => {
        resolve(res);
      });
    });
  }

  deleteDept(id) {
    return new Promise(function (resolve) {
      var request = "/api/departamentos/" + id;
      var url = Global.urlDepartamentos + request;
      axios.delete(url).then((res) => {
        resolve(res);
      });
    });
  }
}
