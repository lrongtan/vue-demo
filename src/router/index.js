import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'd',
    component: () => import('@views/index/index.vue'),
    redirect: '/index/home',
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@views/index/index.vue'),
    redirect: '/index/home',
    meta: {
      keepAlive: true,
    },
    children: [
      {path: '/index/home', name: 'home', component: () => import('@views/index/home/home.vue'), meta: {
        keepAlive: true,
      }},
      {path: '/index/mine', name: 'mine', component: () => import('@views/index/mine/mine.vue'), meta: {
        keepAlive: true,
      }}
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@views/login/login.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/task_detail',
    name: 'task_detail',
    component: () => import('@views/task_detail/index.vue'),
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '/mine_task',
    name: 'mine_task',
    component: () => import('@views/mine_task/index.vue'),
    meta: {
      keepAlive: false,
    }
  },
  {
    path: '/mine_service',
    name: 'mine_service',
    component: () => import('@views/mine_service/index.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/balance_payment',
    name: 'balance_payment',
    component: () => import('@views/balance_payment/index.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/bind_alipay',
    name: 'bind_alipay',
    component: () => import('@views/bind_alipay/index.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/bind_wechat',
    name: 'bind_wechat',
    component: () => import('@views/bind_wechat/index.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/withdrawal',
    name: 'withdrawal',
    component: () => import('@views/withdrawal/index.vue'),
    meta: {
      keepAlive: true,
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
