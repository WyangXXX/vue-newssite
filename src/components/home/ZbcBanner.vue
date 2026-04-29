<template>
	<div class="banner">
		<div class="wrapper" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
			<!-- 轮播图 -->
			<ul
				class="pic"
				:style="{ transform: `translateX(-${currentIndex * 100}%)` }">
				<li v-for="(item, index) in banners" :key="index">
					<router-link :to="`/detail/${item.id}`">
						<img :src="item.img" alt="" />
					</router-link>
				</li>
			</ul>

			<!-- 左侧导航 -->

			<div class="subnav">
				<ul>
					<li
						v-for="(item, index) in banners"
						:key="index"
						@mouseenter="handleHover(index)"
						:class="{ active: currentIndex === index }">
							<router-link :to="`/detail/${item.id}`">
								<h4>{{ item.title }}</h4>
								<p>{{ item.desc }}</p>
						</router-link>
					</li>
				</ul>
			</div>

			<!-- 指示器 -->
			<ol>
				<li
					v-for="(_, index) in banners"
					:key="index"
					:class="{ current: currentIndex === index }"
					@mouseenter="handleHover(index)">
					<i></i>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
import { bannerList } from "@/data/banner.js";
export default {
	
	name: 'ZbcBanner',
	data() {
		return {
			currentIndex: 0,
			timer: null,
			banners: bannerList
		}
	},

	mounted() {
		this.startAutoPlay()
	},

	beforeUnmount() {
		this.stopAutoPlay()
	},

	methods: {
		startAutoPlay() {
			if (this.timer) return
			this.timer = setInterval(() => {
				this.currentIndex = (this.currentIndex + 1) % this.banners.length
			}, 3000)
		},

		stopAutoPlay() {
			clearInterval(this.timer)
			this.timer = null
		},

		//鼠标移入切换
		handleHover(index) {
			this.currentIndex = index
		},
	},
}
</script>

<style scoped>
.banner {
	width: 90%;
	height: 500px;
	margin: 20px auto;
	background-color: #0a1f44;
}

.banner .wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

/* 轮播 */
.banner .pic {
	display: flex;
	width: 100%;
	height: 100%;
	transition: transform 0.5s ease;
}

.banner .pic li {
	width: 100%;
	height: 100%;
	flex-shrink: 0;
}

.banner .pic li img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

/* 左侧导航 */
.banner .subnav {
	position: absolute;
	left: 0;
	top: 0;
	width: 300px;
	height: 100%;
	background: linear-gradient(
		to bottom,
		rgba(0, 76, 155, 0.95),
		rgba(0, 40, 90, 0.95)
	);
	padding-top: 10px;
}

.banner .subnav li {
	padding: 15px 20px;
	cursor: pointer;
	transition: all 0.3s;
	border-left: 3px solid transparent;
}

.banner .subnav a,
.banner .subnav i {
	color: #fff;
}

.banner .subnav li h4 {
	font-size: 16px;
	color: #fff;
	margin-bottom: 6px;
}

.banner .subnav li p {
	font-size: 13px;
	color: rgba(255, 255, 255, 0.7);
}

.banner .subnav li:hover {
	background-color: rgba(255, 255, 255, 0.08);
}

.banner .subnav li.active {
	background-color: rgba(255, 255, 255, 0.12);
	border-left: 3px solid #00aaff;
}
/* 指示器 */
.banner ol {
	position: absolute;
	right: 17px;
	bottom: 17px;
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

.banner ol li {
	cursor: pointer;
	margin-left: 8px;
	padding: 0;
	width: 22px;
	height: 22px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
}

.banner ol li i {
	display: block;
	width: 14px;
	height: 14px;
	margin: 0;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 50%;
}

/* 鼠标移入时，内点变白 */
.banner ol li:hover i {
	background-color: #ffffff;
}

/* 当前激活的点，内点保持白色 */
.banner ol .current i {
	background-color: #ffffff;
}
</style>
