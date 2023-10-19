import { createRouter, createWebHashHistory } from 'vue-router'
import RegistrationPage from '../components/RegistrationPage/RegistrationPage.vue'
import AboutPage from '../components/AboutPage/AboutPage.vue'

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
