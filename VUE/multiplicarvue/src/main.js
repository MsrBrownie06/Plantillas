import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";

import VueRouter from "vue-router";
import Multiplicar from "./components/navegacion/Multiplicar.vue";
import Home from "./components/navegacion/Home.vue";
import Deportes from "./components/navegacion/Deportes.vue";
import Numeros from "./components/navegacion/Numeros.vue";
import ComicPadre from "./components/navegacion/ComicPadre.vue";
import NumeroDoble from "./components/navegacion/NumeroDoble.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/tablaMultiplicar", component: Multiplicar },
  { path: "/deportes", component: Deportes },
  { path: "/numeros", component: Numeros },
  { path: "/comics", component: ComicPadre },
  { path: "/numeroDoble/:numero?", component: NumeroDoble },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
