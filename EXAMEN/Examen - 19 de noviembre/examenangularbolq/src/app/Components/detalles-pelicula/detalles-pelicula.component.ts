import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaService } from 'src/app/Services/pelicula.service';
import { Genero } from 'src/app/Models/Genero';
import { Pelicula } from 'src/app/Models/Pelicula';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  @Input() pelicula!: Pelicula;
  @Output() modificar: EventEmitter<any> = new EventEmitter()
  @Output() eliminar: EventEmitter<any> = new EventEmitter()
  public idGenero!: number;
  public generos!: Array<Genero>
  public mostrar:boolean
  public url!:string


  constructor(private _service:PeliculaService, private _sanitizer: DomSanitizer) {
    this.mostrar = false
  }
  
  ngOnInit(): void {
    this.cargarGeneros()
    this.url = this.pelicula.enlaceVideo
  }

  modificarme(){
    this.modificar.emit({idPelicula: this.pelicula.idPelicula, idGenero: this.idGenero})
  }

  cargarGeneros(){
    this._service.getGeneros().subscribe(res=>{
      this.generos = res;
    })
  }

  eliminarPelicula(){
    this.eliminar.emit(this.pelicula.idPelicula)
  }

  mostrarVideo(){
    this.mostrar = true
  }

  getVideoIframe(url: string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

}
