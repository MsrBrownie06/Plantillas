import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/Services/departamentos.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/Models/Departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentos!: Array<Departamento>

  constructor(private _service: DepartamentoService, private _param: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.cargarDepartamentos()
    //Forma 1
    this._param.params.subscribe((params: Params)=>{
      if(params["idDept"] != null){
        this._service.deleteDepartamento(params["idDept"]).subscribe(res=>{
          this._router.navigate(["/departamento"])
        })
      }
    })
  }
  //Forma 2
  eliminarDepartamento(idDept: number){
    this._service.deleteDepartamento(idDept.toString()).subscribe(res=>{
      this.cargarDepartamentos();
    })
  }

  cargarDepartamentos(){
    this._service.getDepartamentos().subscribe(res=>{
      this.departamentos = res
    })
  }

}
