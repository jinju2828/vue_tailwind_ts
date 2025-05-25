import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import TodoPage from "@/pages/TodoPage.vue"; 

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/todos", name: "Todos", component: TodoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
