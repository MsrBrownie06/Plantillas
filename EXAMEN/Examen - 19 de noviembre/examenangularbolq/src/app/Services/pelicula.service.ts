import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()

export class PeliculaService{
    constructor(
        private _http:HttpClient
    ){

    }

    //nacionalidad
    getNacionalidad():Observable<any>{
        let request = "/api/Nacionalidades";
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }
    getNacionalidadId(id:string):Observable<any>{
        let request = "/api/Nacionalidades/"+id;
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    //genero
    getGeneros():Observable<any>{
        let request = "/api/Generos";
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    getGenerosId(id:string):Observable<any>{
        let request = "/api/Generos/"+id;
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    //peliculas

    getPeliculaId(id:string):Observable<any>{
        let request = "/api/Peliculas/"+id;
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    buscarPeliculas(titulo:string):Observable<any>{
        let request = "/api/Peliculas/PeliculasTitulo/"+titulo;
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    getPeliculaNacionalidad(nacionalidad: string):Observable<any>{
        let request = "/api/Peliculas/PeliculasNacionalidad/" + nacionalidad;
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    getPeliculaGenero(genero: string):Observable<any>{
        let request = "/api/Peliculas/PeliculasGenero/" + genero;
        let url = Global.urlPeliculas+request;
        return this._http.get(url)
    }

    modifyPeliculaGenero(idPelicula: string, idGenero: string): Observable<any>{
        let request = "/api/Peliculas/UpdatePeliculaGenero/"+ idPelicula +"/"+idGenero;
        let url = Global.urlPeliculas + request
        let header = new HttpHeaders().set("Content-Type","application/json");
        return this._http.put(url,{headers: header})
    }

    deletePelicula(idPelicula: string): Observable<any>{
        let request = "/api/Peliculas/"+ idPelicula;
        let url = Global.urlPeliculas + request
        return this._http.delete(url)
    }
}