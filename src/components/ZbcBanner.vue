<template>
	<div class="slider" @mouseenter="stop" @mouseleave="start">
		<!-- 图片区域（可点击跳转） -->
		<router-link :to="sliderData[currentIndex].link" class="slider-wrapper">
			<img :src="sliderData[currentIndex].img" :alt="sliderData[currentIndex].title" />
		</router-link>

		<!-- 底部信息栏 -->
		<div class="slider-footer">
			<p class="slider-title">{{ sliderData[currentIndex].title }}</p>
			
			<div class="slider-controls">
				<!-- 指示点 -->
				<ul class="slider-indicator">
					<li
						v-for="(item, index) in sliderData"
						:key="index"
						:class="{ active: index === currentIndex }"
						@click="go(index)">
					</li>
				</ul>

				<!-- 左右按钮 -->
				<div class="toggle">
					<button class="prev" @click.stop="prev">&lt;</button>
					<button class="next" @click.stop="next">&gt;</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ZbcBanner',
	data() {
		return {
			currentIndex: 0,
			timerId: null,
			sliderData: [
				{
					img: require('@/assets/img/banner1.png'),
					title: '聚焦两会：2026年政府工作报告解读',
					link: '/detail/1',
				},
				{
					img: require('@/assets/img/banner2.png'),
					title: '科技创新引领高质量发展新篇章',
					link: '/detail/2',
				},
				{
					img: require('@/assets/img/banner3.png'),
					title: '中国外贸逆势增长 展现经济韧性',
					link: '/detail/3',
				},
			],
		}
	},
	mounted() {
		this.start()
	},
	beforeUnmount() {
		this.stop()
	},
	methods: {
		start() {
			this.timerId = setInterval(() => {
				this.next()
			}, 3000)
		},
		stop() {
			clearInterval(this.timerId)
		},
		next() {
			this.currentIndex = (this.currentIndex + 1) % this.sliderData.length
		},
		prev() {
			this.currentIndex =
				(this.currentIndex - 1 + this.sliderData.length) %
				this.sliderData.length
		},
		go(index) {
			this.currentIndex = index
		},
	},
}
</script>

<style scoped>
.slider {
	position: relative;
	margin: 20px auto;
	width: 100%;
	max-width: 800px;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 图片区域 */
.slider-wrapper {
	display: block;
	width: 100%;
	height: 320px;
	overflow: hidden;
}

.slider-wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.slider-wrapper:hover img {
	transform: scale(1.05);
}

/* 底部信息栏 */
.slider-footer {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 20px 24px 16px;
	background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
	color: #fff;
}

.slider-title {
	font-size: 18px;
	font-weight: 500;
	margin: 0 0 12px 0;
	line-height: 1.4;
}

.slider-controls {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/* 指示点 */
.slider-indicator {
	display: flex;
	gap: 8px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.slider-indicator li {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.5);
	cursor: pointer;
	transition: all 0.3s ease;
}

.slider-indicator li:hover {
	background: rgba(255, 255, 255, 0.8);
}

.slider-indicator .active {
	width: 24px;
	border-radius: 4px;
	background: #fff;
}

/* 按钮 */
.toggle {
	display: flex;
	gap: 8px;
}

.toggle button {
	width: 32px;
	height: 32px;
	border: none;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(4px);
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	border-radius: 4px;
	transition: all 0.3s ease;
}

.toggle button:hover {
	background: rgba(255, 255, 255, 0.4);
	transform: scale(1.05);
}

/* 响应式 */
@media (max-width: 768px) {
	.slider-wrapper {
		height: 220px;
	}

	.slider-footer {
		padding: 12px 16px;
	}

	.slider-title {
		font-size: 14px;
		margin-bottom: 8px;
	}

	.slider-indicator li {
		width: 6px;
		height: 6px;
	}

	.slider-indicator .active {
		width: 18px;
	}

	.toggle button {
		width: 28px;
		height: 28px;
		font-size: 14px;
	}
}
</style>