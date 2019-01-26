import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/index/test.vue';
import Test2 from '@/components/index/test2.vue';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
    },
    {
      path : '/test',
      component : Test,
    },
    {
      path : '/test2',
      component : Test2
    }
  ]
})
