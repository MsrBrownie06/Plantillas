export class Persona{
    //si los nombres de las propiedades se llaman igual a las que hay en la Api, los enlazará automaticamente
    constructor(public IdPersona: number, public Nombre: string, public Email: string, public Edad: number){
        
    }
}