import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Equipo } from 'src/app/Models/Equipo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  public equipo!: Equipo
  public idEquipo!: string

  constructor(
    private _service:ChampiosService,
    private _router:ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this._router.params.subscribe((params:Params)=>{
      this.idEquipo = params["idEquipo"]
      this.cargarJugador();
    })
    
  }

  cargarJugador(){
    this._service.getEquipoId(this.idEquipo).subscribe(res=>{
      this.equipo = res
    })
  }
}
