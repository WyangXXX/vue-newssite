import Vue from 'vue'
import VueRouter from 'vue-router'

import ZbcLogin from '@/views/ZbcLogin.vue'
import ZbcSignup from '@/views/ZbcSignup.vue'
import ZbcNewsDetail from '@/views/ZbcNewsDetail.vue'	
import ZbcHome from '@/views/ZbcHome.vue'
import ZbcGlobal from '@/views/ZbcGlobal.vue'
import ZbcDomestic from '@/views/ZbcDomestic.vue'
import ZbcSociety from '@/views/ZbcSociety.vue'
import ZbcData from '@/views/ZbcData.vue'



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
		{
			path:'/login',
			component:ZbcLogin,
		},
		{
			path:'/signup',
			component:ZbcSignup,
		},
		{
			path:'/detail',
			component:ZbcNewsDetail,
		},
		{
			path:'/global',
			component:ZbcGlobal,
		},
		{
			path:'/domestic',
			component:ZbcDomestic,
		},
		{
			path:'/society',
			component:ZbcSociety,
		},
		{
			path:'/data',
			component:ZbcData,
		},
		],
})

export default router