import Matematicas from "../Matematicas/Matematicas";

const ElTriplePadre = (num) => {
  console.log("El triple del numero " + num + " es: " + num * 3);
};

function Padre() {
  return (
    <div>
      <Matematicas num="5" elTriple={ElTriplePadre} />
      <Matematicas num="8" elTriple={ElTriplePadre} />
      <Matematicas num="12" elTriple={ElTriplePadre} />
    </div>
  );
}

export default Padre;
