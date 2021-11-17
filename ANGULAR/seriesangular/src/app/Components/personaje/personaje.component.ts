import { Component, OnInit } from '@angular/core';
import { PersonajeService } from 'src/app/Services/personaje.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Personaje } from 'src/app/Models/Personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  public personajes!: Array<Personaje>;
  public idSerie!: string;

  constructor(private _service: PersonajeService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.params.subscribe((params:Params)=>{
      this.idSerie = params["idSerie"]
      this.cargarPersonajes();
    })
  }

  cargarPersonajes(){
    this._service.getPersonajes(this.idSerie).subscribe(res=>{
      this.personajes = res
    })
  }

}
