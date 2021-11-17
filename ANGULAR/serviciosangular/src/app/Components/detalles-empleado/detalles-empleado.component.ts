import { Component, OnInit } from '@angular/core';
//importamos el servicio de Empleados
import { EmpleadosService } from 'src/app/Services/empleados.service';
//importamos los paquetes que necesitamos para poder 
//obtener los parametros de la url
import { ActivatedRoute, Params } from '@angular/router';
//importamos el modelo del empleado
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-detalles-empleado',
  templateUrl: './detalles-empleado.component.html',
  styleUrls: ['./detalles-empleado.component.css']
})
export class DetallesEmpleadoComponent implements OnInit {

  empleado!: Empleado;
  idEmpleado!: string;

  constructor(private _service: EmpleadosService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params:Params)=>{
      this.idEmpleado = params["id"]

      this._service.getEmpleadoId(this.idEmpleado).subscribe(res=>{
        this.empleado = res
      })
    })

  }

}
