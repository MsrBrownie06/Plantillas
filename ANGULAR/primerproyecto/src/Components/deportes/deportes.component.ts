import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class Deportes{
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor(){
        this.sports = ["Baloncesto", "Judo", "Futbol", "Tenis", "Balminton", "Golf", "Padel", "Karate"]
        this.numeros = [12,548,23,69,123,25,49,75,64,5,4]
    }
}