import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class EmpleadoOficioService{
constructor(private _http: HttpClient){}

getEmpleadosOficio(oficio: string): Observable<any>{
    let request = "api/Empleados/EmpleadosOficio/"+oficio;
    let url = Global.urlEmpleados+request;
    return this._http.get(url)
}

getOficio(): Observable<any>{
    let request = "api/Empleados/oficios";
    let url = Global.urlEmpleados+request;
    return this._http.get(url)
}
}