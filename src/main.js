import "./assets/scss/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// icons
import "@fortawesome/fontawesome-free/js/all";

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
