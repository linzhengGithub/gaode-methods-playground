<template>
  <div class="h-200px w-200px relative arrow-box">
    <div class="c-red bg-white absolute">
      这里是custom info
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.arrow-box {
  position: relative;
  width: 300;
  min-height: 200px;
  background: #ffffff;
  box-shadow: 0px 1px 1px 0px #e0e0e6;
  padding: 20px;
  top: -15px;
  border-radius: 8px 8px 8px 8px;
  pointer-events: auto;
}

.arrow-box::after {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ffffff;
  filter: drop-shadow(0px 3px 1px rgba(224, 224, 230, 1));
}
</style>
