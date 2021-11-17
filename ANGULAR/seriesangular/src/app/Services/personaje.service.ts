import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Personaje } from "../Models/Personaje";
@Injectable()

export class PersonajeService{

    constructor(private _http:HttpClient){

    }

    getPersonajesLista(): Observable<any>{
        let request = "/api/Personajes/";
        let url = Global.urlSeries+request;
        return this._http.get(url)
    }

    getPersonajes(id:string): Observable<any>{
        let request = "/api/Series/PersonajesSerie/" + id;
        let url = Global.urlSeries+request;
        return this._http.get(url)
    }

    insertPersonaje(personaje: Personaje): Observable<any>{

        var json = JSON.stringify(personaje)

        let request = "/api/Personajes/";
        let url = Global.urlSeries+request;

        let header = new HttpHeaders().set("Content-Type", "application/json");

        return this._http.post(url,json,{headers: header})
    }


}