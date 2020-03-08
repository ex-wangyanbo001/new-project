import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)



const router= new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录页',
      component: resolve => require(['@/pages/login/login'], resolve),
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/pages/login/register'], resolve),
    },
    {
      path: '/comm',
      name: 'comm',
      component: resolve => require(['@/pages/comm'], resolve),
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: resolve => require(['@/pages/ceshi'], resolve),
    }
    
  ]

  
})

export default router
