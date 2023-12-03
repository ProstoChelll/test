<script setup lang="ts"></script>

<template>
  <div class="text">Подключение...</div>
</template>

<style scoped>
.text {
  width: 0;
  overflow: hidden;
  border-right: 0.43em solid rgb(255, 255, 255);
  animation: typeAndDelete 6s 2s steps(11) forwards, blinkCursor 0.5s step-end forwards alternate;
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
  z-index: 1;
}
@keyframes blinkCursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes typeAndDelete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 6.6em;
  }
  100% {
    display: none;
  }
}
</style>
