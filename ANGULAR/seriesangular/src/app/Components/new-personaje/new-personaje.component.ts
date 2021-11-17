import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeService } from 'src/app/Services/personaje.service';
import { SeriesService } from 'src/app/Services/series.service';
import { Personaje } from 'src/app/Models/Personaje';
import { Serie } from 'src/app/Models/Serie';

@Component({
  selector: 'app-new-personaje',
  templateUrl: './new-personaje.component.html',
  styleUrls: ['./new-personaje.component.css']
})
export class NewPersonajeComponent implements OnInit {

  public series!: Array<Serie>;
  public nombre!: string;
  public imagen!: string;
  public optionSerie!: string;

  constructor(private _service: PersonajeService, private _serviceSerie: SeriesService, private _router: Router) { }

  ngOnInit(): void {
    this.cargarSeries();
  }
  
  cargarSeries(){
    this._serviceSerie.getSeries().subscribe(res=>{
      this.series = res
    })
  }

  insertar(){
    var personaje = new Personaje(0,this.nombre,this.imagen,parseInt(this.optionSerie));
    console.log(personaje)  
    this._service.insertPersonaje(personaje).subscribe(res=>{
      this._router.navigate(["/personajes",this.optionSerie])
    })  
  }

}
