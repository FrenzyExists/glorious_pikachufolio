import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import './assets/main.css'

const app = createApp(App)
app.use(BootstrapIconsPlugin);
app.use(router)

app.mount('#app')
