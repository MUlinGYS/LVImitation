import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'hash',
  base:' process.env.BASE_URL',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) { //拦截后设置标题
    document.title = to.meta.title
  }
  next()
})

export default router
