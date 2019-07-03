import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Product from './components/Product.vue'
import Services from './components/Services'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  // 切换路由时，页面跳转到顶部
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    }
  ]
})
