<template>
    <div>
        <h1>Insertar Departamento</h1>
        <div class="row justify-content-center mt-5">
            <div class="col-4 rounded-3" style="background-color: lightgreen; border: solid 3px darkgreen; color: darkgreen;">
                <form method="post" class="text-center p-4 fw-bold" v-on:submit.prevent="insertarDepartamentos()">
                    <div class="mb-3">
                        <h3>INSERTAR</h3>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Numero:</label>
                        <input class="form-control" type="text" placeholder="introduzca un numero" v-model="departamento.numero" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nombre:</label>
                        <input class="form-control" type="text" placeholder="introduzca un nombre" v-model="departamento.nombre" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Localidad:</label>
                        <input class="form-control" type="text" placeholder="introduzca la localidad" v-model="departamento.localidad" />
                    </div>

                    <button class="btn btn-outline-success" type="submit">Insertar Departamento</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from '../../services/ServiceDepartamentos'

const service = new ServiceDepartamentos;
export default {
    name:"InsertarDepartamentos",
    methods:{
        insertarDepartamentos() {
            //cambiamos el numero en string a int

            this.departamento.numero = parseInt(this.departamento.numero)
            service.insertarDept(this.departamento).then(res=>{
                console.log(res)
                this.mensaje = "Insertado"
                this.$router.push("/serviciosDepartamentos")
            })
        },
    },data(){
        return{
            mensaje:"",
            departamento: {
                numero: 0,
                nombre: "",
                localidad: ""
            },
        }
    }
}
</script>