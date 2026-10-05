<template>
  <div class="slidev-layout q-and-a t1-gold-bg">
    <div class="w-full h-full flex flex-col justify-center items-center text-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.q-and-a {
  padding: 52px 46px 64px;
}

.slidev-layout.q-and-a h1 {
  font-size: 72px;
  line-height: 1.05;
  font-weight: 700;
  margin: 0 0 16px;
}

.slidev-layout.q-and-a h1 + p {
  font-size: 21px;
  opacity: 0.95;
  margin: 0;
}
</style>
