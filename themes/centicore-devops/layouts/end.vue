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
  <div class="slidev-layout end t1-blue-bg" :style="style">
    <div class="w-full h-full flex flex-col">
      <div class="max-w-[62%]">
        <h1 class="end-title">
          <slot name="title" />
        </h1>
        <div class="end-rest">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.end {
  padding: 52px 46px 64px;
}

.slidev-layout.end .end-title {
  font-size: 56px;
  line-height: 1.08;
  font-weight: 700;
  margin: 0 0 24px;
}

.slidev-layout.end .end-rest {
  font-size: 18px;
  line-height: 1.6;
}
</style>
