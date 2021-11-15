import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from 'src/app/Models/Coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  //con '@Input()' podemos ver que nos proporciona un objeto Coche que viene desde concesionario, quien los esta llamando para crear un coche 
  @Input() car!: Coche;

  //con '@Output()' obtenemos el metodo del padre que nos lo paso mediante el nombre 'seleccionarCoche' 
  //y creamos un EventEmitter() para poder usar el metodo del padre
  @Output() seleccionarCoche: EventEmitter<any> = new EventEmitter();
  public mensaje!: string;

  //metodo para selccionar un elemento y llamar al padre
  seleccionarCocheHijo():void{
    //llamamos al metodo del padre con '.emit()' el cual solo puede tener un argumento de entrada, por eso le mandamos un objeto con datos
    this.seleccionarCoche.emit({marca: this.car.marca, velocidadMax: this.car.velocidadMax});
  }

  constructor() { }

  //cunado recibimos objetos input, No se pueden utilizar en el constructor
  ngOnInit(): void {
    this.comprobarEstado();
  }

  encenderCoche(): void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void{
    if(this.comprobarEstado() == false){
      alert("El coche no esta encendido")
    }else{
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if(this.car.velocidad > this.car.velocidadMax){
        this.car.velocidad = this.car.velocidadMax
      }
    }
  }

  //metodo para comporbar el estado y lanzar mensajes
  comprobarEstado() : boolean{
    if(this.car.estado == false){
      this.mensaje = "El coche esta apagado, sin arrancar"
      this.car.velocidad = 0;
      return false
    }else{
      this.mensaje = "El coche esta encendido, arrancado"
      return true;
    }
  }


}
