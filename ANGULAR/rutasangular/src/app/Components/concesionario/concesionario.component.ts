import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/Models/Coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {

  public coches: Array<Coche>;
  public mensaje!: string;

  seleccionarCochePadre(event: any):void{
    this.mensaje = "Coche seleccionado!!!" + event.marca + " Velocidad Maxima: "+ event.velocidadMax;
  }

  constructor() {
    this.coches = [
      new Coche("Peugeot","307",0,300,15,false),
      new Coche("Honda","Civic",0,280,20,false),
      new Coche("BMW","Serie 8",0,250,10,false),
      new Coche("Toyota","C-Hr",0,320,25,false),
    ]
  }

  ngOnInit(): void {
  }

}
