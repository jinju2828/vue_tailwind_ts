import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Todos from "@/views/Todos.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/todos", name: "Todos", component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
