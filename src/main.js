import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css"; // a modern alternative to CSS resets
import "@/styles/index.scss"; // global css

import svgIcon from "@/components/SvgIcon/SvgIcon.vue";
import Header from "@/components/Header/HeaderView.vue";
import "virtual:svg-icons-register";

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .component("svg-icon", svgIcon)
  .component("Header", Header)
  .mount("#app");
