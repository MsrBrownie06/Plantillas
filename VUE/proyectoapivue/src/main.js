import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Coches from "./components/Coches.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
import EmpleadosOficio from "./components/EmpleadosOficio.vue";
import EjemploServicios from "./components/EjemploServicios.vue";
import EmpleadosServiciosOficios from "./components/EmpleadosServiciosOficios.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/coches", component: Coches },
  { path: "/empleado", component: EmpleadosDetalle },
  { path: "/oficios", component: EmpleadosOficio },
  { path: "/servicios", component: EjemploServicios },
  { path: "/serviciosOficio", component: EmpleadosServiciosOficios },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
