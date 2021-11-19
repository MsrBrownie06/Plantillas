import { Component, OnInit ,  ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Apuestas } from 'src/app/models/Apuesta';
import { ServiceApuestas } from 'src/app/services/apuestas.service';

@Component({
  selector: 'app-nuevaapuesta',
  templateUrl: './nuevaapuesta.component.html',
  styleUrls: ['./nuevaapuesta.component.css']
})
export class NuevaapuestaComponent implements OnInit {

  public apueta! : Apuestas;
  @ViewChild("cajaUsuario") cajaUsuario! : ElementRef;
  @ViewChild("cajaMadrid") cajaMadrid! : ElementRef;
  @ViewChild("cajaAtletico") cajaAtletico! : ElementRef;
  @ViewChild("cajaFecha") cajaFecha! : ElementRef;

  constructor(private _router : Router, private _service : ServiceApuestas) { }

  ngOnInit(): void {
  }

  insertarApuesta(){
    var usuario = this.cajaUsuario.nativeElement.value;
    var apuestaUsuario = this.cajaMadrid.nativeElement.value + " - " + this.cajaAtletico.nativeElement.value;
    var fecha = this.cajaFecha.nativeElement.value;
    this.apueta = new Apuestas(0, usuario, apuestaUsuario,fecha);
    this._service.insertApuesta(this.apueta).subscribe(res => {
      this._router.navigate(['/apuesta']);
    });
  }

}
