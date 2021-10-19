function Matematicas(props) {
  const ElDoble = (num) => {
    console.log("el doble de " + num + " es: " + num * 2);
  };

  const { num, elTriple } = props;
  return (
    <div>
      <h1>Soy el numero {num}</h1>
      <button onClick={() => ElDoble(num)}>Hacer el doble</button>
      <button onClick={() => elTriple(num)}>Hacer el triple</button>
    </div>
  );
}

export default Matematicas;
