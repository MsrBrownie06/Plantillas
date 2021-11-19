import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Jugadores } from 'src/app/models/Jugador';

@Component({
  selector: 'app-buscarjugadores',
  templateUrl: './buscarjugadores.component.html',
  styleUrls: ['./buscarjugadores.component.css']
})
export class BuscarjugadoresComponent implements OnInit {

  public jugadores! : Array<Jugadores>;
  public valor! : string;

  constructor(private _route :ActivatedRoute, private _service : ServiceApuestas) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      this.valor = params['nombre'];
      this.cargarJugadores();
    });
  }

  cargarJugadores(){
    this._service.buscarJugadores(this.valor).subscribe(res => {
      this.jugadores = res;
    });
  }
}
