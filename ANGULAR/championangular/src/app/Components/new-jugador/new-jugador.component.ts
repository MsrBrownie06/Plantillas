import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChampiosService } from 'src/app/Services/champions.service';
import { Equipo } from 'src/app/Models/Equipo';
import { Jugador } from 'src/app/Models/Jugador';

@Component({
  selector: 'app-new-jugador',
  templateUrl: './new-jugador.component.html',
  styleUrls: ['./new-jugador.component.css']
})
export class NewJugadorComponent implements OnInit {

  public nombre!: string;
  public posicion!: string;
  public fecha!: string;
  public pais!: string;
  public idEquipo!: string;

  @ViewChild("imagenCaja") cajaImagen!: ElementRef;

  public equipos!: Array<Equipo>

  constructor(private _service: ChampiosService) { }

  ngOnInit(): void {
    this.cargarEquipos()
  }

  cargarEquipos(){
    this._service.getEquipos().subscribe(res=>{
      this.equipos = res
    })
  }

  insertarJugador(){
    
    console.log(this.nombre)
    console.log(this.cajaImagen.nativeElement.files[0])
    this._service.inputFile(this.cajaImagen.nativeElement.files[0]).subscribe(res=>{
    })
    console.log(this.fecha)
    console.log(this.idEquipo)
  }

}
