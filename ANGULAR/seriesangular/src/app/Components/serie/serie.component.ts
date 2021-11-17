import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/Services/series.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from 'src/app/Models/Serie'

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  public serie!: Serie
  public idSerie!: string

  constructor(private _service:SeriesService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
      this._router.params.subscribe((params:Params)=>{
        this.idSerie = params["idSerie"]
        this.cargarSerie();
      })
  }

  cargarSerie(){
    this._service.getSeriesId(this.idSerie).subscribe(res=>{
      this.serie = res
    })
  }

}
