import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-fomulario-referencia",
    templateUrl: "./formulariosreferencia.component.html",
})

export class FormulariosReferencia{
    @ViewChild("numero1") cajaNumero1: ElementRef;
    @ViewChild("numero2") cajaNumero2: ElementRef;
    public suma: number;

    constructor(){
        this.suma = 0;
        this.cajaNumero1 = new ElementRef(0);
        this.cajaNumero2 = new ElementRef(0);
    }

    sumarNumeros(): void{
        var num1 = this.cajaNumero1.nativeElement.value;
        var num2 = this.cajaNumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}