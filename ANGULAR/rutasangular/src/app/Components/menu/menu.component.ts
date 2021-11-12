import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(rutas : ActivatedRoute) {

    rutas.params.subscribe((parametros: Params)=>{
      
    })

   }

  ngOnInit(): void {
  }

}