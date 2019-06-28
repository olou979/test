import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Product from './components/Product.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
