<template>
	<ul class="news-list">
		<ZbcNewsCard v-for="item in newsList" :key="item.id" :news="item" />
	</ul>
</template>

<script>
import ZbcNewsCard from './ZbcNewsCard.vue'
import { newsList } from "@/data/news.js";

export default {
	components: { ZbcNewsCard },
	data() {
		return {
			newsList: newsList
		}
	},
}
</script>

<style scoped>
.news-list {
	padding: 0;
    margin: 10px 72px;
    width: 100%;
	list-style: none;

}
</style>
