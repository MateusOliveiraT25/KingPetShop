import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css"; // Importe o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.js"; // Importe o JavaScript do Bootstrap

import HomePage from "@/components/HomePage.vue";
import RacaoPage from "@/components/RacaoPage.vue";
import AcessoriosPage from "@/components/AcessoriosPage.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: HomePage }, // Rota para a página inicial
      { path: "/racao", component: RacaoPage }, // Adicione a rota para a página "racao"
     { path: "/acessorios", component: AcessoriosPage }, // Adicione a rota para a página "acessorios"
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
