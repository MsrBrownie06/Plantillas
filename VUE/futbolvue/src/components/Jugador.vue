<template>
        <div class="row justify-content-center">
        <div class="card col-8 p-0 mb-3 m-2 text-center">
            <div class="row g-0">
                <div class="card-header">
                    <h3 class="card-title">{{jugador.nombre}}</h3>
                </div>
                <div class="row justify-content-center">
                    <img :src="jugador.imagen" style="width: 350px" class="card-img img-fluid rounded-start" alt="nombreImagen">
                </div>
                <div class="card-body">
                    <p class="card-text">Posicion: {{jugador.posicion}}</p>
                    <p class="card-text">Nacimiento: {{jugador.fechaNacimiento}}</p>
                    <p class="card-text">Pais: {{jugador.pais}}</p>
                    <router-link :to="'/jugadores/'+jugador.idEquipo" class="btn btn-outline-success me-2">Volver</router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import Equipos from '../services/equipos'

const service = new Equipos();
export default {
    name: "Jugador",
    data(){
        return{
            idJugador: 0,
            jugador: {},
        }
    },
    mounted(){
        this.idJugador = this.$route.params.idJugador
        this.obtenerJugador();
    },
    methods:{
        obtenerJugador(){
            service.getJugador(this.idJugador).then(res=>{
                this.jugador = res;
            })
        }
    }

}
</script>