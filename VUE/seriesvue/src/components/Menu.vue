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
                        <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <span class="nav-link dropdown-toggle" id="desplegable" data-bs-toggle="dropdown"
                            aria-expanded="false">Series</span>
                        <ul class="dropdown-menu" aria-labelledby="desplegable">
                            <li v-for="(serie,index) in series" :key="index"><router-link :to="'/series/'+serie.idSerie" class="dropdown-item">{{serie.nombre}}</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries'

const service = new ServiceSeries();
export default {
    name: "Menu",
    data(){
        return{
            series: [],
        }
    },
    methods:{
        cargarSeries(){
            service.getSeries().then(res=>{
                this.series = res
            })
        }
    },
    mounted(){
        this.cargarSeries();
    },
}
</script>