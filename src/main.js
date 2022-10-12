import { createApp, defineAsyncComponent } from 'vue'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'

// we can use async components for optimization
const Modal = defineAsyncComponent(() => import('./components/modal/Modal.vue'));

const pinia = createPinia()
const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.use(VueCookies, {
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None"
});

app.component('modal', Modal)

app.mount('#app')

