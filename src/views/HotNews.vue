<template>
  <div class="hot-page">
    <h1 class="page-title">真不戳热搜</h1>

    <div class="content-wrapper">
      <div class="left-sidebar">
        <CateBox />
      </div>

      <div class="right-content">
        <HotContent :list="hotList" @cardClick="goToDetail" />
      </div>
    </div>
  </div>
</template>

<script>
import CateBox from '@/components/hot/CateBox.vue'
import HotContent from '@/components/hot/HotContent.vue'
import { newsList } from '@/data/news.js'

export default {
  name: 'ZbcHotPage',
  components: {
    CateBox,
    HotContent
  },
  data() {
    return {
      hotList: []
    }
  },
  created() {
    this.hotList = [...newsList].reverse().map((item, index) => ({
      id: item.id,
      title: item.title,
      desc: item.desc,
      img: item.img,
      searchCount: this.formatSearchCount(index)
    }))
  },
  methods: {
    goToDetail(item) {
      this.$router.push(`/detail/${item.id}`)
    },
    formatSearchCount(index) {
      const counts = [
        '12,845,672',
        '9,234,156',
        '8,723,489',
        '7,512,345',
        '6,389,217',
        '5,176,843',
        '4,523,198',
        '3,892,476',
        '3,245,891',
        '2,987,654',
        '2,456,789',
        '1,987,654',
        '1,543,210'
      ]
      return counts[index] || '1,000,000'
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hot-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  background: #f5f7fa;
  min-height: calc(100vh - 60px);
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 30px;
  padding-left: 10px;
  border-left: 5px solid #ff4d4f;
}

.content-wrapper {
  display: flex;
  gap: 20px;
}

.left-sidebar {
  width: 200px;
  flex-shrink: 0;
}

.right-content {
  flex: 1;
}
</style>