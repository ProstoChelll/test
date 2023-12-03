import { createWebHistory, createRouter } from "vue-router";
import * as pages from "../pages";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "main", component: pages.MainPage },
    { path: "/catalog/:id", name: "catalog", component: pages.CountryPage },
  ],
});
