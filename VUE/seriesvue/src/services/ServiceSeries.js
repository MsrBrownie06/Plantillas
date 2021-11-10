import Global from "./../components/Global";
import axios from "axios";

export default class ServiceSeries {
  getSeries() {
    return new Promise(function (resolve) {
      var request = "/api/Series";
      var url = Global.urlSeries + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getSerieId(id) {
    return new Promise(function (resolve) {
      var request = "/api/Series/" + id;
      var url = Global.urlSeries + request;
      axios.get(url).then((res) => {
        resolve(res.data)
      })
    })
  }

  postPersonaje(personaje) {
    return new Promise(function (resolve) {
      var request = "/api/Personajes";
      var url = Global.urlSeries + request;
      axios.post(url, personaje).then((res) => {
        resolve(res);
      })
    })
  }

  putPersonaje(personaje) {
    return new Promise(function (resolve) {
      var request = "/api/Personajes";
      var url = Global.urlSeries + request;
      axios.put(url, personaje).then((res) => {
        resolve(res)
      })
    })
  }
}
