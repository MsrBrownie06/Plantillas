import { Component, OnInit } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { Router } from '@angular/router';
import { Apuesta } from 'src/app/Models/Apuesta';

@Component({
  selector: 'app-new-apuesta',
  templateUrl: './new-apuesta.component.html',
  styleUrls: ['./new-apuesta.component.css']
})
export class NewApuestaComponent implements OnInit {

  public usuario!: string;
  public real!: string;
  public atletico!: string;
  public fecha!: string;

  constructor(
    private _service:ChampiosService,
    private _router:Router
  ) { }

  ngOnInit(): void {

  }

  insertarApuesta(){
    let resultado = this.real + "-" + this.atletico
    let apuesta = new Apuesta(0,this.usuario,resultado,this.fecha)
    this._service.insertApuesta(apuesta).subscribe(res=>{
        this._router.navigate(["/apuestas"])
    })
  }
}
