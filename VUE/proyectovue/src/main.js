import Vue from 'vue';
import App from './App.vue';

//para poder usar el Route en Vue
import VueRouter from 'vue-router';

//importaremos los componentes que usaremos en las rutas
import Home from "./components/navegacion/Home.vue"
import Musica from "./components/navegacion/Musica.vue"
import Cine from "./components/navegacion/Cine.vue"
import Television from "./components/navegacion/Television.vue"
import CicloVida from "./components/navegacion/CicloVida.vue"


Vue.config.productionTip = false

//Debemos dar de alta la tecnologia dentro del servidor
Vue.use(VueRouter);

//Las rutas del servidor se almacenaran en un array
const routes = [
  { path: "/home", component: Home },
  { path: "/cine", component: Cine },
  { path: "/musica", component: Musica },
  { path: "/television", component: Television },
  { path: "/hooks", component: CicloVida },
  { path: "/", component: Home }
]

//Despues crearemos un objeto 'router' de la clase 'VueRouter' que 
//contendra las rutas y tambien tendra el modo de navegacion 
const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
