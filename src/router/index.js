import Vue from 'vue'
import VueRouter from 'vue-router'

import ZbcHome from '@/views/ZbcHome.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: ZbcHome,
		},
	],
})

export default router