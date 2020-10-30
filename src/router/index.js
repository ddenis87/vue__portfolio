import nProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/portfolio.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    nProgress.start();
  }
  next();
})

router.afterEach((to, from) => {
  nProgress.done();
})

export default router
