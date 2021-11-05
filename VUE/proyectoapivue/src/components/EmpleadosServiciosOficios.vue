<template>
    <div>
        <h1>Oficios con servicios</h1>
        <div class="row justify-content-center">
            <div class="col-6 text-center">
                <form method="post">
                    <label class="form-label fw-bold">Seleccione un oficio del Servicio</label>
                    <select v-on:change.prevent="mostrarOficioServicio" v-model="idOfi" class="form-control">
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
import ServiceEmpleados from './../services/ServiceEmpleados'

const servicio = new ServiceEmpleados;

export default {
    name: "EmpleadosServiciosOficios",
    data(){
        return{
            oficios:[],
            idOfi:0,
            empleados:[],
        }
    },
    methods:{
        mostrarOficioServicio(){
            servicio.getOficioId(this.idOfi).then(res=>{
                this.empleados = res
            })
        }
    },mounted(){
        servicio.getOficios().then(res=>{
            this.oficios = res
        })
    }
}
</script>