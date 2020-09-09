import Vue from 'vue'
import VueRouter from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@views/login/login.vue')
  },
  // {
  //   path: '/',
  //   name: 'demo',
  //   component: () => import('@views/demo/demo.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
