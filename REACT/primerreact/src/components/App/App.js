//import logo from './logo.svg';
import './App.css';
import Saludo from './../Saludo/Saludo'

function App() {
  const metodoP = (descripcion) => {
    console.log("Soy "+ descripcion)
  }
  return (
    <div className="App">
      <Saludo nombre="Oscar" edad="20" metodoPadre={metodoP} />
      <Saludo nombre="Sara" edad="22" metodoPadre={metodoP} />
    </div>
  );
}

export default App;
