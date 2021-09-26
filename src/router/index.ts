import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DashboardRoot from '../views/environment/index.vue'
import Signup from '../views/Signup.vue'
import store from '../store'
import AlertDetail from '../views/environment/AlertDetail.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardRoot,
    meta: { requireAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/alert/:id',
    name: 'Alert',
    component: AlertDetail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Checking if there is a token in the store
router.beforeEach((to, from, next)=>{
  const protectedRoute = to.matched.some(record => record.meta.requireAuth)
  let token = store.state.auth.token
  if (protectedRoute && (token == '' || token == null)) {
    next({name: 'Home'})
  } else {
    next()
  }
})

export default router
