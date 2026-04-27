<template>
  <div class="detail">
    <ZbcHeader />
    <div class="content">
      <h1>新闻详情页</h1>
      <p>当前新闻ID：{{ id }}</p>
      <p>这里可以写新闻正文内容...</p>
    </div>
  </div>
</template>

<script>
import ZbcHeader from '@/components/ZbcHeader.vue'

export default {
  components: { ZbcHeader },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>