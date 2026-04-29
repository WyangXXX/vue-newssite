<template>
  <div class="hot-list">
    <HotCard
      v-for="(item, index) in list"
      :key="item.id"
      :rank="index + 1"
      :data="item"
      @click="handleCardClick"
    />
  </div>
</template>

<script>
import HotCard from './HotCard.vue'

export default {
  name: 'HotContent',
  components: {
    HotCard
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    handleCardClick(item) {
      this.$emit('cardClick', item)
    }
  }
}
</script>

<style scoped>
.hot-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>