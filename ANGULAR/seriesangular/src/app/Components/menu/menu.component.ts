import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/Services/series.service';
import { Serie } from 'src/app/Models/Serie'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series!: Array<Serie>

  constructor(private _service: SeriesService) { }

  ngOnInit(): void {
    this.cargarSeries();
  }

  cargarSeries(){
    this._service.getSeries().subscribe(res=>{
      this.series = res
    })
  }

}
