import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/Services/departamentos.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Departamento } from 'src/app/Models/Departamento';

@Component({
  selector: 'app-modificar-departamento',
  templateUrl: './modificar-departamento.component.html',
  styleUrls: ['./modificar-departamento.component.css']
})
export class ModificarDepartamentoComponent implements OnInit {

  //debo obtener los datos en string y despues modificarlo
  public numero!: string;
  public nombre!: string;
  public localidad!: string;

  constructor(private _router:Router, private _service:DepartamentoService, private _activeRouter: ActivatedRoute) { 

  }

  modificarDepartamento(){
    var departamento = new Departamento(parseInt(this.numero),this.nombre,this.localidad);
    this._service.modifyDepartamento(departamento).subscribe(res=>{
      this._router.navigate(["/departamento"])
    })
  }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params:Params)=>{
      this.numero = params["numero"];
      this.nombre = params["nombre"];
      this.localidad = params["localidad"];
    })
  }

}
