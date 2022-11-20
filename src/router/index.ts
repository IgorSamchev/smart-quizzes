import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/GroupsView.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScoreView.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResultView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
