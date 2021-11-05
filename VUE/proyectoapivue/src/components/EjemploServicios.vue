<template>
    <div>
        <h1>Servicios</h1>
        <h3 style="color:purple">{{saludo}}</h3>
        <h3 style="color:darkgreen" v-if="empleado">{{empleado.apellido}}</h3>
        <h3 style="color:darkred" v-else>No hay ningun apellido</h3>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo'
//Esto es una clase Javascript, por lo tanto, debemos tener un objeto para acceder a los metodos de dicho objeto

const service = new ServiceEjemplo();

export default {
    name: "EjemploServicios",
    data(){
        return{
            saludo: "",
            empleado: null
        }
    }, mounted(){

        this.saludo = service.getSaludo("Oscar")

        service.getEmpleado(7566).then(result => {
            this.empleado = result
        });

        //para llamar a las promesas, se usa el THEN

        service.getPromesa.then(result=>{
            this.saludo = result
        })

    }
}
</script>

