<template>
    <div>
        <h1>Detalles Departamento</h1>
        <router-link to="/serviciosDepartamentos" class="btn btn-outline-info">Volver a la lista</router-link>
        <h2 style="color:purple">{{departamento.nombre + " , " +departamento.localidad}}</h2>
    </div>
</template>

<script>
export default {
    name:"DetallesDepartamento",
    mounted(){
        this.departamento.numero = this.$route.params.idDept
        this.departamento.nombre = this.$route.params.nombre
        this.departamento.localidad = this.$route.params.localidad
    },
    data(){
        return {
            departamento: {
                numero: 0,
                nombre: "",
                localidad: ""
            }
        }
    }
}
</script>