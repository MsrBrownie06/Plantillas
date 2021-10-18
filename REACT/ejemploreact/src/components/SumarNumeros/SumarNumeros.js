import foto from '../../LOGO_PERSONAL.png';

function SumarNumeros() {

    const sumar = (num1, num2) => {
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
    }

    return (
        <div>
            <h1>SUMAR NUMEROS</h1>
            <img src={foto} width="300px" alt="logo" /><br />
            <button style={{ backgroundColor: "darkgreen", color: "white" }} onClick={() => sumar(8, 12)}>Sumar numeros estaticos</button>
        </div>
    );
}

export default SumarNumeros;