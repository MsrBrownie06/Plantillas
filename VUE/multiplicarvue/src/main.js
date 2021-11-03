import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Multiplicar from "./components/navegacion/Multiplicar.vue";
import Home from "./components/navegacion/Home.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/tablaMultiplicar", component: Multiplicar },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
