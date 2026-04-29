import Vue from 'vue'
import VueRouter from 'vue-router'

import ZbcHome from '@/views/ZbcHome.vue'

import ZbcLogin from '@/views/ZbcLogin.vue'
import ZbcSignup from '@/views/ZbcSignup.vue'
import UserProfile from '@/views/UserProfile.vue'

import ZbcNewsDetail from '@/views/ZbcNewsDetail.vue'	

import ZbcGlobal from '@/views/ZbcGlobal.vue'
import ZbcDomestic from '@/views/ZbcDomestic.vue'
import ZbcSociety from '@/views/ZbcSociety.vue'
import ZbcFinance from '@/views/ZbcFinance.vue'
import HotNews from '@/views/HotNews.vue'

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
			path:'/detail/:id',
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
			path:'/finance',
			component:ZbcFinance,
		},
		{
			path:'/hotnews',
			component:HotNews,
		},
		{
			path:'/userprofile',
			component:UserProfile,
		}
		],
})

export default router