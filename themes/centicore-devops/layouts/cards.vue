<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  count: {
    type: [String, Number],
    default: '4',
  },
  accent: {
    type: [String, Number, Array],
    default: '1',
  },
})

const n = computed(() => Math.max(1, Math.min(12, Number(props.count) || 4)))
const accentSet = computed(() => new Set(
  (Array.isArray(props.accent) ? props.accent : String(props.accent).split(',')).map(s => Number(String(s).trim())).filter(Boolean),
))
const cards = computed(() => Array.from({ length: n.value }, (_, i) => i + 1))
const rows = computed(() => Math.ceil(n.value / 2))
</script>

<template>
  <div class="slidev-layout cards">
    <div class="mb-3">
      <slot />
    </div>
    <div class="flex-1 grid gap-3" :style="{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }">
      <div v-for="i in cards" :key="i" class="t1-card" :class="{ accent: accentSet.has(i) }">
        <slot :name="`card-${i}`">
          <h2>Пункт {{ i }}</h2>
          <ul>
            <li>Описание</li>
          </ul>
        </slot>
      </div>
    </div>
  </div>
</template>
