import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/information',
    name: 'Infromation',
    component: Information
  },
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
  }
]

const router = new VueRouter({
  routes
})

export default router
