import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.use(Vue3Lottie)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
