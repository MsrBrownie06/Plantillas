<template>
    <div>
        <h1>Detalles del empleado</h1>
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <form method="post" v-on:submit.prevent="mostrarDetalleEmpleado">
                    <label class="form-label fw-bold">Seleccione un empleado</label>
                    <select v-model="idEmp" class="form-control">
                        <option v-for="(empleado, index) in empleados" :key="index" :value="empleado.idEmpleado">{{empleado.apellido}}</option>
                    </select>
                    <button class="btn btn-outline-success my-3">Mostrar Detalles</button>
                </form>
            </div>
        </div>
        <div v-if="detalles" class="row justify-content-center">
            <div class="col-3">
                <div class="card shadow-sm p-4">
                    <div class="card-head">
                        <h1>{{detalles.apellido}}</h1>
                    </div>
                    <div class="card-body">
                    <p class="card-text fw-bold">Oficio: {{detalles.oficio}}</p>
                    <p class="card-text fw-bold">Departamento: {{detalles.departamento}}</p>
                    <p class="card-text fw-bold">Salario: {{detalles.salario}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Global from './Global'
import axios from 'axios'

export default {
    name:"EmpleadosDetalle",
    data(){
        return {
            empleados: [],
            idEmp: 0,
            detalles: null,
        }
    },methods:{
        cargarEmpleados(){
            var request = "/api/Empleados";
            var url = Global.urlEmpleados + request
            axios.get(url).then(res=>{
                this.empleados = res.data
            })
        },mostrarDetalleEmpleado(){
            //necesito el id del empleado
            var request = "/api/Empleados/" + this.idEmp;
            var url = Global.urlEmpleados + request;
            axios.get(url).then(res=>{
                this.detalles = res.data;
            });

        }
    },mounted(){
        this.cargarEmpleados();
    }
}
</script>