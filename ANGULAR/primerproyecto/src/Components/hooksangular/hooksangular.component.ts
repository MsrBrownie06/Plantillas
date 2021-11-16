import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html",
})

export class HooksAngular implements OnInit,DoCheck,OnDestroy{
    public mensaje: string;

    constructor(){
        this.mensaje = "Mensaje desde Component";
        console.log("Constructor, yo voy primero")
    }
    
    ngOnInit(): void {
        console.log("ngOnInit(): Ejecuto despues del constructor")
    }

    ngDoCheck(): void{
        console.log("ngDoCheck(): La vista ha cambiado")
    }

    ngOnDestroy(): void{
        console.log("ngOnDestroy(): Componente destruido")
    }

    cambiarMensaje(): void{
        this.mensaje = "He cambiado mi mensaje anterior!!!!"
    }

}