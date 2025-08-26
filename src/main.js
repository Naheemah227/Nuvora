import { createApp } from 'vue'
import { createPinia } from 'pinia'




import App from './App.vue'
import router from './router'
import './assets/style/custom.css'


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";




const app = createApp(App);

app.use(Toast); // ✅ Register toast globally


app.use(createPinia())
app.use(router)



app.mount('#app')
