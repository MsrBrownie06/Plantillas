import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { Apuesta } from 'src/app/Models/Apuesta';


@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  public apuestas!: Array<Apuesta>
  public idApuesta!: number;

  constructor(
    private _service: ChampiosService
  ) { }

  ngOnInit(): void {
    this.cargarApuestas();
  }

  cargarApuestas(){
    this._service.getApuestas().subscribe(res=>{
      this.apuestas = res;
    })
  }

  cargarIdApuesta(id: number){
    this.idApuesta = id;
  }

  eliminarApuesta(){
    this._service.deleteApuesta(this.idApuesta.toString()).subscribe(res=>{
      this.cargarApuestas();
    })
  }

}
