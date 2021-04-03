/*
 * @Descripttion: 
 * @version: 
 * @Author: RoyalKnight
 * @Date: 2021-04-02 10:09:35
 * @LastEditors: RoyalKnight
 * @LastEditTime: 2021-04-03 10:36:58
 */
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'

const app = createApp(App)
installElementPlus(app)
app
    .use(store)
    .use(router)
    .mount('#app')