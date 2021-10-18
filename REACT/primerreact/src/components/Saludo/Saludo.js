function Saludo(props){
    var dato = "Añadiendo información a travez de esta variable var dato";
    // var nombre = props.nombre;
    // var edad = props.edad;

    const {nombre,edad} = props;
    return (
        <div>
            <h1>Hoy es dia lunes para practicar React!!!</h1>
            <h2>Estamos añadiendo mas cosas</h2>
            <h3>{dato}</h3>
            <h3>Variable que viene de props desde el index.js: {nombre} ademas de tener una edad de: {edad}</h3>
        </div>
    );

}

export default Saludo;