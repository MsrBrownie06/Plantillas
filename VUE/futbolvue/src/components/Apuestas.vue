<template>

    <div>
         <div class="row justify-content-center mt-5">
            <div class="col-6 text-center">
              <router-link to="/newApuesta" class="btn btn-danger">
                Realizar Apuesta
              </router-link>
            </div>
          </div>
          <div class="row text-danger text-center mt-3">
            <h1>Local: Real Madrid, Visitante: Atlético de Madrid</h1>
          </div>
        <div class="row justify-content-center mt-5">
            <div class="col-8 text-center">
                <table class="table table-striped table-hover table-responsive table-bordered border-dark">
                    <thead class="fw-bold" style="background-color: midnightblue; color: white;">
                        <tr>
                            <td>USUARIO</td>
                            <td>RESULTADO</td>
                            <td>FECHA</td>
                        </tr>
                    </thead>
                    <tbody class="table-info table-bordered border-dark">
                        <tr v-for="(apuesta,index) in apuestas" :key="index">
                            <td>{{apuesta.usuario}}</td>
                            <td>{{apuesta.resultado}}</td>
                            <td>{{apuesta.fecha}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Equipos from '../services/equipos'

const service = new Equipos();
export default {
    name: "Apuestas",
    data(){
        return{
            apuestas: [],

        }
    },mounted(){
        this.cargarApuestas()
    },methods:{
        cargarApuestas(){
            service.getApuestas().then(res=>{
                this.apuestas = res
            })
        }
    }
}
</script>