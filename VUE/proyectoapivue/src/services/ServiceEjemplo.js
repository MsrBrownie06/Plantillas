import Global from "./../components/Global";
import axios from "axios";

export default class ServiceEjemplo {
  getSaludo(nombre) {
    return "Bienvenido a mi servicio, " + nombre;
  }

  getPromesa = new Promise(function (resolve, reject) {
    var num = 0;
    if (num == 0) {
      //Debemos devolver algo en resolve o en reject
      resolve("OK!!");
    } else {
      reject("ERROR!!");
    }
  });

  getPromesaSimple = new Promise(function (resolve) {
    resolve();
  });

  getEmpleado(idEmpleado) {
    return new Promise(function (resolve) {
      var request = "api/Empleados/" + idEmpleado;
      var url = Global.urlEmpleados + request;
      var empleado = {
        apellido: "Soy la nada...",
      };
      axios.get(url).then((res) => {
        empleado = res.data;
        resolve(empleado);
      });
    });
  }

  //miMetodo(params){ return new Promise(...) }
}
