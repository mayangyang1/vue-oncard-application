import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import * as filters from '@/filters'
// import SvgIcon from '@/components/SvgIcon'

// Vue.component('svg-icon', SvgIcon);//注册全局组件

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
})

// router.beforeEach((to, from, next)=>{
 
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')