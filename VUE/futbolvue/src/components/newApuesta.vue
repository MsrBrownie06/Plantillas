<template>
    <div class="row justify-content-center mt-5">
    <div class="col-4 rounded-3" style="background-color: lightgreen; border: solid 3px darkgreen; color: darkgreen;">
        <form class="text-center p-4 fw-bold">
            <div class="mb-3">
                <h3>INSERTAR</h3>
            </div>
            <div class="mb-3">
                <label class="form-label">Usuario:</label>
                <input class="form-control" type="text" placeholder="introduzca usuario" v-model="user"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Real Madrid:</label>
                <input class="form-control" type="number" placeholder="introduzca resultado Real Madrid" />
            </div>
            <div class="mb-3">
                <label class="form-label">Atletico de Madrid:</label>
                <input class="form-control" type="number" placeholder="introduzca resultado Atletico de Madrid" />
            </div>
            <div class="mb-3">
                <label class="form-label">Fecha:</label>
                <input class="form-control" type="date" placeholder="introduzca la fecha" />
            </div>

            <button class="btn btn-outline-success" type="button">Nueva Apuesta</button>

        </form>
    </div>
</div>
</template>

<script>
export default {
    name: "newApuesta",
    data(){
        return{
            user: "",
            real: 0,
            atletico: 0,
            fecha: "",
        }
    }
}
</script>