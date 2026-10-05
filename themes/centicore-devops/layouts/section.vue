<template>
  <div class="slidev-layout section t1-blue-bg">
    <div class="w-full h-full flex flex-col justify-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.section {
  padding: 52px 46px 64px;
}

.slidev-layout.section h1 {
  font-size: 52px;
  line-height: 1.1;
  font-weight: 700;
  margin: 0 0 14px;
}

.slidev-layout.section h1 + p {
  font-size: 21px;
  opacity: 0.92;
  margin: 0;
}
</style>
