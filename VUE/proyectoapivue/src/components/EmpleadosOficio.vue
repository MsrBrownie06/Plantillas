<template>
    <div>
        <h1>Oficios</h1>
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <form method="post">
                    <label class="form-label fw-bold">Seleccione un oficio</label>
                    <select v-on:change.prevent="mostrarOficio" v-model="idOficio" class="form-control">
                        <option v-for="(oficio, index) in oficios" :key="index" :value="oficio">{{oficio}}</option>
                    </select>
                </form>
            </div>
        </div>
        <div v-if="empleados.length != 0" class="row justify-content-center mt-5">
            <div class="col-8 text-center">
                <table class="table table-striped table-hover table-responsive table-bordered border-dark">
                    <thead class="fw-bold" style="background-color: midnightblue; color: white;">
                        <tr>
                            <td>Apellido</td>
                            <td>Departamento</td>
                            <td>Oficio</td>
                            <td>Salario</td>
                        </tr>
                    </thead>
                    <tbody class="table-info table-bordered border-dark">
                        <tr v-for="(empleado,index) in empleados" :key="index">
                            <td>{{empleado.apellido}}</td>
                            <td>{{empleado.departamento}}</td>
                            <td>{{empleado.oficio}}</td>
                            <td>{{empleado.salario}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './Global'
export default {
    name: "EmpleadosOficio",
    data(){
        return{
            oficios: [],
            idOficio: 0,
            empleados: [],
        }
    },methods:{
        cargarOficios(){
            var request = "/api/Empleados/oficios";
            var url = Global.urlEmpleados + request;
            axios.get(url).then(res=>{
                this.oficios = res.data;
                console.log(res.data)

            })
        },mostrarOficio(){
            var request = "/api/Empleados/EmpleadosOficio/"+this.idOficio;
            var url = Global.urlEmpleados + request;
            axios.get(url).then(res=>{
                this.empleados = res.data
                console.log(res.data)
            })
        }
    },mounted(){
        this.cargarOficios();
    }
}
</script>