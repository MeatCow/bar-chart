<script setup lang="ts">
import { reactive, ref } from "vue";
import Bar from "./Bar.vue";

const state = reactive({
  title: {
    name: "My Chart",
    fontSize: 11,
    fontColour: "blue",
  },
  bars: [
    { label: "first", value: 1 },
    { label: "second", value: 2 },
    { label: "third", value: 3 },
    { label: "fourth", value: 4 },
    { label: "fifth", value: 5 },
  ],
});
</script>

<template>
  <article class="container">
    <span>{{ state.title.name }}</span>
    <div class="chart">
      <li v-for="barData in state.bars">{{ <Bar />}}</li>
    </div>
  </article>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
}
.chart {
  width: 250px;
  height: 100px;
  margin: auto;
  border-left: 3px solid;
  border-bottom: 3px solid;
  border-color: #2196f3;
  display: flex;
  flex-direction: row;
}
@keyframes grow {
  0% {
    height: 0;
  }
}
</style>
