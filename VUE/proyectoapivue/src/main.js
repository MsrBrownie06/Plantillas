import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Coches from "./components/Coches.vue";
import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
import EmpleadosOficio from "./components/EmpleadosOficio.vue";
import EjemploServicios from "./components/EjemploServicios.vue";
import EmpleadosServiciosOficios from "./components/EmpleadosServiciosOficios.vue";
import DepartamentosIndex from "./components/Departamentos/DepartamentosIndex.vue";
import InsertarDepartamento from "./components/Departamentos/InsertarDepartamento.vue";
import DetallesDepartamento from "./components/Departamentos/DetallesDepartamento.vue";
import ModificarDepartamento from "./components/Departamentos/ModificarDepartamento.vue";
import EliminarDepartamento from "./components/Departamentos/EliminarDepartamento.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/coches", component: Coches },
  { path: "/empleado", component: EmpleadosDetalle },
  { path: "/oficios", component: EmpleadosOficio },
  { path: "/servicios", component: EjemploServicios },
  { path: "/serviciosOficio", component: EmpleadosServiciosOficios },
  { path: "/serviciosDepartamentos", component: DepartamentosIndex },
  { path: "/insertarDepartamento", component: InsertarDepartamento },
  {
    path: "/detallesDepartamento/:idDept/:nombre/:localidad",
    component: DetallesDepartamento,
  },
  {
    path: "/modificarDepartamento/:idDept",
    component: ModificarDepartamento,
  },
  {
    path: "/eliminarDepartamento/:idDept",
    component: EliminarDepartamento,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
