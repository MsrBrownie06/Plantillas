import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Jugadores } from 'src/app/models/Jugador';

@Component({
  selector: 'app-detallesjugador',
  templateUrl: './detallesjugador.component.html',
  styleUrls: ['./detallesjugador.component.css']
})
export class DetallesjugadorComponent implements OnInit {

  public idJugador! : string;
  public jugador! : Jugadores;

  constructor(private _route :ActivatedRoute, private _service : ServiceApuestas, private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var id = params['idJugador'];
      this.idJugador = id;
      console.log(id);
      this.cargarJugador();
    });
  }

  cargarJugador(){
    this._service.getJugadorId(this.idJugador).subscribe(res => {
      this.jugador = res;
    });
  }

}
