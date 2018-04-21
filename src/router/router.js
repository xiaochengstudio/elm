import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from './../config/env'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },{
      path:'/home',
      component:home
    }
  ],
  mode:routerMode,
  strict: process.env.NODE_ENV !== 'production'
})
