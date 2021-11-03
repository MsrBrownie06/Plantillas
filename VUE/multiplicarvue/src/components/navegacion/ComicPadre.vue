<template>
    <div>
        <h1>Comics Padre</h1>
        <div class="row justify-content-center">
            <div class="col-4 border border-3 rounded-3 border-success p-3 fw-bold text-success" style="background-color: lightgreen">
            <label class="form-label">Titulo:  </label>
            <input class="form-control" v-model="title" type="text">
            <br/><br/>
            <label class="form-label">Imagen:  </label>
            <input class="form-control" v-model="img" type="text">
            <br/><br/>
            <label class="form-label">Descripcion:  </label>
            <input class="form-control" v-model="desc" type="text">
            <br/><br/>
            <button class="btn btn-outline-success" @click="nuevoComic()">Nuevo Comic</button>
            </div>
        </div>
        <hr/>
        <span class="fw-bold" v-if="ComicFavorito">El Comic Favorito es: {{ComicFavorito}}</span>
        <hr/>
        <div v-for="(comic,index) in comics" :key="index">
            <ComicHijo :comic="comic" :index="index"  v-on:metodoFavorito="favorito" v-on:metodoEliminar="eliminarComic" v-on:metodoModificar="modificarComic"/>
        </div>
    </div>
</template>

<script>
import ComicHijo from "./ComicHijo.vue"

export default {
    name: "ComicPadre",
    components: {
        ComicHijo,
    },
    methods:{
        nuevoComic(){
            let obj = {
                titulo : this.title,
                imagen : this.img,
                descripcion : this.desc
            };

           this.comics.push(obj)
        },favorito(nombre){
            this.ComicFavorito = nombre
        },eliminarComic(indice){
            this.comics.splice(indice, 1)
        },modificarComic(indice){
                this.comics[indice].titulo = this.title
                this.comics[indice].imagen = this.img
                this.comics[indice].descripcion = this.desc
        }
    },
    data(){
        return{
            title: "",
            img: "",
            desc:"",
            ComicFavorito: "",
                comics: [
            {
            titulo: "Spiderman",
            imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
            descripcion: "Hombre araña"
            },
            {
            titulo: "Wolverine",
            imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
            descripcion: "Lobezno"
            },
            {
            titulo: "Guardianes de la Galaxia",
            imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
            descripcion: "Yo soy Groot"
            },
            {
            titulo: "Avengers",
            imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
            descripcion: "Los Vengadores"
            },
            {
            titulo: "Spawn",
            imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
            descripcion: "Al Simmons"
            },
            {
            titulo: "Batman",
            imagen:
                "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
            descripcion: "Murcielago"
            }
            ]
        }
    }
    
}
</script>