import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  public jugadores!: Array<Jugador>
  public idEquipo!: string

  constructor(
    private _service: ChampiosService,
    private _router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._router.params.subscribe((params:Params)=>{
      this.idEquipo = params["idEquipo"]
      this.cargarEquipos();
    })
  }

  cargarEquipos(){
    this._service.getJugadoresEquiposId(this.idEquipo).subscribe(res=>{
      this.jugadores = res
    })
  }

}
