import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/Services/empleados.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-empleados-salario',
  templateUrl: './empleados-salario.component.html',
  styleUrls: ['./empleados-salario.component.css']
})
export class EmpleadosSalarioComponent implements OnInit {

  //para saltar la excepcion de que lo he creado, pero que todavia no lo he rellenado
  public empleados!: Array<Empleado>
  public salario!: string

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
  }

  mostrarEmpleados():void{
    this._service.getEmpleadosSalario(this.salario).subscribe(res=>{
      this.empleados = res
    })
  }

}
