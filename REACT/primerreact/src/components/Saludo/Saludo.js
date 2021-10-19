function Saludo(props){
    // var dato = "Añadiendo información a travez de esta variable var dato";
    // var nombre = props.nombre;
    // var edad = props.edad;

    const {nombre,edad,metodoPadre} = props; // al hacer esto, el nombre debe ser igual al props que se envia desde el Padre


    //inventamos un nombre de variable que es un metodo para llamar a alguna accion que tengamos en el padre
    //metodo = props.metodoPadre
    return (
        <div>
            <button onClick={ () => metodoPadre("el propio hijo "+nombre + " con "+edad+" años")}>Llamar al metodo Padre</button>
            {/* <h1>Hoy es dia lunes para practicar React!!!</h1>
            <h2>Estamos añadiendo mas cosas</h2>
            <h3>{dato}</h3>
            <h3>Variable que viene de props desde el index.js: {nombre} ademas de tener una edad de: {edad}</h3> */}

        </div>
    );

}

export default Saludo;