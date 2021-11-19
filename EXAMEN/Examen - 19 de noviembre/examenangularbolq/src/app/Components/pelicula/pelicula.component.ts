import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { PeliculaService } from 'src/app/Services/pelicula.service';
import { Pelicula } from 'src/app/Models/Pelicula';
import { Genero } from 'src/app/Models/Genero';
import { Nacionalidad } from 'src/app/Models/Nacionalidad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public peliculas!: Array<Pelicula>;
  public idGenero!: string;
  public idNacionalidad!: string;
  public peliculaSeleccionada!: Pelicula;
  public nombreGenero!: Genero
  public nombreNacionalidad!: Nacionalidad
  public lugar !: string;
  public eliminado!: boolean;
  public mostrarPelicula!: boolean;
  
  constructor(private _service:PeliculaService, private _route:ActivatedRoute, private _router:Router) {
    this.eliminado = false;
    this.mostrarPelicula = false;
   }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      if(params["genero"] != null){
        this.idGenero = params["genero"]
        this.cargarPeliculasGen();
      }

      if(params["nacionalidad"] != null){
        this.idNacionalidad = params["nacionalidad"]
        this.cargarPeliculasNac();
      }
    })
  }

  cargarPeliculasNac(){
    this.mostrarPelicula = false
    this.eliminado = false
    this._service.getPeliculaNacionalidad(this.idNacionalidad).subscribe(res=>{
      this.peliculas = res;
    })
    this._service.getNacionalidadId(this.idNacionalidad).subscribe(res=>{
      this.nombreNacionalidad = res;
      this.lugar = this.nombreNacionalidad.nombre
    })
  }

  cargarPeliculasGen(){
    this.mostrarPelicula = false
    this.eliminado = false
    this._service.getPeliculaGenero(this.idGenero).subscribe(res=>{
      this.peliculas = res;
    })
    this._service.getGenerosId(this.idGenero).subscribe(res=>{
      this.nombreGenero = res
      this.lugar = this.nombreGenero.nombre
    })
  }

  cargarDetallesPelicula(id:number){
    this._service.getPeliculaId(id.toString()).subscribe(res=>{
      this.peliculaSeleccionada = res;
      this.mostrarPelicula = true;
    })
  }

  modificarGenero(event: any){
    this._service.modifyPeliculaGenero(event.idPelicula,event.idGenero).subscribe(res=>{
      this._router.navigate(['/peliculasGenero',event.idGenero])
      this.eliminado = false
    })
  }

  eliminarPelicula(event: any){
    this._service.deletePelicula(event.toString()).subscribe(res=>{
      this.eliminado = true
      this.mostrarPelicula = false
      this._route.params.subscribe((params:Params)=>{
        if(params["genero"] != null){
          this.cargarPeliculasGen();
        }else{
          if(params["nacionalidad"] != null){
            this.cargarPeliculasNac();
          }
        }
  
      })
    })
  }

}
