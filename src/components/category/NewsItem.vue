<template>
  <div class="news-card" @click="goDetail">
    <div class="card-image">
      <img :src="news.img" :alt="news.title" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ news.title }}</h3>
      <p class="card-desc">{{ news.desc }}</p>
      <div class="card-footer">
        <div class="author-info">
          <span class="author">{{ news.author }}</span>
          <span class="time">{{ news.time }}</span>
        </div>
        <div class="views-info">
          <span class="views-icon">🔥</span>
          <span class="views">{{ news.views }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  methods: {
  goDetail() {
    this.$router.push(`/detail/${this.news.id}`)
  }
}
}
</script>

<style scoped>
.news-card {
  width: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card-image {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  background-color: #f0f0f0;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #1a1a1a;
  
  /* 标题超出两行省略 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  
  /* 简介超出两行省略 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}

.author-info {
  display: flex;
  gap: 8px;
  align-items: center;
  overflow: hidden;
}

.author {
  font-weight: 500;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}

.time {
  white-space: nowrap;
  color: #999;
}

.views-info {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.views-icon {
  font-size: 12px;
}
</style>