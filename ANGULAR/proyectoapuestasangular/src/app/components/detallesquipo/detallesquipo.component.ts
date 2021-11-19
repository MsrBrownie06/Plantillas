import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Equipos } from 'src/app/models/Equipo';

@Component({
  selector: 'app-detallesquipo',
  templateUrl: './detallesquipo.component.html',
  styleUrls: ['./detallesquipo.component.css']
})
export class DetallesquipoComponent implements OnInit {

  public equipo! : Equipos
  public idEquipo! : string;

  constructor(private _route :ActivatedRoute, private _service : ServiceApuestas, private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var id = params['idEquipo'];
      this.idEquipo = id;
      console.log(id);
      this.cargarEquipo();
    });
  }

  cargarEquipo(){
    this._service.getEquipoId(this.idEquipo).subscribe(res => {
      this.equipo = res;
    });
  }

}
