import Vue from 'vue'
import VueRouter from 'vue-router'

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
  },
  {
    path: '/task_detail',
    name: 'task_detail',
    component: () => import('@views/task_detail/index.vue'),
  },
  {
    path: '/mine_task',
    name: 'mine_task',
    component: () => import('@views/mine_task/index.vue'),
  },
  {
    path: '/mine_service',
    name: 'mine_service',
    component: () => import('@views/mine_service/index.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
