import { Component } from "@angular/core";

@Component({
    selector: "app-tabla-multiplicar",
    templateUrl: "./tablaMultiplicar.component.html"
})

export class TablaMultiplicar{
    public numTabla!: number;
    public numOperacion!: number;
    public resultados: Array<number>;

    constructor(){
        this.resultados = [];
    }

    crearTabla(){
        this.resultados = [];
        this.numOperacion = this.numTabla
        for (let i = 1; i <= 10; i++) {
            let res = this.numTabla*i;
            this.resultados.push(res)
        }
        console.log(this.resultados)
    }
}