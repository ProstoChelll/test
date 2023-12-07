<script setup lang="ts">
import { ref } from "vue";
import { getFilterData } from "../server/getData";
import { useCountries } from "../store/countries";

let countries = useCountries();
let filter = ref("");

function findAndDownloadData() {
  let lastId = 0;
  if (!(countries.data.length == 0)) {
    lastId = countries.data[countries.data.length - 1].id;
  }
  return getFilterData(filter.value, lastId);
}
function writeDataInStore() {
  countries.data.push(...findAndDownloadData());
}
</script>

<template>
  <div class="all">
    <div class="ctable">
      <h2>Перехват данных</h2>
      <input type="text" placeholder="фильтр" v-model="filter" />
      <button @click="writeDataInStore()">начать загрузку</button>
      <p>
        Чтобы получить все данные конкретной страны<br />введите код страны в поле сверху. <br />Чтобы получить все данные всех
        стран ничего не вводите<br />Пример:<br />RU { "name": "Russia", "id": 0 }
      </p>
    </div>
    <div class="data__preview">
      <h2>Предпросмотр данных</h2>
      <p v-for="item in findAndDownloadData()">{{ item }}</p>
    </div>
  </div>
</template>

<style scoped>
.ctable {
  width: 540px;
  border: 2px outset rgb(85, 170, 90);
  padding: 10px 60px 60px 10px;
}
.ctable h2 {
  margin-top: 0px;
  color: white;
}
.ctable input {
  margin-right: 20px;
}
.ctable p {
  color: white;
  font-size: 20px;
}
.all {
  display: flex;
  opacity: 0;
  gap: 30px;
  animation: appearance 2s forwards;
  animation-delay: 10.5s;
}
.data__preview {
  width: 600px;
  height: 222px;
  border: 2px outset rgb(85, 170, 90);
  padding: 10px 60px 60px 10px;
  overflow: hidden;
  overflow-y: scroll;
}
.data__preview h2 {
  margin-top: 0;
  color: white;
}
.data__preview p {
  color: white;
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
