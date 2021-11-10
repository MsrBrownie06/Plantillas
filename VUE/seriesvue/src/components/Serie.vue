<template>
    <div>
        <h1>Series</h1>
    </div>
</template>

<script>
import ServiceSeries from '../services/ServiceSeries'

const service = new ServiceSeries();
export default {
    name:"Serie",
    data(){
        return{
            serie: null,
            id: 0,
        }
    },mounted(){
        this.generarSerie();
    },methods:{
        generarSerie(){
            this.id = this.$route.params.id
            service.getSerieId(this.id).then(res=>{
                this.serie = res;
                console.log(this.serie)
            })
        }
    }
}
</script>