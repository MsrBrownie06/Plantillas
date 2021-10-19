function Matematicas(props) {
  const { Num, ElTriple } = props;

  const ElDoble = () => {
    let num = Num;
    console.log("el doble de " + num + " es: " + num * 2);
  };

  return (
    <div>
      <h1>Soy el numero {Num}</h1>
      <button onClick={() => ElDoble()}>Hacer el doble (hijo)</button>
      <button onClick={() => ElTriple(Num)}>Hacer el triple (padre)</button>
    </div>
  );
}

export default Matematicas;
