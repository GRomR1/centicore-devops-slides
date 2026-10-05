<template>
  <div class="slidev-layout quote">
    <div class="w-full h-full flex flex-col justify-center max-w-[85%]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.quote h1 + p {
  font-size: 28px;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 0;
}
</style>
