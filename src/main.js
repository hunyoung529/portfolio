import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
// import { create } from "core-js/core/object";
// createApp(App).use(store).use(router).use(Aos).mount("#app");


const app = createApp(App)
app.use(store)
app.use(router)
app.use(AOS)
app.mount('#app')