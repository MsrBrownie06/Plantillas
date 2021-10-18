function Metodos(){

    const mostrarMensaje = () => {
        console.log("has pulsado un botón");
    }

    //METODO CON PARAMETROS DE ENTRADA
    const dobleNumero = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }

    return (

        <div>

            {mostrarMensaje()}
            <h1>Ejemplo del metodo en REACT</h1>
            <button onClick={ () => mostrarMensaje() }>Pulsar Mensaje</button>

            <button onClick={ () => dobleNumero(2) }>numero doble</button>
        </div>
    );

}

export default Metodos;