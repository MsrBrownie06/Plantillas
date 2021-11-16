<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/new">Apuestas</router-link>
                </li>
                <li class="nav-item dropdown">
                    <span class="nav-link dropdown-toggle" id="desplegable" data-bs-toggle="dropdown"
                        aria-expanded="false">Equipos</span>
                    <ul class="dropdown-menu" aria-labelledby="desplegable">
                        <li v-for="(equipo, index) in equipos" :key="index">
                            <router-link :to="'/equipos/'+equipo.idEquipo" class="dropdown-item">{{equipo.nombre}}</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import Equipos from '../services/equipos'

const service = new Equipos()
export default {
    name: "Menu",
    data(){
        return{
            equipos: []
        }
    },
    mounted(){
        this.cargarEquipos()
    },
    methods:{
        cargarEquipos(){
            service.getEquipos().then(res=>{
                this.equipos = res
            })
        }
    }
}
</script>