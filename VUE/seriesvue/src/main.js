import Vue from "vue";
import App from "./App.vue";
import Serie from "./components/Serie.vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/series/:id", component: Serie }];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
