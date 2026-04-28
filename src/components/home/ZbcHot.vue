<template>
  <div class="hot-box">
    <h3>24小时热闻</h3>

    <ul>
      <li v-for="item in hotList" :key="item.id">
        <span class="title">{{ item.title }}</span>
        <span class="desc">{{ item.desc }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [
        { id: 1, title: "梅西世界杯夺冠", desc: "15k阅读 2k评论" },
        { id: 2, title: "AI技术爆发", desc: "12k阅读 1.5k评论" },
        { id: 3, title: "全球经济变化", desc: "9k阅读 900评论" },
        { id: 4, title: "体育赛事热点", desc: "7k阅读 600评论" }
      ]
    };
  }
};
</script>

<style scoped>
.hot-box {
  background: #f7f7f7;
  padding: 10px;
}

.hot-box h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.hot-box ul {
  list-style: none;
  padding: 0;
}

.hot-box li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.title {
  display: block;
  font-size: 14px;
  color: #333;
}

.desc {
  font-size: 12px;
  color: #999;
}
</style>