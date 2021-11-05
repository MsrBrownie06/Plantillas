<template>
    <div>
        <h1>Lista de Coches</h1>
        <div class="row justify-content-center mt-5">
            <div class="col-8 text-center">
                <table class="table table-striped table-hover table-responsive table-bordered border-dark">
                    <thead class="fw-bold" style="background-color: midnightblue; color: white;">
                        <tr>
                            <td>Marca</td>
                            <td>Conductor</td>
                            <td>Modelo</td>
                            <td>Imagen</td>
                        </tr>
                    </thead>
                    <tbody v-for="coche in coches" :key="coche" class="table-info table-bordered border-dark">
                        <tr>
                            <td>{{coche.marca}}</td>
                            <td>{{coche.conductor}}</td>
                            <td>{{coche.modelo}}</td>
                            <td><img :src="coche.imagen" width="200px"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//Aqui podemos declarar variables globales para todos los metodos del componente
var urlapicoches = "https://apicochespaco.azurewebsites.net/";
export default {
    name: "Coches",
    data(){
        return{
            coches: [],
        }
    },
    methods:{
        cargarCoches(){
            var request = "/webresources/coches";
            var url = urlapicoches + request;
            axios.get(url).then(res=>{
                this.coches = res.data
            })
        }
    },mounted(){
        this.cargarCoches()
    }
}
</script>