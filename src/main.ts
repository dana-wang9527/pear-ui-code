import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import {createWebHashHistory,createRouter} from 'vue-router'
import pear from './components/pear.vue'

const history = createWebHashHistory()
const router=createRouter(
    {
     history:history,
     routes:[
         {path:"/",component:pear}
     ]
    }
)

const app = createApp(App)
app.use(router)
app.mount('#app')
