import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Global } from "../Global";
import { Observable } from "rxjs";

@Injectable()

export class PersonasService{
    constructor(private _http: HttpClient){
        
    }

    //en los metodos se suelen devolver directamente la promesa, 
    //aunque podemos crear una promesa como en vue
    getPersonas(): Observable<any>{
        var url = Global.urlPersonas;
        return this._http.get(url)
    }
    
}