import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Jugadores } from 'src/app/models/Jugador';

@Component({
  selector: 'app-tablajugadores',
  templateUrl: './tablajugadores.component.html',
  styleUrls: ['./tablajugadores.component.css']
})
export class TablajugadoresComponent implements OnInit {

  public idEquipo! : string;
  public jugadores! : Array<Jugadores>;

  constructor(private _route :ActivatedRoute, private _service : ServiceApuestas, private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var id = params['idEquipo'];
      this.idEquipo = id;
      console.log(id);
      this.cargarTablaJugadores();
    });
  }

  cargarTablaJugadores() {
    this._service.getJuagdoresEquipoId(this.idEquipo).subscribe(res => {
      this.jugadores = res;
    });
  }
}
