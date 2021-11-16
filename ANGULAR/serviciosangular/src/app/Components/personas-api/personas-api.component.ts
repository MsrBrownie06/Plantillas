import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas.service';
import { Persona } from 'src/app/Models/Persona';
@Component({
  selector: 'app-personas-api',
  templateUrl: './personas-api.component.html',
  styleUrls: ['./personas-api.component.css']
})
export class PersonasApiComponent implements OnInit {

  public personas!: Array<Persona>

  constructor(private _service: PersonasService) { }

  ngOnInit(): void {
    this._service.getPersonas().subscribe(res=>{
      this.personas = res;
    })
  }

}
