// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from '@/components/index/index.vue'
import router from '../../router'
//引入element
import ElementUI from 'element-ui';
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(ElementUI,{size:'small',zIndex:3000});
console.log("Index is ",Index);
new Vue({
  el: '#app',
  data : {
    flag : 'text'
  },
  router,
  components: { 
    "c-index" : Index 
  },
})
