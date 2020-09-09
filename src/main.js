import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'                //屏幕适配
import plugin from './plugins'
import { Toast } from "vant";         //Toast 全局使用组件

import './assets/styles/common/reset.css'
import './assets/styles/common/border.css'
import './assets/styles/scss/base.scss'

Vue.config.productionTip = false

Vue.use(plugin, {})

Vue.use(Toast)      //全局使用    放在这

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
