<template>
    <div>
        <h1>Ejemplo ciclo vida Hooks</h1>
<!-- //para hacer un evento se usa '@click' -->
        <button @click="cambiarSaludo()">
            Cambiar saludo
        </button>
        <h3 style="color:blue">{{saludo}}</h3>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        //Todos los metodos que creemos y que usaremos en la pagina iran dentro de 'methods'
        methods: {
            cambiarSaludo() {
            this.saludo = "He cambiado!???!??!!";
            }
        },
        data() {
            return {
                saludo: "Hola Hooks!!!",
            }
        }, 
        //al cargar la pagina (se dibujo el componente)
        mounted(){
            console.log("Componente montado");
        }, 

        //al entrar en la pagina (sin dibujar nada)
        created() {
            console.log("Componente creado");
        }, 

        //cuando sales de la pagina (eliminas el componente)
        destroyed() {
            console.log("Componente eliminado"); 
        }, 

        //cuando se modifica algo dentro de la pagina (TEMPLATE)
        updated() {
            console.log("Dibujo modificado en TEMPLATE");}} 
            
</script>
