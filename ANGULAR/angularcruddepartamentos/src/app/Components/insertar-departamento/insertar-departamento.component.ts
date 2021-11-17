import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/Services/departamentos.service';
import { Departamento } from 'src/app/Models/Departamento';
//para redireccionar
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-departamento',
  templateUrl: './insertar-departamento.component.html',
  styleUrls: ['./insertar-departamento.component.css']
})
export class InsertarDepartamentoComponent implements OnInit {

  //debo obtener los datos en string y despues modificarlo
  public numero!: string;
  public nombre!: string;
  public localidad!: string;

  constructor(private _service: DepartamentoService, private _router: Router) {

   }

   insertarDepartamento() : void{
     var departamento = new Departamento(parseInt(this.numero),this.nombre,this.localidad)
      this._service.insertDepartamento(departamento).subscribe(res=>{
        this._router.navigate(["/departamento"]);
      })
   }

  ngOnInit(): void {
  }

}
