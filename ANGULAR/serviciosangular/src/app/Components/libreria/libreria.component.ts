import { Component, OnInit } from '@angular/core';
import {Comic} from 'src/app/Models/Comic';
import { ComicsService } from 'src/app/Services/comics.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  public comics!: Array<Comic>
  public mensaje!: string;

  public comic: Comic;

  constructor( private _service: ComicsService ) { 
    this.comic = {
      nombre : "",
      imagen : "",
      descripcion:""
    };
  }

  comicFavorito(event: any){
    this.mensaje = "El comic Favorito ha sido: "+ event.nombre
  }

  insertarComic(){
    let newComic = {
      nombre : this.comic.nombre,
      imagen : this.comic.imagen,
      descripcion: this.comic.descripcion
    }

    this.comics.push(newComic)
  }

  modificarComic(event: any){
    event.nombre = this.comic.nombre
    event.imagen = this.comic.imagen
    event.descripcion = this.comic.descripcion
  }

  eliminarComic(event: any){
    let indexComic = this.comics.indexOf(event)
    this.comics.splice(indexComic,1)
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}
