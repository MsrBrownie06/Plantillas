import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/Models/Comic';
import { ComicsService } from 'src/app/Services/comics.service';

@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css'],
})
export class ComicsinyeccionComponent implements OnInit {

  public comics!: Array<Comic>;

  constructor(private _service: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}
