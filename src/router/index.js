import { createRouter, createWebHashHistory } from 'vue-router'
import RegistrationPage from '../views/RegistrationPage/RegistrationPage.vue'
import AboutPage from '../views/AboutPage/AboutPage.vue'
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
    path: '/about',
    name: 'About',
    component: AboutPage
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
