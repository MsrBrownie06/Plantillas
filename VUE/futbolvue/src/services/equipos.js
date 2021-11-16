import axios from 'axios'
import Global from './../components/Global'

export default class Equipos {

    getEquipos() {
        return new Promise(function (resolve) {
            let request = "/api/Equipos";
            let url = Global.urlFutbol + request;
            axios.get(url).then(res => {
                resolve(res.data)
            })
        })
    }

    getEquipo(idEquipo) {
        return new Promise(function (resolve) {
            let request = "/api/Equipos/" + idEquipo;
            let url = Global.urlFutbol + request;
            axios.get(url).then(res => {
                resolve(res.data)
            })
        })
    }

    getJugadores(idEquipo) {
        return new Promise(function (resolve) {
            let request = "/api/Jugadores/JugadoresEquipo/" + idEquipo;
            let url = Global.urlFutbol + request;
            axios.get(url).then(res => {
                resolve(res.data)
            })
        })
    }

    getJugador(idJugador) {
        return new Promise(function (resolve) {
            let request = "/api/Jugadores/" + idJugador;
            let url = Global.urlFutbol + request;
            axios.get(url).then(res => {
                resolve(res.data)
            })
        })
    }

    getApuestas() {
        return new Promise(function (resolve) {
            let request = "/api/Apuestas";
            let url = Global.urlFutbol + request;
            axios.get(url).then(res => {
                resolve(res.data)
            })
        })
    }

}