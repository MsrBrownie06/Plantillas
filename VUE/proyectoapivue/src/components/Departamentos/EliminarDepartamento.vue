<template>
    <div>
        <h1>Eliminar Departamento</h1>
    </div>
</template>

<script>
import ServiceDepartamentos from '../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();
export default {
    name: "EliminarDepartamento",
    data(){
        return{
            id: 0,
        }
    },methods:{
        deleteDepartamento(){
            service.deleteDept(this.id).then(res=>{
                console.log(res)
                this.$router.push("/serviciosDepartamentos");
            })
        },
    },mounted(){
        this.id = this.$route.params.idDept;
        this.deleteDepartamento();
    }
}
</script>