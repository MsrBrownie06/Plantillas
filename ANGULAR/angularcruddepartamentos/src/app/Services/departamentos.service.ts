import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class DepartamentoService{

    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any>{
        let request = "/api/Departamentos";
        let url = Global.urlDepartamentos + request;
        return this._http.get(url);
    }

}