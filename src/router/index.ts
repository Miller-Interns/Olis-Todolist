import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/first-page.vue'
import TodoPage from '../views/todo-page.vue'
import { RouterName } from '@/types/enum'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouterName.FirstPage,
      component: HomeView
    },
    {
      path: '/todopage',
      name: RouterName.TodoPage,
      component: TodoPage
    }
  ]
})

export default router
