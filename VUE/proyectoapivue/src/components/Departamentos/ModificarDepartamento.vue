<template>
    <div>
        <h1>Modificar Departamento</h1>
        <router-link to="/serviciosDepartamentos" class="btn btn-outline-info">Volver a la lista</router-link>
        <div class="row justify-content-center mt-5" v-if="departamento">
            <div class="col-4 rounded-3"
                style="background-color: lightyellow; border: solid 3px darkorange; color: darkorange;">
                <form method="post" class="text-center p-4 fw-bold" v-on:submit.prevent="updateDept()">
                    <div class="mb-3">
                        <h3>MODIFICAR</h3>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Numero:</label>
                        <input class="form-control" type="text" v-model="departamento.numero"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nombre:</label>
                        <input class="form-control" type="text" v-model="departamento.nombre"/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Localidad:</label>
                        <input class="form-control" type="text" v-model="departamento.localidad"/>
                    </div>

                    <button class="btn btn-outline-warning" type="submit">Modificar</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from '../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();
export default {
    name:"ModificarDepartamento",
    mounted(){
        this.id = this.$route.params.idDept;
        this.buscarDept();
    },methods:{
        buscarDept(){
            service.buscarDept(this.id).then(res=>{
                this.departamento=res
            })
        },updateDept(){
            this.departamento.numero = parseInt(this.departamento.numero)
            service.updateDept(this.departamento).then(res=>{
                console.log(res);
                this.$router.push("/serviciosDepartamentos");
            })
        }
    },
    data(){
        return{
            departamento: null,
            id: 0,
        }
    }
}
</script>