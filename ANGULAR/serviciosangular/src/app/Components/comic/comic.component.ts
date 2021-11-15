import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from 'src/app/Models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic!: Comic;
  @Output() favorito: EventEmitter<any> = new EventEmitter();

  constructor() { }

  seleccionarComicFav(){
    this.favorito.emit({nombre: this.comic.nombre})
  }

  ngOnInit(): void { 
  }

}
