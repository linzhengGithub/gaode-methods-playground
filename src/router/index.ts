import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/home/index.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'Home',
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
    },
  ],
})
