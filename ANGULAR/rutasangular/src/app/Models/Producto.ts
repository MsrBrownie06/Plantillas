export class Producto{
    public nombre: string;
    public imagen: string;
    public precio: number;

    //crearemos un constructor para poder recibir parametros
    constructor(nombre: string,imagen: string ,precio: number){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }

}