<template>
    <div>
        <h1>Tabla de Multiplicar</h1>
        <div>
            
            <label>Introduzca numero: </label>
            <input type="text" v-model="numeroTabla">
            <button v-on:click="mostrarTabla()">Tabla de multiplicar</button>


            <label>Numero 1</label>

            <input type="text" v-model="numero1">
            <label>Numero 2</label>

            <input type="text" v-model="numero2">
            <button @click="sumarNumeros()">Sumar numeros</button>

            <!-- //v-html es para decir a la etiqueta que recibira un mensaje HTML que debe interpretar -->
            <h1 v-html="mensaje" style="color:blue">{{mensaje}}</h1>
        </div>
        <div>
            <!-- //para udar un if simple, ?v-if' -->
            <table border="1" v-if="tabla != ''">
                <thead>
                    <tr>
                        <td>OPERACION</td>
                        <td>RESULTADO</td>
                    </tr>
                </thead>
                <tbody v-html="tabla">{{tabla}}</tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Multiplicar",
    methods:{
        sumarNumeros(){
            var suma = parseInt(this.numero1) + parseInt(this.numero2);
            this.mensaje = "La suma es <span style='color:purple'>"+suma+"</span>"
        },mostrarTabla(){
            this.tabla = "";
            for (let i = 0; i <= 10; i++) {
                var op = parseInt(this.numeroTabla) * i;
                this.tabla += "<tr>";
                this.tabla += "<td>" +this.numeroTabla + " X " + i + "</td>";
                this.tabla += "<td>"+op+"</td>"
                this.tabla += "</td>";
                
                
            }
        }
    },
    data(){
        return{
            numero1 : 0,
            numero2 : 0,
            mensaje: "",
            numeroTabla: 0,
            tabla:""
        }
    }
}
</script>