import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreatePatient')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../components/Gallery')
  },
  {
    path: '/programs',
    name: 'programs',
    component: () => import('../components/Programs')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/Appointments')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/ChangePatient')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router