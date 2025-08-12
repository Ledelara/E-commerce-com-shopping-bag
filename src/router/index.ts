import HomePage from '@/views/HomePage.vue'
import ShoppingBasket from '@/views/ShoppingBasket.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/basket',
    name: 'ShoppingBasket',
    component: ShoppingBasket
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
