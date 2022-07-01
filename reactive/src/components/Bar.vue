<script setup lang="ts">
const props = defineProps();
</script>

<template>
  <div class="bar">
    <h1>Heya!</h1>
  </div>
</template>

<style scoped lang="scss">
.bar {
  width: 40px;
  background: blue;
  text-align: center;
  border: 1px solid;
  animation: grow 2s forwards;
  margin-left: calc(5px / 2);
  margin-right: calc(5px / 2);
  align-self: flex-end;
  display: flex;
  align-items: center;

  .label {
    all: unset;
    color: white;
    flex: auto;
  }
}
</style>
