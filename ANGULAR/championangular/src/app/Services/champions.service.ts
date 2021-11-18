import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Apuesta } from "../Models/Apuesta";

@Injectable()

export class ChampiosService{
    constructor(
        private _http:HttpClient
    ){

    }

    getApuestas(): Observable<any>{
        let request = "/api/Apuestas";
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }

    insertApuesta(apuesta: Apuesta):Observable<any>{
        let request = "/api/Apuestas";
        let url = Global.urlChampion + request

        let json = JSON.stringify(apuesta);

        let header = new HttpHeaders().set("Content-Type","application/json")

        return this._http.post(url,json,{headers: header})
    }

    deleteApuesta(id:string):Observable<any>{
        let request = "api/Apuestas/"+id;
        let url = Global.urlChampion + request;
        return this._http.delete(url);
    }

    getEquipos(): Observable<any>{
        let request = "/api/Equipos";
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }

    getEquipoId(idEquipo:string): Observable<any>{
        let request = "/api/Equipos/"+idEquipo;
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }

    getJugadoresEquiposId(idEquipo:string): Observable<any>{
        let request = "api/Jugadores/JugadoresEquipos/"+idEquipo;
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }

    getJugadorId(idJugador:string): Observable<any>{
        let request = "/api/Jugadores/"+idJugador;
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }
    
}