<!-- 
├── Header（顶部导航）
├── Main（页面主体）
│    ├── SideBar（左侧分类导航）
│    │     └── CategoryItem（分类按钮）
│    ├── Content（中部内容）
│    │     ├── NewsList（新闻列表）
│    │     │     └── NewsItem（单条新闻）
│    ├── RightBar（右侧栏）
│          ├── SearchBar（搜索区域）
│          ├── AdBanner（广告）
│          ├── HotNews（热点新闻）
│                └── HotNewsItem（单条新闻）
├── Footer（底部） 
-->

<template>
	<div id="app">
		<!-- 头部 -->
		<ZbcHeader></ZbcHeader>
		<!-- 轮播区域 -->
		<ZbcBanner></ZbcBanner>
		<!-- 主体 -->
		<ZbcMain></ZbcMain>
		<!-- 底部 -->
		<ZbcFooter></ZbcFooter>
	</div>
</template>

<script>
import ZbcHeader from './components/ZbcHeader.vue'
import ZbcBanner from './components/ZbcBanner.vue'
import ZbcMain from './components/ZbcMain.vue'
import ZbcFooter from './components/ZbcFooter.vue'
export default {
	components: {
		ZbcHeader,
		ZbcBanner,
		ZbcMain,
		ZbcFooter,
	},
}
</script>

<style></style>
