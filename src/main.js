import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/style/custom.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

// create only ONE Pinia instance
const pinia = createPinia();

app.use(pinia); // ✅ use the same pinia instance
app.use(router);
app.use(Toast); // ✅ register toast globally

app.mount("#app");
