<script setup lang="ts">
import square from "./efects/square/square.vue";
import textLoading from "./efects/text/text.vue";
</script>

<template>
  <div class="fade">
    <textLoading />
    <square />
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
  z-index: -1;
}
</style>
