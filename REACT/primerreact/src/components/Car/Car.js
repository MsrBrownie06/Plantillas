import React, { useState } from "react";

function Car(props) {
  //podemos desestructurar como hemos visto o tambien poder crear un objeto con sus propiedades

  var coche = {
    marca: props.Marca,
    modelo: props.Modelo,
    aceleracion: parseInt(props.Aceleracion),
    velocidadMaxima: parseInt(props.VelocidadMaxima),
  };

  //los metodos pueden devolver contenido HTML para ser utilizados en nuestro dibujo del componente
  const estadoCoche = (estado) => {
    if (estado === true) {
      return <span style={{ color: "green" }}>ENCENDIDO</span>;
    } else {
      return <span style={{ color: "red" }}>APAGADO</span>;
    }
  };

  //esta variable se usara para saber si el coche esta arrancado o no.
  const [estado, setEstado] = useState(false); //lo usaremos como un boolean

  //este metodo cambiara el boolean del coche al pulsar el boton
  const cambiarState = (estadoC) => {
    if (estadoC === true) {
      setEstado(false);
      setVelocidad(0);
    } else {
      setEstado(true);
    }
  };

  //esta variable se usara para saber la velocidad actual del coche
  const [velocidad, setVelocidad] = useState(0);

  //este metodo aumentara la velocidad solo cuando el estado del coche sea true y volvera a cero (0) cuando el estado del coche sea false
  //tambien verificara cuando llegue a la maxima velocidad del coche, para no acelerar mas.
  const cambiarVelocidad = () => {
    let velocidadF = 0;
    if (estado === false) {
      setVelocidad(0);
      alert("debe encender el coche para acelerar");
    } else {
      velocidadF = velocidad + coche.aceleracion;
      if (velocidadF >= coche.velocidadMaxima) {
        setVelocidad(coche.velocidadMaxima);
      } else {
        setVelocidad(velocidadF);
      }
    }
  };

  return (
    <div>
      <h1 style={{ color: "lightgreen", backgroundColor: "darkgreen" }}>
        Marca: {coche.marca}, Modelo: {coche.modelo}
      </h1>
      <h3>El coche está: {estadoCoche(estado)}</h3>
      <h3 style={{ color: "purple" }}>Velocidad Actual: {velocidad}</h3>
      <button onClick={() => cambiarState(estado)}>Arrancar/Detener</button>
      <button onClick={() => cambiarVelocidad()}>Acelerar</button>
    </div>
  );
}

export default Car;
