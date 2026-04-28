<template>
  <div class="search-box">
    <input
      type="text"
      v-model="keyword"
      placeholder="搜索新闻..."
    />

    <button @click="handleSearch">搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    handleSearch() {
      console.log("搜索内容：", this.keyword);
    }
  }
};
</script>

<style scoped>
.search-box {
  display: flex;
  margin-bottom: 15px;
}

.search-box input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
}

.search-box button {
  padding: 8px 12px;


  
  border: none;
  background: #004c98;
  color: #fff;
  cursor: pointer;
}
</style>