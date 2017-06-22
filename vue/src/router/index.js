import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '../components/page/home'
import detail from '../components/page/detail'
import register from '../components/page/register'
import mine from '../components/page/mine'
import system from '../components/page/system'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/page/home',
      name: 'home',
      component: home
    },
    {
      path: '/page/register',
      name: 'register',
      component: register
    },
    {
      path: '/page/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/page/system',
      name: 'system',
      component: system
    }
  ]
})
