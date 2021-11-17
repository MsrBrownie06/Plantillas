import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/Services/departamentos.service';
import { Departamento } from 'src/app/Models/Departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentos!: Array<Departamento>

  constructor(private _service: DepartamentoService) { }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(res=>{
      this.departamentos = res
    })
  }

}
