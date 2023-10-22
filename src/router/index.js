import { createRouter, createWebHashHistory } from 'vue-router'
import RegistrationPage from '../views/RegistrationPage/RegistrationPage.vue'
import FormsPage from '../views/FormsPage/FormsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/registration'
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationPage
  },
  {
    path: '/forms',
    name: 'Forms',
    component: FormsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
