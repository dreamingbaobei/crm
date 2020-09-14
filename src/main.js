import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './utils/components'
import * as filters from './utils/filters'
import * as directives from './utils/directives'

import 'lib-flexible/flexible'
// 引入全局样式
import 'normalize.css/normalize.css'
import './style/style.less'

import { Toast } from 'vant'

Vue.use(Toast)

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}
// 注册全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
// 注册全局自定义指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// console.log(process.env)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
