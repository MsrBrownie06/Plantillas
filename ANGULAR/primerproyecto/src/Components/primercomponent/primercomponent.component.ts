import {Component} from '@angular/core'

@Component({
    //indicaremos el nombre del componente para trabajar
    selector: "primer-component",
    templateUrl: './primercomponent.component.html',
    styleUrls: ['./primercomponent.component.css'],
})

export class PrimerComponent{
    //declaramos propiedades
    public titulo: string;
    public descripcion: string;
    public anio: number;
    public ocultar: boolean;
    //Ahora inicializaremos mediante un contructor estas propiedades
    constructor(){
        this.titulo = "Hoy es jueves y toca aprender Angular"
        this.descripcion = "Aprendiendo Angular con ganas y a tope"
        this.anio = 2021;
        this.ocultar = false;
    }

    ocultarComponente(): void{
        this.ocultar = true;
    }


}