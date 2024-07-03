import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/first-page.vue'
import TodoPage from '../views/todo-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todopage',
      name: 'todopage',
      component: TodoPage
    }
  ]
})

export default router
