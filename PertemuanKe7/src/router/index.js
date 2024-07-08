import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CekTagihantView from '../views/CekTagihantView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cektagihan',
      name: 'cektagihan',
      component: CekTagihantView
    }
  ]
})

export default router
