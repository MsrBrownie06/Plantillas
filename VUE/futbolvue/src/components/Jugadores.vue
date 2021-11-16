<template>
    <div class="row justify-content-center mt-5">
        <div class="col-12 text-center my-3">
        <router-link class="btn btn-outline-danger" :to="'/equipos/'+idEquipo">Volver</router-link>
        </div>
    <div class="col-8 text-center">
        <table class="table table-striped table-hover table-responsive table-bordered border-dark">
            <thead class="fw-bold" style="background-color: midnightblue; color: white;">
                <tr>
                    <td>Nombre</td>
                    <td>Imagen</td>
                    <td>Accion</td>
                </tr>
            </thead>
            <tbody class="table-info table-bordered border-dark">
                <tr v-for="(jugador,index) in jugadores" :key="index">
                    <td>{{jugador.nombre}}</td>
                    <td><img :src="jugador.imagen"/></td>
                    <td><router-link :to="'/jugador/'+jugador.idJugador" class="btn btn-outline-success">Detalles</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import Equipos from '../services/equipos'

const service = new Equipos();
export default {
    name: "Jugadores",
    mounted(){
        this.idEquipo = this.$route.params.idEquipo
        this.obtenerJugadores();
    },
    data(){
        return{
            idEquipo: 0,
            jugadores: [],
        }
    },methods:{
        obtenerJugadores(){
            service.getJugadores(this.idEquipo).then(res=>{
                this.jugadores = res
            })
        }
    }
}
</script>