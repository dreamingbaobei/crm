import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)
const constantRoutes = [
  { path: '/login', component: Login },
  { path: '/404', component: () => import('../views/ErrorPage.vue') },
  { path: '*', redirect: '/404' }
]
// const asyncRoutes = [{ path: '/', component: () => import('../views/Layout.vue') }]
const routes = [
  ...constantRoutes
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 全局守卫
router.beforeEach((to, from, next) => {
  const whiteList = ['/login', '/404'] // 免登陆白名单
  const requiresAuth = (whiteList.indexOf(to.path) === -1)
  if (!requiresAuth) {
    next() // 不需要验证的模块，直接放行
  } else {
    const token = sessionStorage.getItem('token')
    if (token) {
      next() // 如果登录则放行，进入路由
    } else {
      // 未登陆跳转到/login，并携带重定向地址
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  }
})
export default router
