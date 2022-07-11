import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import svgIcon from '@/components/SvgIcon.vue'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.component('SvgIcon', svgIcon)
app.mount('#app')
