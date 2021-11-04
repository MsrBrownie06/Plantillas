<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08"
                aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                <ul class="navbar-nav">
                    <li v-for="(num,i) in numAleatorios" :key="i" class="nav-item">
                        <router-link class="nav-link active" :to="'/numeroTriple/'+num">Numero {{num}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NumerosAleatorios",
    data(){
        return{
            numAleatorios: [],
        }
    },methods:{
        generarAleatorios(){
            for (let i = 0; i <= 10; i++) {
                let dado = parseInt((Math.random()*50)+1)
                this.numAleatorios.push(dado)
            }
            console.log(this.numAleatorios)
        }
    },mounted(){
        this.generarAleatorios();
    }
}
</script>