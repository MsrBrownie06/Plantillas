import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {

  public numeroCollatz: number;
  public numero: number;
  public resultados: Array<number>;

  constructor(private _activeRoute: ActivatedRoute) {
    this.numeroCollatz = 0;
    this.numero = 0;
    this.resultados = [];

   }

  ngOnInit(): void {

    this._activeRoute.params.subscribe((params: Params)=>{
      if(params['numero'] != null){
        //asignamos la propiedad para la pagina, siempre vendran como string
        this.resultados = [];
        this.numeroCollatz = parseInt(params['numero']);
        this.numero = parseInt(params['numero']);
        
        while(this.numero != 1){
          if(this.numero%2==0){
            this.numero = this.numero/2
          }else{
            this.numero = (this.numero*3)+1
          }
          this.resultados.push(this.numero)
        }


      }
    })

  }

}
