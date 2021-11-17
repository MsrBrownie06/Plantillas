import { Component, OnInit } from '@angular/core';

//importamos el servicio de empleados para accedr a sus funciones
import { EmpleadosService } from 'src/app/Services/empleados.service';
//importamos el modelo del empleado 
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {

  public empleados!: Array<Empleado>

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(res=>{
      this.empleados = res
    })
  }

}
