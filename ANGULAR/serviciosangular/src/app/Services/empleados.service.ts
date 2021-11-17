//importamos Injectable para que lo pueda usar en la App
import { Injectable } from "@angular/core";
import { Global } from "../Global";

//importamos  para poder recibir los datos del API
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class EmpleadosService{

    constructor(private _http: HttpClient){

    }

    getEmpleadosSalario(salario: string): Observable<any>{
        var request = "/api/Empleados/EmpleadosSalario/" + salario
        var url = Global.urlEmpleados+ request
        return this._http.get(url)
        
    }

    getEmpleados(): Observable<any>{
        var request = "/api/Empleados";
        var url = Global.urlEmpleados + request
        return this._http.get(url)
    }

    getEmpleadoId(id: string): Observable<any>{
        var request = "/api/Empleados/" + id;
        var url = Global.urlEmpleados + request
        return this._http.get(url)
    }
}