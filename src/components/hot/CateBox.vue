<template>
  <div class="category-box">
    <h3 class="category-title">热搜榜</h3>
    <div class="category-list">
      <div class="category-item active">全部</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CateBox'
}
</script>

<style scoped>
.category-box {
  background: white;
  border-radius: 12px;
  padding: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.category-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  padding: 0 20px 15px 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.category-list {
  padding: 0 10px;
}

.category-item {
  padding: 12px 20px;
  font-size: 15px;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.category-item:hover {
  background: #f5f5f5;
}

.category-item.active {
  background: #3b82f6;
  color: white;
}
</style>