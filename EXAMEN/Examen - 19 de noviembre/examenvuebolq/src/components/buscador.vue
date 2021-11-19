<template>
    
    <div>

<div>
  <div class="row row-cols-6 g-2">
    <div v-for="(pelicula,index) in peliculas" :key="index" class="col-2">
      <div class="card text-center">
        <div class="row justify-content-center">
          <img
            :src="pelicula.foto "
            class="card-img-top card-img py-4"
            :alt=" pelicula.titulo "
            style="width: 350px"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>

</template>

<script>
import Pelicula from './../services/peliculas'

const service = new Pelicula();
export default {
    name: "buscador",
    data(){
        return{
            datos: "",
            peliculas: []
        }
    },
    mounted(){
        this.datos = this.$route.params.parametros
        this.buscar()
    },
    methods:{
        buscar(){
            service.buscarPeliculas(this.datos).then(res=>{
                this.peliculas = res
            });
        }
    }
}
</script>