import "./assets/scss/main.scss";
import "vue-final-modal/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// components
import { createVfm } from "vue-final-modal";

// icons
import "@fortawesome/fontawesome-free/js/all";

const vfm = createVfm();
const app = createApp(App);

app.use(router);

app.use(store);

app.use(vfm);

app.mount("#app");
