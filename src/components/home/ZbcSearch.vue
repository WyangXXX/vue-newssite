<template>
  <div class="search-box">
    <input type="text" placeholder="搜索功能开发中" disabled />
    <button disabled>搜索</button>
  </div>
</template>

<script>
export default {
  name: 'ZbcSearch'
}
</script>

<style scoped>
.search-box {
  display: flex;
  margin-bottom: 20px;
}

.search-box input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px 0 0 6px;
  font-size: 14px;
  background-color: #fafafa;
  color: #999;
  outline: none;
}

.search-box input:disabled {
  cursor: not-allowed;
}

.search-box button {
  padding: 10px 16px;
  border: none;
  background: #bbbbbb;
  color: #fff;
  cursor: not-allowed;
  border-radius: 0 6px 6px 0;
  font-size: 14px;
}
</style>