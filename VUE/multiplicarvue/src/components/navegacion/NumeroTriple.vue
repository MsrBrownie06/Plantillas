<template>
    <div>
        <h1>Numero Triple de {{numeroRecibido}} es: {{triple}}</h1>
    </div>
</template>

<script>
export default {
    name: "NumeroTriple",
    data(){
        return{
            numeroRecibido: 0,
            triple: 0,
        }
    },
    methods:{
        mostrarTriple(){
            this.numeroRecibido = this.$route.params.num;
            this.triple = parseInt(this.numeroRecibido) * 3;
        }
    },mounted(){
        this.mostrarTriple();
    },watch: {
        '$route.params.num'(next,last){
            if(next != last){
                this.mostrarTriple();
            }
        }

    }
}
</script>