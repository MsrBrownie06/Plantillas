import { Component, OnInit } from '@angular/core';
import { EmpleadoOficioService } from 'src/app/Services/empleadoOficio.service';
import { EmpleadoOficio } from 'src/app/Models/EmpleadoOficio';

@Component({
  selector: 'app-empleados-oficio',
  templateUrl: './empleados-oficio.component.html',
  styleUrls: ['./empleados-oficio.component.css']
})
export class EmpleadosOficioComponent implements OnInit {

  constructor(private _service: EmpleadoOficioService) { }

  public empleadosOficios!: Array<EmpleadoOficio>;
  public oficios!: Array<string>;
  public oficio!: string;

  ngOnInit(): void {
    this._service.getOficio().subscribe(res=>{
      this.oficios = res
    })
  }

  getEmpleados(){
    this._service.getEmpleadosOficio(this.oficio).subscribe(res=>{
      this.empleadosOficios = res
    })
  }

}
