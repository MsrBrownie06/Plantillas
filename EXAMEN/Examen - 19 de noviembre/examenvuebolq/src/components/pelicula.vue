<template>
<div>
        <div v-if="!peliculas">
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    </div>

    <h1>{{lugar}}</h1>
    <h1 v-if="eliminar==true">Se Elimino la pelicula</h1>
    <div>
        <div class="row row-cols-6 g-2">
    <div v-for="(pelicula,index) in peliculas" :key="index" class="col-2">
      <div class="card text-center">
        <div class="row justify-content-center">
          <img
            :src="pelicula.foto"
            class="card-img-top card-img py-4"
            :alt="pelicula.titulo"
            @click="cargarDetallesPelicula(pelicula.idPelicula)"
            style="width: 350px"
          />
        </div>
      </div>
    </div>
  </div>
    </div>

    <div v-if="peliculaSelect">
        <detallesPelicula :pelicula="peliculaSelect" v-on:modificar="modificarGenero" v-on:eliminar="eliminarPelicula"/>
    </div>
</div>
</template>

<script>
import Pelicula from './../services/peliculas'
import detallesPelicula from './detallesPelicula.vue'

const service = new Pelicula();
export default {
    name: "pelicula",
    components:{
        detallesPelicula
    },
    data(){
        return{
            peliculas: [],
            genero: {},
            nacionalidad: {},
            idGenero: "",
            idNacionalidad: "",
            peliculaSelect: null,
            lugar: "",
            eliminar: false
        }
    },
    mounted(){
        if(this.$route.params.idNacionalidad != null){
            this.idNacionalidad = this.$route.params.idNacionalidad
            this.cargarPeliculasNac()
        }
        if(this.$route.params.idGenero != null){
            this.idGenero = this.$route.params.idGenero
            this.cargarPeliculasGen()
        }
        
    },methods:{
        cargarPeliculasGen(){
            service.getPeliculasGenero(this.idGenero).then(res=>{
                this.peliculas = res
                this.eliminar = false;
            })
            service.getGenerosId(this.idGenero).then(res=>{
                this.genero = res
                this.lugar = this.genero.nombre
            })
        },
        cargarPeliculasNac(){
            service.getPeliculasNacionalidad(this.idNacionalidad).then(res=>{
                this.peliculas = res
                this.eliminar = false;
            })
            service.getNacionalidadId(this.idNacionalidad).then(res=>{
                this.nacionalidad = res
                this.lugar = this.nacionalidad.nombre
            })
        },
        cargarDetallesPelicula(id){
            service.getPeliculasId(id).then(res=>{
                this.peliculaSelect = res;
            })
        },modificarGenero(idPelicula,idGenero){
            service.modificarPelicula(idPelicula, idGenero).then(res=>{
                console.log(res)
                this.$router.push("/peliculasGenero/"+idGenero)
            })
        },eliminarPelicula(idPelicula){
            this.eliminar = true;
            this.peliculaSelect = null;
            service.deletePelicula(idPelicula).then(res=>{
                console.log(res)
                if(this.$route.params.idNacionalidad != null){
                    this.cargarPeliculasNac()
                }else{
                    if(this.$route.params.idGenero != null){
                        this.cargarPeliculasGen()
                    }
                }

            })
        }
    },watch:{
        '$route.params.idNacionalidad'(next,last){
                if(next != last && next != null){
                    this.idNacionalidad = next
                    this.peliculaSelect = null;
                    this.cargarPeliculasNac();
                }
        },
        
        '$route.params.idGenero'(next,last){
                if(next != last && next != null){
                    this.idGenero = next
                    this.peliculaSelect = null;
                    this.cargarPeliculasGen();
                }
        }
    

    }
}
</script>