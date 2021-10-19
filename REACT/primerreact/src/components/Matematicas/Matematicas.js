function Matematicas(props) {
  const ElDoble = (num) => {
    console.log("el doble de " + num + " es: " + num * 2);
  };

  const { Num, ElTriple } = props;
  return (
    <div>
      <h1>Soy el numero {Num}</h1>
      <button onClick={() => ElDoble(Num)}>Hacer el doble</button>
      <button onClick={() => ElTriple(Num)}>Hacer el triple</button>
    </div>
  );
}

export default Matematicas;
