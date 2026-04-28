<template>
  <div class="main-container">
    <div class="center">
      <ZbcNewsList />
    </div>

    <div class="right">
      <ZbcRightBar />
    </div>
  </div>
</template>

<script>
import ZbcNewsList from "./ZbcNewsList.vue";
import ZbcRightBar from "./ZbcRightBar.vue";

export default {
  components: {
    ZbcNewsList,
    ZbcRightBar
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 1440px;
}

.left {
  width: 200px;
}

.center {
  flex: 1;
}

.right {
  width: 300px;
}
</style>