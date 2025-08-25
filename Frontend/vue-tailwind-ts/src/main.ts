// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import Button from "primevue/button";

import "primeicons/primeicons.css";
import "./assets/main.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(PrimeVue);

app.component("Button", Button);
app.mount("#app");
