import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { Equipo } from 'src/app/Models/Equipo';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public equipos!:Array<Equipo>

  constructor(
    private _service:ChampiosService
  ) { }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(){
    this._service.getEquipos().subscribe(res=>{
      this.equipos = res
    })
  }

}
