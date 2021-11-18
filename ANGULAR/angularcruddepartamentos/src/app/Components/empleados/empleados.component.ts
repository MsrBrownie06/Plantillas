import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/Services/empleados.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleados!:Array<Empleado>
  public idDept!: number;
  public incremento!: string;

  constructor(private _service: EmpleadoService, private _router: ActivatedRoute) {

    this.incremento = "0"

   }

  ngOnInit(): void {
    this._router.params.subscribe((params: Params)=>{
      this.idDept = params["idDept"]
      this.cargarEmpleadosDept();
    })

  }

  cargarEmpleadosDept(){
      this._service.getEmpleadosDepartamento(this.idDept.toString()).subscribe(res=>{
        this.empleados = res;
      })
  }

  modificarSalario(idEmpleado: number){
    this._service.incrementarSalario(idEmpleado.toString(),this.incremento).subscribe(res=>{
      this.cargarEmpleadosDept();
    })
  }
}
