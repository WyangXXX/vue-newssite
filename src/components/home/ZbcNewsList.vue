<template>
	<ul class="news-list">
		<ZbcNewsCard v-for="i in 10" :key="i" :news="newsList[i]" />
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
