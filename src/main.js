import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HelloWorldVue from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorldVue}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')