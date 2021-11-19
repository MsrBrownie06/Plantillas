import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/Services/pelicula.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Pelicula } from 'src/app/Models/Pelicula';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public peliculas!: Array<Pelicula>
  public parametro!: string

  constructor(private _service: PeliculaService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
        this.parametro = params["parametros"]
        this.cargarPeliculasBuscadas()
    })
  }

  cargarPeliculasBuscadas(){
    this._service.buscarPeliculas(this.parametro).subscribe(res=>{
      this.peliculas = res;
    })
  }

}
