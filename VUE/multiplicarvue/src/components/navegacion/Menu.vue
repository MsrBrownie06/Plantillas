<template>
    <div>
        <ul>
            <li>
                <router-link to="/">HOME</router-link>
            </li>
            <li>
                <router-link to="/tablaMultiplicar">Tabla Multiplicar</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Menu",
}
</script>

<style scoped>

ul li{
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
}

</style>