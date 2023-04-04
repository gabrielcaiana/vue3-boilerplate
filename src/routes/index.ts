import { createRouter , createWebHistory } from 'vue-router'
import publicRouter from './public'

const routes = [...publicRouter]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
