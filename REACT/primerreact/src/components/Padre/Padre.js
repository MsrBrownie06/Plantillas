import Matematicas from "../Matematicas/Matematicas";

const ElTriplePadre = (num) => {
  console.log("El triple del numero " + num + " es: " + num * 3);
};

function Padre() {
  return (
    <div>
      <Matematicas Num="5" ElTriple={ElTriplePadre} />
      <Matematicas Num="8" ElTriple={ElTriplePadre} />
      <Matematicas Num="12" ElTriple={ElTriplePadre} />
    </div>
  );
}

export default Padre;
