import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import pelicula from "./components/pelicula.vue";
import buscador from "./components/buscador.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/peliculasGenero/:idGenero", component: pelicula },
  { path: "/peliculasNacionalidad/:idNacionalidad", component: pelicula },
  { path: "/buscador/:parametros", component: buscador },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
