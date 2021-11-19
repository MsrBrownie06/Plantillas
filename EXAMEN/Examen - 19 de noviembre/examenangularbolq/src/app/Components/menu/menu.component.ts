import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/Models/Genero';
import { Nacionalidad } from 'src/app/Models/Nacionalidad';
import { PeliculaService } from 'src/app/Services/pelicula.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public generos!: Array<Genero>
  public nacionalidades!: Array<Nacionalidad>
  public buscar!:string

  constructor(private _service: PeliculaService, private _router:Router) { }

  ngOnInit(): void {
    this.cargarPeliculasGenero()
    this.cargarPeliculasNacionalidad()
  }

  cargarPeliculasGenero(){
    this._service.getGeneros().subscribe(res=>{
      this.generos = res;
    })
  }

  cargarPeliculasNacionalidad(){
    this._service.getNacionalidad().subscribe(res=>{
      this.nacionalidades = res
    })
  }

  buscarPeliculas(){
    this._router.navigate(['/buscador',this.buscar])
  }

}
