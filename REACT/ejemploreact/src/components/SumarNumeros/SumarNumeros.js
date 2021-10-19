import foto from './../../assets/images/LOGO_PERSONAL.png';

function SumarNumeros() {

    const sumar = (num1, num2) => {
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
    }

    return (
        <div>
            <h1>SUMAR NUMEROS Ejemplo Básico</h1>
            <img src={foto} width="300px" alt="foto" /><br />
            <button style={{ backgroundColor: "darkgreen", color: "white" }} onClick={() => sumar(8, 12)}>Sumar numeros estaticos</button>
        </div>
    );
}

export default SumarNumeros;