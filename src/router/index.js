import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import watchDemo from '@/components/watchDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/watchDemo',
          name: 'watchDemo',
          component: watchDemo
        }
      ]
    }
  ]
})
