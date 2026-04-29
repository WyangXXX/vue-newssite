

<template>
	<div id="app">
		<!-- 头部 -->
		<ZbcHeader></ZbcHeader>
		<!-- 网页 -->
		<router-view></router-view>
		<!-- 底部 -->
		<ZbcFooter></ZbcFooter>
	</div>
</template>

<script>
import ZbcHeader from './components/layout/ZbcHeader.vue'
import ZbcFooter from './components/layout/ZbcFooter.vue'
export default {
	components: {
		ZbcHeader,
		ZbcFooter,
	},
}
</script>

<style></style>
