
//importamos Injectable para poder usar los metodos 
//de esta clase que hemos creado
import { Injectable } from "@angular/core";

//Global es donde estan las urls generales
import { Global } from "../Global";

//importamos HttpClient y Observable para poder 
//recoger los datos de una Api
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

//usamos Injectable para que otros componentes
//puedan usar las funciones de esta clase
@Injectable()

export class EmpleadoOficioService{

    //inyectamos las funciones de HttpCLient en el constructor
    constructor(private _http: HttpClient){}

    //Este metodo devolvera un Observable de cualquier tipo de datos
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