<template>
  <div class="detail">
    <div class="detail-card">
      <h1 class="title">{{ news.title }}</h1>
      
      <div class="author-line">
        <span class="author">{{ news.author }} | 真不戳新闻网 </span>
      </div>
      
      <div class="desc" v-if="news.desc">
        {{ news.desc }}
      </div>
      
      <div class="img-wrapper" v-if="news.img">
        <img :src="news.img" :alt="news.title" />
      </div>
      
      <div class="content">
        {{ news.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { newsList } from "@/data/news.js";

export default {
  data() {
    return {
      news: {}
    };
  },
  mounted() {
    const id = this.$route.query.id;
    this.news = newsList.find(item => item.id == id);
  }
};
</script>

<style scoped>
.detail {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.detail-card {
  max-width: 800px;
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  padding: 48px 56px;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 16px 0;
  line-height: 1.3;
  letter-spacing: -0.3px;
}

.author-line {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eef2f6;
}

.author {
  font-size: 14px;
  color: #8b9cb0;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.desc {
  font-size: 16px;
  line-height: 1.6;
  color: #4a5b6e;
  background: #f8fafc;
  padding: 18px 22px;
  border-radius: 16px;
  margin-bottom: 32px;
  border-left: 3px solid #3b82f6;
}

.img-wrapper {
  margin-bottom: 32px;
  border-radius: 20px;
  overflow: hidden;
  background: #f0f2f5;
}

.img-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.content {
  font-size: 16px;
  line-height: 1.7;
  color: #2c3e4e;
  text-align: justify;
}

@media (max-width: 600px) {
  .detail {
    padding: 20px 16px;
  }
  .detail-card {
    padding: 28px 24px;
  }
  .title {
    font-size: 24px;
  }
  .desc {
    padding: 14px 18px;
  }
}
</style>