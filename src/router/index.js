import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewProfile from '@/components/ViewProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile/:user_id',
    name: 'ViewProfile',
    component: ViewProfile
  }
]

const router = new VueRouter({
  mode: 'history', // this removes '#' from the URLs
  routes
})

export default router
