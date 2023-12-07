<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCountries } from "../store/countries";
import { Ref, ref } from "vue";

interface Iproduct {
  name: string;
  id: number;
}

let countrysData: Ref<Iproduct[]> = ref([]);

let countries = useCountries();
const route = useRoute();
const countryName = ref(String(route.params.id.slice(1)));

let error = ref(false);

for (let i = 0; i < countries.data.length; i++) {
  let index = countries.data[i].name.indexOf(countryName.value);
  if (index != -1) {
    countrysData.value.push(countries.data[i]);
  }
}

if (countrysData.value.length == 0) {
  error.value = true;
}
function deleteCountry(item: Iproduct) {
  countries.deleteCountry(item.id);
  const updatedData = countrysData.value.filter((country) => country.id !== item.id);
  countrysData.value = updatedData;
}
</script>

<template>
  <div></div>
  <router-link to="/">
    <p class="back">назад</p>
  </router-link>
  <div v-if="!error">
    <p class="countrys" v-for="item in countrysData" :key="item.id">
      {{ item }}
      <button @click="deleteCountry(item)">удалить</button>
    </p>
  </div>

  <p v-else class="error">ошибка 404</p>
</template>

<style scoped>
.countrys {
  color: white;
}
.countrys button {
  margin-left: 10px;
}
.error {
  color: white;
}
.back {
  text-decoration: none;
  font-size: 25px;
  color: white;
}
</style>
