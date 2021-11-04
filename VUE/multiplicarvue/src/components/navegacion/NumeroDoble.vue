<template>
    <div>
        <h1>Numeros dobles por parametro</h1>
        <button class="btn btn-outline-secondary" @click="redirectToHome()">Ir a Home</button>
        <h2 style="color:darkgreen" v-if="mensaje">{{mensaje}}</h2>
        <div v-else>
        <h2 style="color:purple">El numero recibido es {{numero}}</h2>
        <h2 style="color:darkred">El doble del numero recibido es {{doble}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"NumeroDoble",
    mounted(){
        if(this.$route.params.numero == null){
            this.mensaje = "No se han enviado parámetros"
        }else{
            this.mostrarDoble();
        }
    },methods:{
        mostrarDoble(){
            //aqui cambiamos el numero
            this.numero = this.$route.params.numero
            this.doble = parseInt(this.numero) * 2
        },
        redirectToHome(){
            this.$router.push("/")
        }
    },
    updated(){
        //aqui entra cuando se modifica la pagina
        console.log("Parametros numero:" + this.$route.params.numero)
        console.log("valor numero:" + this.numero)
    },watch: {//watch sirve para verificar/comprobar una propiedad de la pagina
            // Cuando el parámetro cambia bajo la misma ruta, puede realizar una actualización asincrónica

            //el numero no cambia, cambia los partametros de la ruta
            // numero(next,last){
            //     console.log("Nuevo: " + next)
            //     console.log("Antiguo: " + last)
            //     console.log("El numero cambio!!!")
            // },
            
            '$route.params.numero'(next,last){
                if(next != last){
                    this.mostrarDoble();
                }
            },
        },
    data(){
        return {
            numero: 0,
            doble: 0,
            mensaje: "",
        }
    }
}
</script>