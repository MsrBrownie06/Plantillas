import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  templateUrl: './numero-doble.component.html',
  styleUrls: ['./numero-doble.component.css']
})
export class NumeroDobleComponent implements OnInit {

  public numero!: number;
  public doble!: number;

  //Necesitamos recibir el objeto ActivatedRoute para recuperar los parametros.
  //En angular, los objetos inyectados se denominan con un guion bajo "_"
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  redirect(num: number): void{
    this._router.navigate(["/numeroDoble", num])
  }

  ngOnInit(): void {
    //aqui es donde se recuperaran los parametros. Para ellos utilizaremos una promesa llamada "subscribe"
    //La promesa trae "params" con los parametros por su nombre

    this._activeRoute.params.subscribe(( params: Params)=>{
      //preguntamos si existe el parametro "numero"
      if(params['numero'] != null){
        //asignamos la propiedad para la pagina, siempre vendran como string
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2
      }
    })
  }

}
