<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCountries } from "../store/countries";
import { Ref, ref } from "vue";

interface Iproduct {
  filters: {
    iso_3166_1_a2: string;
  };
  paginate: {
    page: number;
    pp_items: number;
  };
  id: number;
}

let countrysData: Ref<Iproduct[]> = ref([]);

let countries = useCountries();
const route = useRoute();
const countryName = String(route.params.id.slice(1, 3));

let error = ref(false);

for (let i = 0; i < countries.data.length; i++) {
  if (countries.data[i].filters.iso_3166_1_a2 == countryName) {
    countrysData.value.push(countries.data[i]);
  }
}

if (countrysData.value.length == 0) {
  error.value = true;
}
</script>

<template>
  <div></div>
  <router-link to="/">
    <p class="back">назад</p>
  </router-link>
  <div v-if="!error">
    <p class="countrys" v-for="item in countrysData">
      {{ item }}
      <button @click="countries.deleteCountry(item.id)">удалить</button>
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
