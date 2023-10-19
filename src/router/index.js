import { createRouter, createWebHashHistory } from 'vue-router'
import RegistrationPage from '../components/registration-page.vue'
import AboutPage from '../components/about-page.vue'

const routes = [
  {
    path: '/',
    redirect: '/registration',
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router
