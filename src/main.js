import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css"; // a modern alternative to CSS resets
import "@/styles/index.scss"; // global css

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
