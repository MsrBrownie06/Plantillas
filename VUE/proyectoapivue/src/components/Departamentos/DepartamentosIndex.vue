<template>
    <div>
        <h1>Departamentos</h1>
        <router-link to="/insertarDepartamento" class="btn btn-outline-success">Insertar Nuevo Departamento</router-link>
        <div class="row justify-content-center mt-5">
            <div class="col-8 text-center">
                <table v-if="departamentos.length > 0" class="table table-striped table-hover table-responsive table-bordered border-dark">
                    <thead class="fw-bold" style="background-color: midnightblue; color: white;">
                        <tr>
                            <td>Numero</td>
                            <td>Nombre</td>
                            <td>Localidad</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody class="table-info table-bordered border-dark">
                        <tr v-for="(dept, index) in departamentos" :key="index">
                            <td>{{dept.numero}}</td>
                            <td>{{dept.nombre}}</td>
                            <td>{{dept.localidad}}</td>
                            <td><router-link :to="'/detallesDepartamento/'+dept.numero+'/'+dept.nombre+'/'+dept.localidad" class="btn btn-outline-info">Detalles</router-link>
                            <router-link :to="'/modificarDepartamento/'+dept.numero" class="btn btn-outline-warning">Modificar</router-link>
                            <router-link :to="'/eliminarDepartamento/'+dept.numero" class="btn btn-outline-danger">Eliminar</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();

export default {
    name: "DepartamentosIndex",
    mounted(){
        this.cargarDepartamentos();
    },
    
    methods:{
        cargarDepartamentos(){
            service.getDept().then(result=>{
                this.departamentos = result
                console.log(this.departamentos)
            })
        }
    }
    
    ,data(){
        return{
            departamentos: [],
        }
    }
}
</script>