import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Departamento } from "../Models/Departamento";

@Injectable()

export class DepartamentoService{

    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any>{
        let request = "/api/Departamentos";
        let url = Global.urlDepartamentos + request;
        return this._http.get(url);
    }

    insertDepartamento(departamento: Departamento): Observable<any>{

        //Debemos convertir el objeto a JSON
        var json = JSON.stringify(departamento)

        //debemos indicar el tipo de objeto que vamos a enviar
        var header = new HttpHeaders().set("Content-Type", "application/json");

        let request = "/api/Departamentos";
        let url = Global.urlDepartamentos + request;

        //le mandamos ademas de la url, el json y para asegurarno el headers
        return this._http.post(url, json, {headers: header})
    }

    modifyDepartamento(departamento: Departamento): Observable<any>{

        //Debemos convertir el objeto a JSON
        var json = JSON.stringify(departamento)

        //debemos indicar el tipo de objeto que vamos a enviar
        var header = new HttpHeaders().set("Content-Type", "application/json");

        let request = "/api/Departamentos";
        let url = Global.urlDepartamentos + request;

        //le mandamos ademas de la url, el json y para asegurarno el headers
        return this._http.put(url, json, {headers: header})
    }

    deleteDepartamento(id: string): Observable<any>{
        let request = "/api/Departamentos/" + id;
        let url = Global.urlDepartamentos + request;
        return this._http.delete(url)
    }

}