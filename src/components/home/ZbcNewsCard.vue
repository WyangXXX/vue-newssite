<template>
  <li class="news-card">
    <!-- 左：图片 -->
    <div class="img-box">
      <img :src="news.img" :alt="news.title" />
    </div>

    <!-- 右：内容 -->
    <div class="content">
      <!-- 标题 -->
      <h3 class="title">
        <router-link :to="`/detail?id=${news.id}`">
          {{ news.title }}
        </router-link>
      </h3>

      <!-- 简介 -->
      <p class="desc">
        {{ news.desc }}
      </p>

      <!-- 底部信息 -->
      <div class="meta">
        <span>{{ news.author }}</span>
        <span class="dot">·</span>
        <span>{{ news.time }}</span>
        <span class="dot">·</span>
        <span>{{ news.views }}次阅读</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ZbcNewsCard',
  props: {
    news: Object
  }
};
</script>

<style scoped>
.news-card {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

/* 左侧图片 */
.img-box {
  width: 160px;
  height: 100px;
  flex-shrink: 0;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

/* 右侧内容 */
.content {
  flex: 1;
  padding-left: 12px;
}

/* 标题 */
.title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.title a {
  color: #333;
  text-decoration: none;
}

.title a:hover {
  color: #337ab7;
}

/* 简介 */
.desc {
  margin: 6px 0;
  font-size: 13px;
  color: #666;
  line-height: 1.4;
}

/* 底部信息 */
.meta {
  font-size: 12px;
  color: #999;
}

.dot {
  margin: 0 4px;
}
</style>