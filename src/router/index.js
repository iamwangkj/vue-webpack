import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/theme-day-and-night',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/theme-day-and-night.vue')
  },
  {
    path: '/long-page',
    component: () => import('../pages/long-page.vue')
  },
  {
    path: '/font-size',
    component: () => import('../pages/font-size.vue')
  },
  {
    path: '/line-height',
    component: () => import('../pages/line-height.vue')
  },
  {
    path: '/date',
    component: () => import('../pages/date.vue')
  },
  {
    path: '/ppi',
    component: () => import('../pages/ppi.vue')
  },
  {
    path: '/phone-version',
    component: () => import('../pages/phone-version.vue')
  },
  {
    path: '/video',
    component: () => import('../pages/video.vue')
  },
  {
    path: '/loading',
    component: () => import('../pages/loading.vue')
  },
  {
    path: '/border',
    component: () => import('../pages/border.vue')
  },
  {
    path: '/audio',
    component: () => import('../pages/audio.vue')
  },
  {
    path: '/click',
    component: () => import('../pages/click.vue')
  },
  {
    path: '/chart',
    component: () => import('../pages/chart.vue')
  },
  {
    path: '/canvas',
    component: () => import('../pages/canvas.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
