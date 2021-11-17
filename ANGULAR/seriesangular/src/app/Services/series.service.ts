import { Injectable } from "@angular/core";
import { Global } from "../Global";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()

export class SeriesService{

    constructor(private _http:HttpClient){

    }

    getSeries(): Observable<any>{
        let request = "/api/Series";
        let url = Global.urlSeries+request;
        return this._http.get(url)
    }

    getSeriesId(id: string): Observable<any>{
        let request = "/api/Series/"+id;
        let url = Global.urlSeries+request;
        return this._http.get(url)
    }


}