<script setup lang="ts">
import { handleBackground } from '@slidev/client'
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: undefined,
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout cover t1-blue-bg" :style="style">
    <div class="w-full h-full flex flex-col justify-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  padding: 52px 46px 64px;
}

.slidev-layout.cover h1 {
  font-size: 64px;
  line-height: 1.08;
  font-weight: 700;
  margin: 0 0 16px;
}

.slidev-layout.cover h1 + p {
  font-size: 21px;
  line-height: 1.5;
  opacity: 0.92;
  margin: 0 0 12px;
}
</style>
