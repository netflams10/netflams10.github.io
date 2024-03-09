import "./assets/scss/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// icons
// import feather from "vue-icon";

const app = createApp(App);

app.use(router);

// app.use(feather, "v-icon");

app.use(store);

app.mount("#app");
