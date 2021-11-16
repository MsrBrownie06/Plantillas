<template>
    <div class="row justify-content-center mt-5">
    <div class="col-4 rounded-3" style="background-color: lightgreen; border: solid 3px darkgreen; color: darkgreen;">
        <form method="post" class="text-center p-4 fw-bold" v-on:submit.prevent="insertarApuesta()">
            <div class="mb-3">
                <h3>INSERTAR</h3>
            </div>
            
            <div class="mb-3">
                <label class="form-label">Usuario:</label>
                <input class="form-control" type="text" v-model="user" placeholder="introduzca usuario" />
            </div>

            <div class="mb-3">
                <label class="form-label">Real Madrid:</label>
                <input class="form-control" type="number" v-model="real" placeholder="introduzca resultado Real Madrid" />
            </div>

            <div class="mb-3">
                <label class="form-label">Atletico de Madrid:</label>
                <input class="form-control" type="number" v-model="atletico" placeholder="introduzca resultado Atletico de Madrid" />
            </div>

            <div class="mb-3">
                <label class="form-label">Fecha:</label>
                <input class="form-control" type="date" v-model="fecha" placeholder="introduzca la fecha" />
            </div>

            <button class="btn btn-outline-success" type="submit">Nueva Apuesta</button>

        </form>
    </div>
</div>
</template>

<script>
import Equipos from '../services/equipos'

const service = new Equipos();
export default {
    name: "newApuesta",
    data(){
        return{
            user: "",
            real: 0,
            atletico: 0,
            fecha: "",
        }
    },methods:{
        insertarApuesta(){
            let newApuesta = {
                usuario: this.user,
                resultado: this.real + "-" + this.atletico,
                fecha: this.fecha
            }
            service.postApuesta(newApuesta).then(res=>{
                console.log(res)
                this.$router.push("/apuestas");
            })
        }
    }
}
</script>