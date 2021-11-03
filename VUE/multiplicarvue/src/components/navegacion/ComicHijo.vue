<template>
<div style="display: flex; justify-content: center">
    <div style="border: solid 3px black; width: 300px">
        <h3 style="color: purple">Comic: {{comic.titulo}}</h3>
        <!-- //usaremos V-bind para apuntar a una propiedad, en el caso de la imagen v-bind:src -->
        <img v-bind:src="comic.imagen" v-bind:alt="comic.titulo" width="200px"/>
        <p style="font-weight: bold; color: blue">{{comic.descripcion}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "ComicHijo",
    props: ["comic"],
}
</script>