<script setup lang="ts">
import { useCountries } from "../store/countries";

let countries = useCountries();
const emit = defineEmits(["fade"]);
</script>

<template>
  <div v-show="!countries.animationPlay" class="startBtn">
    <button @click="emit('fade')">Начать</button>
  </div>
</template>

<style scoped>
.startBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
