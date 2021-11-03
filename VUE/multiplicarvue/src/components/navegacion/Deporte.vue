<template>
    <div>
        <h1 style="color:purple">{{deporte}}</h1>
        <button @click="seleccionarFavorito(deporte)">Seleccionar Favorito</button>
    </div>
</template>

<script>
export default {
    name: "Deporte",
    props:["deporte"],
    mounted(){
        console.log("deporte montado: "+this.deporte);
    },methods: {
        seleccionarFavorito(depor){
            this.$emit("seleccionarFavoritoParent",depor)
        }
    },data(){
        return{}
    }
}
</script>