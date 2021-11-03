<template>
    <div>
        <h1>Numeros Padre</h1>
        <button @click="insertarHijo()">Crear hijo</button>
        <h2 v-if="numeroRes">Resultado de los hijos: {{numeroRes}}</h2>
        <div v-for="(num,index) in arrayNumeros" :key="index">
            <Numero style="color:purple" :alea="num" v-on:metodoPadre="sumarHijos"/>
        </div>
    </div>
</template>

<script>
import Numero from './Numero.vue'

export default {
    name: "Numeros",
    data(){
        return{
            numeroRes: 0,
            arrayNumeros: []
        }
    },methods: {
        sumarHijos(num){
            this.numeroRes += parseInt(num)
        },
        aleatorio(){
            let dado = parseInt((Math.random()*50)+1);
            return dado;
        },crearHijos(){
            this.numeroRes = 0;
            this.arrayNumeros =[];
            for (let i = 0; i < 3; i++) {
                this.arrayNumeros.push(this.aleatorio())
            }
        },insertarHijo(){
            var aleatorio = this.aleatorio();
            this.arrayNumeros.push(aleatorio)
        }
    },components:{
        Numero
    },created(){
        this.crearHijos();
    }
}
</script>