import { createRouter, createWebHashHistory } from 'vue-router'
import RegistrationPage from '../views/RegistrationPage/RegistrationPage.vue'
import AboutPage from '../views/AboutPage/AboutPage.vue'

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
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
