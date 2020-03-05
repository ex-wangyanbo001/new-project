import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/pages/login'], resolve),
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/pages/register'], resolve),
    }
    
  ]
})
