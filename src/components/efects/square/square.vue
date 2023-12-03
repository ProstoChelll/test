<script setup lang="ts">
import element from "./elements.vue";
</script>

<template>
  <div class="fade">
    <div class="square">
      <element class="el1" />
      <element class="el2" />
      <element class="el3" />
      <element class="el4" />
    </div>
  </div>
</template>

<style scoped>
.fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}
.el1 {
  position: absolute;
  top: 35%;
  left: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(0deg);
  animation: extensionEl1 1.5s forwards;
  animation-delay: 9.5s;
}
.el2 {
  position: absolute;
  bottom: 35%;
  left: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(-90deg);
  animation: extensionEl2 1.5s forwards;
  animation-delay: 9.5s;
}
.el3 {
  position: absolute;
  top: 35%;
  right: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(90deg);
  animation: extensionEl3 1.5s forwards;
  animation-delay: 9.5s;
}
.el4 {
  position: absolute;
  bottom: 35%;
  right: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(180deg);
  animation: extensionEl4 1.5s forwards;
  animation-delay: 9.5s;
}
.square {
  opacity: 0;
  animation: inclusion 1.9s forwards;
  animation-delay: 7.4s;
}

@keyframes extensionEl1 {
  0% {
  }
  100% {
    top: 5%;
    left: 8%;
  }
}
@keyframes extensionEl2 {
  0% {
  }
  100% {
    bottom: 5%;
    left: 8%;
  }
}
@keyframes extensionEl3 {
  0% {
  }
  100% {
    top: 5%;
    right: 8%;
  }
}
@keyframes extensionEl4 {
  0% {
  }
  100% {
    bottom: 5%;
    right: 8%;
  }
}

@keyframes inclusion {
  0% {
    opacity: 0;
  }
  17% {
    opacity: 0.3;
  }
  22% {
    opacity: 0;
  }
  39% {
    opacity: 0.3;
  }
  46% {
    opacity: 0;
  }
  53% {
    opacity: 0.4;
  }
  66% {
    opacity: 0;
  }
  68% {
    opacity: 0.5;
  }
  74% {
    opacity: 0;
  }
  75% {
    opacity: 0.7;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
