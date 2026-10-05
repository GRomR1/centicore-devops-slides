<template>
  <div class="slidev-layout collage !p-0 w-full h-full bg-black">
    <slot />
  </div>
</template>
<style>
.slidev-layout.collage {
  padding: 0 !important;
}
.slidev-layout.collage::before,
.slidev-layout.collage::after {
  display: none !important;
}
</style>
