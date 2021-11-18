import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { Jugador } from 'src/app/Models/Jugador';

@Component({
  selector: 'app-new-jugador',
  templateUrl: './new-jugador.component.html',
  styleUrls: ['./new-jugador.component.css']
})
export class NewJugadorComponent implements OnInit {

  public nombre!: string;

  constructor(private _service: ChampiosService) { }

  ngOnInit(): void {
  }

}
