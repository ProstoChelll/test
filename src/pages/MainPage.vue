<script setup lang="ts">
import { useCountries } from "../store/countries";
import { Efects, StartInteface, Ctable, StoreVisualization } from "../components";
import { getAllData } from "../server/getData";

let countries = useCountries();

if (countries.isAllDownload == false) {
  const allData = getAllData();
  countries.data.push(...allData);
}
countries.isAllDownload = true;
</script>

<template>
  <StartInteface @click="countries.animationPlay = !countries.animationPlay" />
  <transition name="fade">
    <div v-if="countries.animationPlay">
      <Efects />
    </div>
  </transition>
  <Ctable v-if="countries.animationPlay" />
  <StoreVisualization v-if="countries.animationPlay" />
</template>

<style scoped>
.fade-enter-active {
  animation: 1.6s fade forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
