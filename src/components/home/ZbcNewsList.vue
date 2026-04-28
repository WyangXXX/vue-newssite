<template>
	<ul class="news-list">
		<ZbcNewsCard v-for="item in newsList" :key="item.id" :news="item" />
	</ul>
</template>

<script>
import ZbcNewsCard from './ZbcNewsCard.vue'
import img1 from '@/assets/img/1.png'
import img2 from '@/assets/img/2.png'
import img3 from '@/assets/img/3.png'
import img4 from '@/assets/img/4.png'

export default {
	components: { ZbcNewsCard },
	data() {
		return {
			newsList: [
				{
					id: 1,
					imgUrl: img1,
					title: '梅西世界杯夺冠后完整复盘：职业生涯最重要一战',
					desc: '梅西在卡塔尔世界杯的表现被认为是职业生涯巅峰之一，本文详细解析他的关键比赛表现与战术价值。',
					author: '体育日报',
					time: '1小时前',
					views: '12.5k',
					link: '#',
				},
				{
					id: 2,
					imgUrl: img2,
					title: 'C罗正式亮相利雅得胜利：我不是来养老的，我要改变亚洲足球',
					desc: '葡萄牙巨星C罗在沙特联赛的亮相仪式上表示，自己仍有能力在高水平联赛竞争，目标是帮助球队夺得亚冠冠军。',
					author: '体坛周报',
					time: '3小时前',
					views: '28.3k',
					link: '#',
				},
				{
					id: 3,
					imgUrl: img3,
					title: '姆巴佩：世界杯决赛输给梅西让我更加渴望金球奖',
					desc: '法国球星姆巴佩在接受采访时坦言，世界杯决赛的失利是他职业生涯最痛苦的时刻，但也激励他变得更强。',
					author: '足球周刊',
					time: '5小时前',
					views: '18.7k',
					link: '#',
				},
				{
					id: 4,
					imgUrl: img4,
					title: '哈兰德破门+助攻，曼城3-1逆转利物浦保留争冠希望',
					desc: '英超焦点战中，哈兰德贡献一传一射，帮助曼城在主场逆转击败利物浦，继续紧追榜首阿森纳。',
					author: '英超观察',
					time: '昨天',
					views: '35.2k',
					link: '#',
				},
			],
		}
	},
}
</script>

<style scoped>
.news-list {
	padding: 0;
    margin: 0 50px;
    width: 100%;
	list-style: none;

}
</style>
