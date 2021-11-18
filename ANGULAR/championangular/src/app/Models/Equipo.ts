export class Equipo{
    constructor(
        public idEquipo: number,
        public nombre: string,
        public imagen: string,
        public champions: string,
        public paginaWeb: string,
        public descripcion: string,
        public finalista: number,
    ){

    }
}