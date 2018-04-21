import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from './../config/env'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../pages/city/city')), 'city')

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
    }
  ],
  mode:routerMode,
  strict: process.env.NODE_ENV !== 'production'
})
