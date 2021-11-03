<template>
<div class="row justify-content-center">
    <div class="border rounded m-2 p-3" style="border: solid 3px black; width: 400px">
        <h3 style="color: purple">Comic: {{comic.titulo}}</h3>
        <!-- //usaremos V-bind para apuntar a una propiedad, en el caso de la imagen v-bind:src -->
        <img v-bind:src="comic.imagen" v-bind:alt="comic.titulo" width="200px"/>
        <p style="font-weight: bold; color: blue">{{comic.descripcion}}</p>
        <button @click="comicFavorito()" class="btn btn-outline-success">Comic favorito</button>
        <button @click="modificar()" class="btn btn-outline-warning">Modificar Comic</button>
        <button @click="eliminar()" class="btn btn-outline-danger">Eliminar Comic</button>
    </div>
</div>
</template>

<script>
export default {
    name: "ComicHijo",
    props: ["comic","index"],
    methods: {
        comicFavorito(){
            this.$emit("metodoFavorito",this.comic.titulo)
        },eliminar(){
            this.$emit("metodoEliminar",this.index)
        },modificar(){
            this.$emit("metodoModificar",this.index)
        }
    }
}
</script>