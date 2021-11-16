<template>
    <div class="row justify-content-center">
        <div class="card col-8 p-0 mb-3 m-2 text-center">
            <div class="row g-0">
                <div class="card-header">
                    <h3 class="card-title">{{equipo.nombre}}</h3>
                </div>
                <div class="row justify-content-center">
                    <img :src="equipo.imagen" style="width: 350px" class="card-img img-fluid rounded-start" alt="nombreImagen">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Champions: {{equipo.champions}}</h5>
                    <p class="card-text">{{equipo.descripcion}}</p>
                    <router-link :to="'/jugadores/'+equipo.idEquipo" class="btn btn-outline-success me-2">Jugadores</router-link>
                    <router-link to="/" class="btn btn-outline-danger ms-2">Volver</router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import Equipos from '../services/equipos'

const service = new Equipos();
export default {
    name: "Equipo",
    data(){
        return{
            equipo: {},
            idEquipo: 0
        }
    },mounted(){
        this.idEquipo = this.$route.params.idEquipo
        this.obtenerEquipo();
    },
    methods:{
        obtenerEquipo(){
            service.getEquipo(this.idEquipo).then(res=>{
                this.equipo = res
            })
        }
    },

    watch:{
        '$route.params.idEquipo'(next,last){
                if(next != last){
                    this.idEquipo = next
                    this.obtenerEquipo();
                }
        }
    }

}
</script>