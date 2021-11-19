<template>
<div>
   <nav
  class="navbar navbar-expand-lg navbar-light bg-light"
  aria-label="Tenth navbar example"
>
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample08"
      aria-controls="navbarsExample08"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse justify-content-md-start"
      id="navbarsExample08"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">HOME</router-link>
        </li>
        <li class="nav-item dropdown">
          <span
            class="nav-link dropdown-toggle"
            id="desplegable"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >Generos</span
          >
          <ul class="dropdown-menu" aria-labelledby="desplegable">
            <li v-for="(genero,index) in generos" :key="index">
              <router-link :to="'/peliculasGenero/'+genero.idGenero"
                class="dropdown-item"
                >{{genero.nombre}}</router-link
              >
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <span
            class="nav-link dropdown-toggle"
            id="desplegable"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >Nacionalidades</span
          >
          <ul class="dropdown-menu" aria-labelledby="desplegable">
            <li v-for="(nacional,index) in nacionalidades" :key="index">
              <router-link
                :to="'/peliculasNacionalidad/'+nacional.idNacionalidad"
                class="dropdown-item"
                ><img :src="nacional.bandera" style="width: 50px"
              />{{nacional.nombre}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="buscador"
        />
        <router-link
            :to="'/buscador/'+buscador"
          class="btn btn-outline-success"
          type="button"
          >Search</router-link
        >
      </form>
    </div>
  </div>
</nav>



</div>
</template>

<script>
import Pelicula from './../services/peliculas'

const service = new Pelicula();
export default {
    name: "MenuNuevo",
    data(){
        return {
            nacionalidades:[],
            generos: [],
            buscador: ""
        }
    },
    mounted(){
        this.cargarGeneros();
        this.cargarNacionalidades();
    },
    methods:{
        cargarNacionalidades(){
            service.getNacionalidad().then(res=>{
                this.nacionalidades = res;
            })
        },
        cargarGeneros(){
            service.getGeneros().then(res=>{
                this.generos = res
            })
        }


    }


}
</script>