import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Apuesta } from "../Models/Apuesta";
import { Equipo } from "../Models/Equipo";
import { Jugador } from "../Models/Jugador";

@Injectable()

export class ChampiosService{
    constructor(
        private _http:HttpClient
    ){

    }


    //APUESTAS
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


    //EQUIPOS
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

    insertarEquipo(equipo: Equipo):Observable<any>{
        let request = "/api/Equipos";
        let url = Global.urlChampion+request;

        let json = JSON.stringify(equipo);

        let header = new HttpHeaders().set("Content-Type","application/json");
        return this._http.post(url,json,{headers:header})
    }

    //JUGADORES
    getJugadoresEquiposId(idEquipo:string): Observable<any>{
        let request = "api/Jugadores/JugadoresEquipos/"+idEquipo;
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }

    insertarJugador(jugador:Jugador): Observable<any>{
        let request = "/api/Jugadores";
        let url = Global.urlChampion+request;

        let json = JSON.stringify(jugador);

        let header = new HttpHeaders().set("Content-Type","application/json")

        return this._http.post(url,json,{headers:header})
    }

    getJugadorId(idJugador:string): Observable<any>{
        let request = "/api/Jugadores/"+idJugador;
        let url = Global.urlChampion+request;
        return this._http.get(url)
    }
    
    inputFile(file: File): Observable<any>{
        const datos: FormData = new FormData()
        datos.append('files',file)

        var request = "./../../assets/images"
        var url = Global.urlPropia+request;

        let header = new HttpHeaders().set('Content-Type', 'multipart/form-data')

        //var res = new HttpRequest('POST',url,datos,{reportProgress: true, responseType: 'json'})
        
        return this._http.post(url,file)
    }

}