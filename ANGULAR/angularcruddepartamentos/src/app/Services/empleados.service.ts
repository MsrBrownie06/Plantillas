import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class EmpleadoService{
    constructor(private _http:HttpClient){}

    getEmpleadosDepartamento(id: string): Observable<any>{
        var request = "/api/Empleados/EmpleadosDepartamento/"+id;
        var url = Global.apiEmpleados + request;
        return this._http.get(url);
    } 

    getDetallesEmpleado(idEmpleado:string): Observable<any>{
        var request = "api/Empleados/"+idEmpleado;
        var url = Global.apiEmpleadosSalario + request;
        return this._http.get(url)
    }

    incrementarSalario(idEmpleado:string,incremento:string):Observable<any>{
        var request = "/api/Empleados/IncrementarSalario/"+idEmpleado+"/"+incremento
        var url = Global.apiEmpleadosSalario + request;

        var header = new HttpHeaders().set("Content-Type","application/json")
//  Asi se debe hacer si en el put no mandamos un objeto
        return this._http.put(url,{headers: header});
    }
}