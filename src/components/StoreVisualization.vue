<script setup lang="ts">
import { ref } from "vue";
import { useCountries } from "../store/countries";

let countries = useCountries();
const filter = ref("");
</script>

<template>
  <div class="store__visual">
    <div>
      <h2>Данные в store</h2>
      <button @click="countries.cleanStore">очистить стор</button>
      <p v-for="item in countries.data">
        <router-link class="router__link" :to="`/catalog/:${item.name}`">{{ item }}</router-link>
      </p>
    </div>
    <div class="filter">
      <input placeholder="фильтр" type="text" v-model="filter" />
      <router-link class="router__link" :to="`/catalog/:${filter}`"><button>найти</button></router-link>
      <p>
        воспользуйтесь фильтром чтобы просмотреть все страны<br />
        с указанным названием<br />(если вбить R то найдет все страные с R в начале)
      </p>
    </div>
  </div>
</template>

<style scoped>
.store__visual {
  margin-top: 40px;
  width: 1239.5px;
  height: 245px;
  display: flex;
  justify-content: space-between;
  border: 4px double rgb(85, 170, 90);
  padding: 10px 60px 60px 10px;
  overflow: hidden;
  overflow-y: scroll;
  opacity: 0;
  animation: appearance 2s forwards;
  animation-delay: 10.5s;
}
.filter {
  margin-top: 23px;
}
.filter input {
  margin-right: 15px;
}
.filter p {
  color: white;
  font-size: 20px;
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
