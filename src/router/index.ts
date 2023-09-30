import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ableton',
      component: () => import('@/views/AbletonView.vue')
    }
  ]
})

export default router
