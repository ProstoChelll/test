<script setup lang="ts"></script>

<template>
  <span>
    <span class="line1">
      <span class="inside__line1"></span>
      <span class="inside__line1__2"></span>
    </span>
    <span class="line2">
      <span class="inside__line2"></span>
      <span class="inside__line2__2"></span>
    </span>
  </span>
</template>

<style scoped>
.line1 {
  position: absolute;
  top: 0px;
  width: 50px;
  height: 8px;
  background-color: rgb(85, 170, 90);
  filter: drop-shadow(0 0 15px rgb(85, 170, 90));
}
.inside__line1 {
  position: absolute;
  width: 50px;
  height: 4px;

  background-color: rgb(10, 101, 25);
}
.inside__line1__2 {
  position: absolute;
  width: 50px;
  height: 4px;
  margin-top: 8px;
  background-color: rgb(8, 73, 19);
}
.line2 {
  transform: rotate(90deg);
  position: absolute;
  top: 21px;
  left: -22px;
  width: 50px;
  height: 8px;
  background-color: rgb(10, 101, 25);
  filter: drop-shadow(0 0 20px rgb(85, 170, 90));
}
.inside__line2 {
  position: absolute;
  width: 45px;
  height: 4px;
  margin-left: 4px;
  background-color: rgb(85, 170, 90);
}
.inside__line2__2 {
  position: absolute;
  width: 40px;
  height: 4px;
  margin-top: -4px;
  margin-left: 9px;
  background-color: rgb(8, 73, 19);
}
</style>
