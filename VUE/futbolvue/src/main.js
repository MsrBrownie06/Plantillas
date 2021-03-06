import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Equipo from './components/Equipo.vue'
import Jugadores from './components/Jugadores.vue'
import Jugador from './components/Jugador.vue'
import Apuestas from './components/Apuestas.vue'
import newApuesta from './components/newApuesta.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: "/equipos/:idEquipo", component: Equipo },
  { path: "/jugadores/:idEquipo", component: Jugadores },
  { path: "/jugador/:idJugador", component: Jugador },
  { path: "/apuestas", component: Apuestas },
  { path: "/newApuesta", component: newApuesta },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
