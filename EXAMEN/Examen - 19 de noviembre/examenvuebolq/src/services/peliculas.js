import axios from "axios";
import Global from "./../Global";

export default class Peliculas {
  //nacionalidad

  getNacionalidad() {
    return new Promise(function (resolve) {
      let request = "/api/Nacionalidades";
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getNacionalidadId(id) {
    return new Promise(function (resolve) {
      let request = "/api/Nacionalidades/" + id;
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  //genero

  getGeneros() {
    return new Promise(function (resolve) {
      let request = "/api/Generos";
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
  getGenerosId(id) {
    return new Promise(function (resolve) {
      let request = "/api/Generos/" + id;
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  //peliculas

  getPeliculasId(id) {
    return new Promise(function (resolve) {
      let request = "/api/Peliculas/" + id;
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  buscarPeliculas(titulo) {
    return new Promise(function (resolve) {
      let request = "/api/Peliculas/PeliculasTitulo/" + titulo;
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getPeliculasNacionalidad(id) {
    return new Promise(function (resolve) {
      let request = "/api/Peliculas/PeliculasNacionalidad/" + id;
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  getPeliculasGenero(id) {
    return new Promise(function (resolve) {
      let request = "/api/Peliculas/PeliculasGenero/" + id;
      let url = Global.urlPeliculas + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }

  modificarPelicula(idPeli, idGenero) {
    return new Promise(function (resolve) {
      let request =
        "/api/Peliculas/UpdatePeliculaGenero/" + idPeli + "/" + idGenero;
      let url = Global.urlPeliculas + request;
      axios.put(url).then((res) => {
        resolve(res);
      });
    });
  }

  deletePelicula(id) {
    return new Promise(function (resolve) {
      let request = "/api/Peliculas/" + id;
      let url = Global.urlPeliculas + request;
      axios.delete(url).then((res) => {
        resolve(res);
      });
    });
  }
}
