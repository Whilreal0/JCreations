import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView'
import OverView from '@/views/OverView'
import BrandView from '@/views/BrandsView'
import WeddingView from '@/views/WeddingView'
import AboutView from '@/views/AboutView'
import PageNotFound from '@/views/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/overview',
    name: 'overview',
    component: OverView
  },
  {
    path: '/brands',
    name: 'brandView',
    component: BrandView
  },
  {
    path: '/wedding',
    name: 'weddingView',
    component: WeddingView
  },
  {
    path: '/about',
    name: 'aboutView',
    component: AboutView
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
