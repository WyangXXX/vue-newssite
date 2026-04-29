<template>
  <div class="hot-box">
    <div>
      <h3><router-link to="/hotnews">24小时热闻</router-link></h3>
    </div>
    <ul>
      <li v-for="(item, index) in hotList" :key="item.id" @click="goToDetail(item)">
        <span class="rank" :class="`rank-${index + 1}`">{{ index + 1 }}</span>
        <div class="content">
          <span class="title">{{ item.title }}</span>
          <span class="desc">{{ item.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { newsList } from '@/data/news.js'

export default {
  name: 'ZbcHot',
  data() {
    return {
      hotList: []
    }
  },
  created() {
    this.hotList = [...newsList].reverse().slice(0, 5)
  },
  methods: {
    goToDetail(item) {
      this.$router.push(`/detail/${item.id}`)
    }
  }
}
</script>

<style scoped>
.hot-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.hot-box h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding: 0 16px 12px 16px;
  border-bottom: 2px solid #f0f0f0;
  color: #1a1a2e;
}

.hot-box h3 a:hover {
  color: #3b82f6;
  text-decoration: none;
}

.hot-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hot-box li {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.hot-box li:hover {
  background: #f8f9fa;
}

.rank {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #999;
  margin-right: 12px;
  flex-shrink: 0;
}

.rank-1 {
  color: #ff4d4f;
  font-size: 18px;
}

.rank-2 {
  color: #ff7a45;
  font-size: 17px;
}

.rank-3 {
  color: #ffa940;
  font-size: 16px;
}

.content {
  flex: 1;
  min-width: 0;
}

.title {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  display: block;
  font-size: 12px;
  color: #bbb;
}
</style>
