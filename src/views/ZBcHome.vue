<template>
  <div class="home">
    <ZbcBanner></ZbcBanner>
    <ZbcMain></ZbcMain>
  </div>
</template>

<script>
import ZbcBanner from '@/components/home/ZbcBanner.vue'
import ZbcMain from '@/components/home/ZbcMain.vue'

export default {
  components: {
    ZbcBanner,
    ZbcMain,
  },
}
</script>

<style scoped>

</style>