import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-collatz',
  templateUrl: './menu-collatz.component.html',
  styleUrls: ['./menu-collatz.component.css']
})
export class MenuCollatzComponent implements OnInit {

  public aleatorios: Array<number>;
  public dado: number;
  constructor() { 
    this.aleatorios = [];
    this.dado = 0;
      this.generarAleatorios();
  }

  generarAleatorios() : void{

    for (let i = 0; i <= 10; i++) {
      this.dado = Math.round((Math.random()*50)+1)
      this.aleatorios.push(this.dado)
    }
    console.log(this.aleatorios)

  }

  ngOnInit(): void {

  }

}
