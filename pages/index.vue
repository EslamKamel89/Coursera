<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">home</h2>
  <button
    class="bg-blue-500 text-white px-3 py-2 rounded-xl"
    @click="toggleInfo"
  >
    {{ showInfo ? "Hide" : "Show" }} Info
  </button>
  <template v-if="showInfo">
    <img
      src="/assets/images/programming2.png"
      class="rounded-lg my-2 shadow-lg"
    />
    <LazyNuxt />
    <img src="/images/programming.png" class="rounded-lg my-2 shadow-lg" />
  </template>
</template>

<script setup lang="ts">
const showInfo = ref(false);
const toggleInfo = () => {
  showInfo.value = !showInfo.value;
};
</script>

<style scoped></style>
