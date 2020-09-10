import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'd',
    component: () => import('@views/index/index.vue'),
    redirect: '/index/home',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@views/index/index.vue'),
    redirect: '/index/home',
    children: [
      {path: '/index/home', name: 'home', component: () => import('@views/index/home/home.vue')},
      {path: '/index/mine', name: 'mine', component: () => import('@views/index/mine/mine.vue')}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@views/login/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
