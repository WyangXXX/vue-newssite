<template>
  <div class="hot-card" @click="handleClick">
    <!-- 左侧排名 -->
    <div class="rank-number" :class="rankClass">
      {{ rank }}
    </div>

    <!-- 中间内容 -->
    <div class="card-content">
      <img :src="data.img" :alt="data.title" class="card-img" />
      <div class="card-info">
        <h4 class="card-title">{{ data.title }}</h4>
        <p class="card-desc">{{ data.desc }}</p>
      </div>
    </div>

    <!-- 右侧搜索次数 -->
    <div class="card-stats">
      <div class="stats-number">{{ data.searchCount }}</div>
      <div class="stats-label">搜索次数</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotCard',
  props: {
    // 排名序号
    rank: {
      type: Number,
      required: true
    },
    // 新闻数据
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    rankClass() {
      if (this.rank === 1) return 'rank-1'
      if (this.rank === 2) return 'rank-2'
      if (this.rank === 3) return 'rank-3'
      return ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.data)
    }
  }
}
</script>

<style scoped>
.hot-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.hot-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

/* 左侧排名数字 */
.rank-number {
  width: 50px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  flex-shrink: 0;
  color: #999;
}

.rank-1 {
  color: #ff4d4f;
  font-size: 32px;
}

.rank-2 {
  color: #ff7a45;
  font-size: 30px;
}

.rank-3 {
  color: #ffa940;
  font-size: 28px;
}

/* 中间内容区域 */
.card-content {
  flex: 1;
  display: flex;
  gap: 16px;
  margin-left: 10px;
}

.card-img {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.card-info {
  flex: 1;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
  line-height: 1.4;
}

.card-desc {
  font-size: 13px;
  color: #8b9cb0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 右侧搜索次数 */
.card-stats {
  text-align: center;
  flex-shrink: 0;
  min-width: 100px;
  border-left: 1px solid #eee;
  padding-left: 20px;
  margin-left: 10px;
}

.stats-number {
  font-size: 18px;
  font-weight: 700;
  color: #ff4d4f;
}

.stats-label {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
</style>