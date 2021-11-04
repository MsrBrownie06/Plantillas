<template>
    <div>
        <ul>
            <li>
                <router-link to="/">HOME</router-link>
            </li>
            <li>
                <router-link to="/tablaMultiplicar">Tabla Multiplicar</router-link>
            </li>
            <li>
                <router-link to="/deportes">Deportes</router-link>
            </li>
            <li>
                <router-link to="/numeros">Numeros</router-link>
            </li>
            <li>
                <router-link to="/comics">Comics</router-link>
            </li>
            <li v-for="num in valores" :key="num">
                <router-link :to="'/numeroDoble/' + num">Numero Doble {{num}}</router-link>
            </li>
            <li>
                <router-link to="/numeroDoble">Numero Doble</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Menu",
    data(){
        return{
            valores: [66,99,12],
        }
    }
}
</script>

<style scoped>

ul li{
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
}

</style>