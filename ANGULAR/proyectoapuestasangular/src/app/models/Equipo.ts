export class Equipos{
    constructor(
        public idEquipo: number,
        public nombre: string,
        public imagen: string,
        public champions: number,
        public paginaWeb: string,
        public descripcion : string
    ){}
}