import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/ZBcHome.vue'
import List from '@/views/ZbcList.vue'
import Detail from '@/views/ZbcNewsDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/detail', component: Detail }
  ]
})

export default router