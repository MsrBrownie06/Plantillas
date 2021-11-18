import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { Equipo } from 'src/app/Models/Equipo';

@Component({
  selector: 'app-new-equipo',
  templateUrl: './new-equipo.component.html',
  styleUrls: ['./new-equipo.component.css']
})
export class NewEquipoComponent implements OnInit {

  public nombre!: string;

  constructor(
    private _service: ChampiosService
  ) { }

  ngOnInit(): void {

  }

  insertarEquipo(){}

}
