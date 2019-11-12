import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('./views/Navigation.vue')
    },
    {
      path: '/rechargeRecord',
      name: 'rechargeRecord',
      component: () => import('./views/RechargeRecord.vue')
    },
    {
      path: '/consumptionRecord',
      name: 'consumptionRecord',
      component: () => import('./views/ConsumptionRecord.vue')
    },
    {
      path: '/consumptionRecordDetail',
      name: 'consumptionRecordDetail',
      component: () => import('./views/ConsumptionRecordDetail.vue')
    },
    {
      path: '/cardDetail',
      name: 'cardDetail',
      component: () => import('./views/CardDetail.vue')
    }
  ]
})
