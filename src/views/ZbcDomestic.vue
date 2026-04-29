<template>
  <div>
    <div class="banner">
      <img src="../assets/img/domestic.png" alt="" />
    </div>

    <div class="news-grid">
      <NewsItem
        v-for="item in newsList"
        :key="item.id"
        :news="item"
      />
    </div>
  </div>
</template>

<script>
import NewsItem from '@/components/category/NewsItem.vue'
import { domesticList } from '@/data/domestic.js'

export default {
  name: 'ZbcDomestic',
  components: { NewsItem },

  data() {
    return {
      newsList: domesticList
    }
  }
}
</script>

<style scoped>
.news-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}
.banner {
  width: 100%;
  height: 150px;
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit:fill;
}
</style>
