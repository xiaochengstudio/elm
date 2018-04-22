import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const city = r => require.ensure([], () => r(require('@/pages/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('@/pages/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('@/pages/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('@/pages/shop/shop')), 'shop')
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },{
      path:'/home',
      component:home
    },{
      path:'/city/:cityid',
      component:city
    },{
      path:'/msite',
      component:msite,
      meta: { keepAlive: true }
    },{
      path:'/search/:geohash',
      component:search
    },{
      path:'/shop',
      component:shop
    },{
      path:'/login',
      component:login
    }
  ],
  mode:routerMode,
  strict: process.env.NODE_ENV !== 'production'
})
