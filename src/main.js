// import dotenv from "dotenv";
// dotenv.config();
import "./assets/scss/main.scss";
import "vue-final-modal/style.css";
import "sweetalert2/dist/sweetalert2.min.css";

import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";

// components
import { createVfm } from "vue-final-modal";
import VueSweetalert2 from "vue-sweetalert2";

// icons
import "@fortawesome/fontawesome-free/js/all";

const vfm = createVfm();
const app = createApp(App);

app.use(router);

app.use(store);

app.use(vfm);

app.use(VueSweetalert2);

app.mount("#app");
