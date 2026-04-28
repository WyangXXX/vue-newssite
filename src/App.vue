<!-- 
src/
├── assets/                      # 静态资源
│   ├── img/
│   │   ├── banner1.jpg
│   │   ├── banner2.jpg
│   │   ├── banner3.jpg
│   │   └── others/
│   │
│   └── video/                  # 视频资源（如果有）
├── components/                 # 组件层
│   │
│   ├── layout/                 # 页面基础布局
│   │   ├── ZbcHeader.vue       # 顶部导航
│   │   └── ZbcFooter.vue       # 底部
│   │
│   ├── home/                   # 首页核心模块
│   │   ├── ZbcBanner.vue       # 轮播图
│   │   ├── ZbcMain.vue         # 主体容器（三栏布局）
│   │   │
│   │   ├── ZbcCategory.vue     # 左侧分类导航
│   │   ├── ZbcNewsList.vue     # 中间新闻列表
│   │   ├── ZbcNewsCard.vue     # 单条新闻卡片
│   │   │
│   │   ├── ZbcRightBar.vue     # 右侧栏容器
│   │   ├── ZbcSearch.vue       # 搜索框
│   │   └── ZbcHot.vue          # 热搜模块
├── views/                      # 页面级结构
│   ├── ZbcHome.vue                # 首页（拼装所有组件）
├── data/                       # mock数据（核心）
│   ├── banner.js               # 轮播图数据
│   ├── news.js                # 新闻数据
│   ├── category.js            # 分类数据（建议加）
│   └── hot.js                 # 热搜数据（建议加）
├── router/
│   └── index.js               # 路由配置
├── style/
│   ├── base.css               # 基础样式
│   └── reset.css              # 初始化样式（可选）
├── App.vue
└── main.js
-->

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
