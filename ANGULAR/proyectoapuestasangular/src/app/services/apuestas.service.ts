import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, retry } from "rxjs";
import { Apuestas } from "../models/Apuesta";

@Injectable()
export class ServiceApuestas{
    constructor(private _http: HttpClient){}

    getEquipos() :Observable<any> {
        var request = "api/Equipos";
        var url = Global.urlAPIApuestasEquipos+request;
        return this._http.get(url);
    }

    getEquipoId(idEquipo:string) :Observable<any>{
        var request ="api/Equipos/"+idEquipo;
        var url = Global.urlAPIApuestasEquipos+request;
        return this._http.get(url);
    }

    getJugadorId(idJugador : string) :Observable<any>{
        var request = "api/jugadores/"+idJugador;
        var url = Global.urlAPIApuestasEquipos + request;
        return this._http.get(url);
    }

    getJuagdoresEquipoId(idEquipo:string) :Observable<any>{
        var request = "api/jugadores/jugadoresequipos/"+idEquipo;
        var url = Global.urlAPIApuestasEquipos+request;
        return this._http.get(url);
    }

    getApuestas() :Observable<any>{
        var request = "api/apuestas";
        var url = Global.urlAPIApuestasEquipos+request;
        return this._http.get(url);
    }

    insertApuesta(apuesta:Apuestas) :Observable<any>{
        var request = "api/apuestas";
        var url = Global.urlAPIApuestasEquipos + request;
        var json = JSON.stringify(apuesta);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(url, json, {headers:header});
    }

    deleteApuesta(idApuesta:number) :Observable<any>{
        var request = "api/apuestas/" + idApuesta;
        var url = Global.urlAPIApuestasEquipos+request;
        return this._http.delete(url);
    }

    buscarJugadores(nombreJugador:string):Observable<any>{
        var request = "api/Jugadores/BuscarJugadores/"+nombreJugador;
        var url = Global.urlAPIApuestasEquipos + request;
        return this._http.get(url);
    }
}