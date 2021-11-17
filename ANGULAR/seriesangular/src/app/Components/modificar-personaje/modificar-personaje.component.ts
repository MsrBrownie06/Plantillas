import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/Services/series.service';
import { PersonajeService } from 'src/app/Services/personaje.service';
import { Personaje } from 'src/app/Models/Personaje';
import { Serie } from 'src/app/Models/Serie';

@Component({
  selector: 'app-modificar-personaje',
  templateUrl: './modificar-personaje.component.html',
  styleUrls: ['./modificar-personaje.component.css']
})
export class ModificarPersonajeComponent implements OnInit {

  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;

  constructor(private _series:SeriesService, private _personaje:PersonajeService) { }

  ngOnInit(): void {

    this._series.getSeries().subscribe(res=>{
      this.series = res;
    })

    this._personaje.getPersonajesLista().subscribe(res=>{
      this.personajes = res;
    })
  }

  

}
