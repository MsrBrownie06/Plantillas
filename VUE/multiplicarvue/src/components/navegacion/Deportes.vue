<template>
    <div>
        <h1>Comunicacion component Padre he Hijo</h1>
        <h2 v-if="favoritoHijo" style="color:blue">Su deporte favorito es: <span style="color:red">{{favoritoHijo}}</span></h2>
        <ul>
            <!-- //:key  ||  :depor   son un binding property que es enlazar una propiedad con un OBJETO EXISTENTE o creado -->

            <li v-for="depor in deportes" :key="depor">
                <!-- //Le estoy mandando un metodo del padre al hijo con ' v-on:metodo="metodoPadre" ' -->
                <Deporte :deporte="depor" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Deporte from './Deporte.vue'

export default {
    name: "Deportes",
    methods: {
        seleccionarFavoritoParent(deporte) {
            this.favoritoHijo = deporte
        }
    },
    components:{
        Deporte
    },
    data() {
        return {
            favoritoHijo: "",
            deportes: ["Canicas","Curling","Judo","Surf","Padel","Futbol"]

        }
    }
}
</script>