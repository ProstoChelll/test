<script setup lang="ts">
import { useCountries } from "../store/countries";

let countries = useCountries();
</script>

<template>
  <div class="store__visual">
    <h2>Данные в store</h2>
    <button @click="countries.cleanStore">очистить стор</button>
    <p v-for="item in countries.data">
      <router-link class="router__link" :to="`/catalog/:${item.filters.iso_3166_1_a2}`">{{ item }}</router-link>
    </p>
  </div>
</template>

<style scoped>
.store__visual {
  margin-top: 40px;
  width: 1239.5px;
  height: 245px;
  border: 4px double rgb(85, 170, 90);
  padding: 10px 60px 60px 10px;
  overflow: hidden;
  overflow-y: scroll;
  opacity: 0;
  animation: appearance 2s forwards;
  animation-delay: 10.5s;
}
.store__visual h2 {
  color: white;
}
.router__link {
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.router__link:hover {
  color: rgb(85, 170, 90);
}
@keyframes appearance {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
