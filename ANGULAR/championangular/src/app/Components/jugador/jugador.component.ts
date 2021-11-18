import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  public jugador!: Jugador;
  public idJugador!: string;

  constructor(
    private _service: ChampiosService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._router.params.subscribe((params:Params)=>{
      this.idJugador = params["idJugador"]
      this.cargarJugador();
    })
  }

  cargarJugador(){
    this._service.getJugadorId(this.idJugador).subscribe(res=>{
      this.jugador = res
    })
  }

}
