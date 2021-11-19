import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceApuestas } from 'src/app/services/apuestas.service';
import { Equipos } from 'src/app/models/Equipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('cajaBuscar') cajaBuscar! : ElementRef;
  public equipos! : Array<Equipos>;

  constructor(private _service : ServiceApuestas,  private _router : Router) { }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos() {
    this._service.getEquipos().subscribe(res => {
      this.equipos = res;
    });
  }

  buscarJugadores() {
    var nom = this.cajaBuscar.nativeElement.value;
    //console.log(nom);
    this._router.navigate(['/buscarjugador',nom]);
  }

}
