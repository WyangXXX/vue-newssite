<template>
	<div class="right-bar">
		<!-- 搜索 -->
		<ZbcSearch />

		<!-- 热搜 -->
		<ZbcHot />
	</div>
</template>

<script>
import ZbcSearch from './ZbcSearch.vue'
import ZbcHot from './ZbcHot.vue'

export default {
	components: {
		ZbcSearch,
		ZbcHot,
	},
}
</script>

<style scoped>
.right-bar {
	padding: 20px;
	margin-right: 50px;
}
</style>
