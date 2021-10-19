import foto from './../../assets/images/LOGO_PERSONAL.png';

function SumarNumeros(props) {

    //const {num1,num2} = props; // para reutilizar si queremos en toda la clase

    const sumar = () => {
        var num1 = parseInt(props.num1)
        var num2 = parseInt(props.num2)
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
    };

    
    return (
        <div>
            <h1>SUMAR NUMEROS Ejemplo Básico</h1>
            <img src={foto} width="300px" alt="foto" /><br />
            <button style={{ backgroundColor: "darkgreen", color: "white" }} onClick={() => sumar()}>Sumar numeros estaticos</button>
        </div>
    );
}

export default SumarNumeros;