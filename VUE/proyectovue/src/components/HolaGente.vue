<template>
    <div>
        <span>Primer Vue</span>
        <h2>{{saludo}}{{nombre}}</h2>
        <img src="./../assets/img/LOGO_PERSONAL.png"/>
    </div>
</template>

<script>
export default {
    name: "HolaGente",
    data() {
        return {
            saludo : "Buenas, soy una ",
            nombre : "Variable",
            miArray: []
        }
    }
}
</script>

<style scoped>
/* PARA ESTILOS SE UTILIZA @import */
@import './../assets/css/estilos.css';

span{
    color:purple;
    font-weight: bold;
}
</style>