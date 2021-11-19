<template>
    <div>

        <div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirmación</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <h1>¿Desea eliminar?</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cancelar
        </button>
        <button
          type="button"
          class="btn btn-danger"
          data-bs-dismiss="modal"
          @click="eliminarPelicula()"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</div>

        <div class="row justify-content-center">
  <div class="col-8">
    <div class="card mb-3 m-2 text-center">
      <div class="card-header">
        <h5 class="card-title">{{ pelicula.titulo }}</h5>
      </div>
      <div class="row justify-content-center">
        <img
          :src=" pelicula.foto "
          class="card-img-top card-img py-4"
          :alt=" pelicula.titulo "
          style="width: 350px"
        />
      </div>
      <div class="card-body">
        <p class="card-text">{{ pelicula.argumento }}</p>
        <button @click="mostrarVideo()" class="btn btn-outline-danger">
          Youtube
        </button>
        <div class="row justify-content-center mt-4">
          <div class="col-5">
            <form method="post">
              <select
                class="form-control"
                name="genero"
                v-model="generoSelect"
              >
                <option
                  v-for="(genero,index) in generos" :key="index"
                  :value="genero.idGenero"
                >
                  {{ genero.nombre }}
                </option>
              </select>
              <button @click="modificarme()" class="btn btn-outline-warning" type="button">
                Modificar
              </button>
            </form>
            <button
              type="button"
              class="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Eliminar
            </button>
          </div>
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
    name:"detallesPelicula",
    data(){
        return{
            generos: [],
            generoSelect: ""
        }
    },
    props: ["pelicula"],
    mounted(){
        this.cargarGeneros();
    },
    methods:{
        cargarGeneros(){
            service.getGeneros().then(res=>{
                this.generos = res;
            })
        },
        modificarme(){
             this.$emit("modificar",this.pelicula.idPelicula,this.generoSelect)
        },
        eliminarPelicula(){
            this.$emit('eliminar',this.pelicula.idPelicula)
        },
        mostrarVideo(){

        }
    }
}
</script>