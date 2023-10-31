//引入依赖及组件
import Vue from 'vue'
import Router from 'vue-router' //引入vue-router
Vue.use(Router)					//注册vue-router

import pagesOne from '../components/pagesOne'
import pagesTwo from '../components/pagesTwo'
import p1 from '../components/p1'
import p2 from '../components/p2'
import p3 from '../components/p3'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'p1',
      component: p1
    },
    {
      path: '/p1',
      name: 'p1',
      component: p1
    },
    {
      path: '/p2',
      name: 'p2',
      component: p2
    },
    {
      path: '/p3',
      name: 'p3',
      component: p3
    },
    {
      path: '/pagesOne',
      name: 'pagesOne',
      component: pagesOne
    },
    {
      path: '/pagesTwo',
      name: 'pagesTwo',
      component: pagesTwo
    }
  ]
})
