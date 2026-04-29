<template>
  <div class="right-bar">
    <ZbcSearch />
    <ZbcHot />
  </div>
</template>

<script>
import ZbcSearch from './ZbcSearch.vue'
import ZbcHot from './ZbcHot.vue'

export default {
  name: 'ZbcRightBar',
  components: {
    ZbcSearch,
    ZbcHot
  }
}
</script>

<style scoped>
.right-bar {
  width: 260px;
}
</style>