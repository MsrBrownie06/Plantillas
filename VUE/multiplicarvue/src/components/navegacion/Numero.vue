<template>
    <div>
        <h1>Numero: {{alea}}</h1>
        <button @click="sumarNumero()">Sumar</button>
    </div>
</template>

<script>
export default {
    name : "Numero",
    props:["alea","metodoPadre"],
    methods: {
        sumarNumero(){
            this.$emit("metodoPadre",this.alea)
        }
    }
}
</script>